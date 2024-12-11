import { Component,OnInit,Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakLoginOptions } from 'keycloak-js';
import { SharedConfig } from '../shared.interface';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
import { WebSocketService } from '../services/websocket/websocket.service';
import { Language,Status,UserDTO } from '../types/types';

@Component({
  selector: 'cube-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDTO?: UserDTO;
  imgSrc?: string = 'assets/images/profile.jpg';
  icon = faCube;
  languages: Language[] = [];
  isNavbarCollapsed = true;

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
    @Inject('SHARED_CONFIG') private config: SharedConfig
  ) {
    console.log('HeaderComponent costruttore chiamato');
    this.languages = [
      {
        name: 'English',
        langIdentifier: 'en-EN',
        flagPath: 'assets/images/en-EN.png',
      },
      {
        name: 'Italiano',
        langIdentifier: 'it-IT',
        flagPath: 'assets/images/it-IT.png',
      },
      {
        name: 'Français',
        langIdentifier: 'fr-FR',
        flagPath: 'assets/images/fr-FR.png',
      }
    ].sort();
  }

  ngOnInit(): void {
    this.auth.userDTOBehaviorSubject.subscribe({
      next: (receivedUserDTO: any) => {
        this.userDTO = receivedUserDTO;
        if (this.userDTO?.propertiesDTO?.defaultLanguage) {
          this.translateService.use(this.userDTO.propertiesDTO.defaultLanguage);
        }
      },
    });
  }

  login() {
    this.keycloak.login({
      redirectUri: this.config.loginRedirectChatHomePage 
    });
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