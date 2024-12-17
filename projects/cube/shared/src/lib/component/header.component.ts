import { Component,OnInit,Inject,Input,OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakLoginOptions } from 'keycloak-js';
import { SharedConfig } from '../types/shared.interface';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
import { WebSocketService } from '../services/websocket/websocket.service';
import { Language,Status,UserDTO,Notification as CustomNotification } from '../types/types';
import { NotificationService } from '../services/notification/notification.service';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { IMAGES } from '../constants/image-constants';

@Component({
  selector: 'cube-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
  @Input() properties: any;
  @Input() showNotifications: boolean = false;

  images = IMAGES;

  userDTO?: UserDTO;
  imgSrc?: string = 'assets/images/profile.jpg';
  icon = faCube;
  languages: Language[] = [];
  isNavbarCollapsed = true;
  keycloakLoginOptions: KeycloakLoginOptions;

  listNotifications: CustomNotification[] = [];
  notificationsCount: number = 0;
  private timer: any;
  totalUnredMessagesCount: number = 0;
  private webSocketSubscription?: Subscription;

  stati: Status[] = [
    {
      name: 'online',
      iconPath: 'assets/images/ONLINE.png',
    },
    {
      name: 'busy',
      iconPath: 'assets/images/BUSY.png',
    },
    {
      name: 'invisible',
      iconPath: 'assets/images/INVISIBLE.png',
    },
  ];

  constructor(
    private keycloak: KeycloakService,
    private translateService: TranslateService,
    private auth: AuthService,
    private webSocket: WebSocketService,
    private userService: UserService,
    private notificationService: NotificationService,
    @Inject('SHARED_CONFIG') private config: SharedConfig
  ) {
    console.log('HeaderComponent costruttore chiamato');
    this.keycloakLoginOptions = {
      redirectUri: this.config.loginRedirectChatHomePage,
    };
    this.languages = [
      {
        name: 'English',
        langIdentifier: 'en-EN',
        flagPath: '../../assets/images/en-EN.png',
      },
      {
        name: 'Italiano',
        langIdentifier: 'it-IT',
        flagPath: '../../assets/images/it-IT.png',
      },
      {
        name: 'Français',
        langIdentifier: 'fr-FR',
        flagPath: '../../assets/images/fr-FR.png',
      }
    ].sort();
  }

  ngOnInit(): void {
    this.keycloak.isLoggedIn().then(isLoggedIn => {
      if (isLoggedIn) {
        this.keycloak.loadUserProfile().then(profile => {
          this.auth.updateKeycloakProfile(profile);
          if (this.showNotifications) {
            this.initializeNotifications();
          }
        });
      }
    });

    this.auth.userDTOBehaviorSubject.subscribe({
      next: (receivedUserDTO) => {
        if (receivedUserDTO) {
          this.userDTO = receivedUserDTO;
          if (receivedUserDTO.propertiesDTO?.defaultLanguage) {
            this.translateService.use(receivedUserDTO.propertiesDTO.defaultLanguage);
          }
        }
      }
    });

    if (this.showNotifications) {
      this.webSocketSubscription = this.webSocket.newNotification.subscribe({
        next: (ping: boolean) => {
          if (ping) {
            this.updateNotifications();
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.webSocketSubscription) {
      this.webSocketSubscription.unsubscribe();
    }
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  private initializeNotifications(): void {
    if (!this.showNotifications) return;
    this.notificationService.getNotifications().subscribe(
      notifications => {
        this.listNotifications = notifications as CustomNotification[];;
        if (notifications.some(notification => notification.app == this.config.appIdentifier)) {
          this.notificationService.getTotalUnreadNotificationCount().subscribe(
            count => {
              this.totalUnredMessagesCount = count;
              this.setNotification();
            }
          );
        }
      }
    );
  }

  setNotification() {
    if (!this.showNotifications) return;
    this.transformDateNotification();
    this.countNotifications();
  }

  transformDateNotification() {
    const datePipe = new DatePipe('en-US');
    this.listNotifications.forEach((notification: CustomNotification) =>
      notification.sentAt = datePipe.transform(notification.sentAt,'dd/MM/yyyy - HH:mm:ss')
    );
  }

  countNotifications() {
    this.notificationsCount = 0;
    this.listNotifications.forEach((notification: CustomNotification) => {
      if (!notification.read && ((notification.app != this.config.appIdentifier) || (notification.app == this.config.appIdentifier && this.totalUnredMessagesCount != 0))) {
        this.notificationsCount += 1;
      }
    });
  }

  readAllNotifications() {
    if (!this.showNotifications) return;
    this.notificationService.readAllNotifications().subscribe();
    this.listNotifications.forEach(notification => notification.read = true);
    this.countNotifications();
  }

  updateNotifications() {
    if (!this.showNotifications) return;
    this.notificationService.getNotifications().subscribe(
      notifications => {
        this.listNotifications = notifications as CustomNotification[];;
        this.setNotification();
      }
    );
  }

  readNotificationAfterMouseStand(event: any,id: number) {
    if (!this.showNotifications) return;
    this.timer = setTimeout(() => {
      event.target.classList.remove('notification-text-new');
      this.notificationService.readOneNotification(id).subscribe();
      this.listNotifications.forEach((notification: CustomNotification) => {
        if (notification.id == id) {
          notification.read = true;
        }
      });
      this.countNotifications();
    },1000);
  }

  abortReadNotificationAfterMouseStand() {
    if (!this.showNotifications) return;
    clearTimeout(this.timer);
  }

  redirect(notification: CustomNotification) {
    if (!this.showNotifications) return;
    if (notification.app == this.config.appIdentifier && this.properties?.chatUrl) {
      window.location.href = this.properties.chatUrl;
    }
  }

  login() {
    this.keycloak.login(this.keycloakLoginOptions);
  }

  logout(): void {
    this.webSocket.disconnect().then(() => {
      this.keycloak.logout(this.config.redirectUri);
    });
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }

  updateStatus(status: string) {
    this.userService.updateStatus(status).subscribe({
      next: (response) => {
        if (response && this.userDTO) {
          this.userDTO.propertiesDTO!.status = status;
          this.auth.userDTOBehaviorSubject.next(this.userDTO);
        }
      },
    });
  }
}