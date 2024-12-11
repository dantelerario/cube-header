import { Component,Input,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakLoginOptions } from 'keycloak-js';
import { AuthService, Language, Status, UserDTO, UserService, WebSocketService } from '../types/types';

@Component({
  selector: 'cube-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() auth!: AuthService;
  @Input() webSocket!: WebSocketService;
  @Input() userService!: UserService;
  @Input() properties: any; // Tipo da definire in base alle tue properties
  @Input() keycloakLoginOptions!: KeycloakLoginOptions;

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
  ) {
    this.languages.push(
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
    );
    this.languages.sort();
  }

  //Questo ngOnInit ascolta le modifiche nell'oggetto userDTO all'interno del servizio
  //auth e aggiorna le proprietà del componente (userDTO e la lingua predefinita tramite
  //TranslateService) in base a tali modifiche. Questo può essere utilizzato per inizializzare
  //o aggiornare le informazioni del componente in base allo stato dell'utente.
  ngOnInit(): void {
    // Sottoscrizione all'observable userDTOBehaviorSubject all'interno del servizio auth
    this.auth.userDTOBehaviorSubject.subscribe({
      next: (receivedUserDTO: any) => {
        // La funzione di callback 'next' viene chiamata quando c'è una modifica nell'oggetto userDTO
        // Imposta la proprietà userDTO del componente con il nuovo valore ricevuto
        this.userDTO = receivedUserDTO;
        this.translateService.use(
          // Utilizza il servizio di traduzione (TranslateService) per impostare la lingua predefinita
          // dall'oggetto propertiesDTO dell'utente corrente
          this.userDTO?.propertiesDTO?.defaultLanguage!
        );
      },
    });
  }

  login() {
    this.keycloak.login(this.keycloakLoginOptions);
    // this.keycloak.getKeycloakInstance().onAuthLogout()
  }

  logout(): void {
    this.webSocket.disconnect().then(() => {
      this.keycloak.logout(this.properties.redirectUri);
    });
  }

  changeLanguage(lang: string) {
    // Utilizza il servizio di traduzione (TranslateService) per impostare la lingua dell'applicazione
    this.translateService.use(lang);
  }

  updateStatus(status: string) {
    this.userService.updateStatus(status).subscribe({
      next: (response) => {
        if (response && this.userDTO) {  // aggiungi controllo
          this.userDTO.propertiesDTO!.status = status;
          this.auth.userDTOBehaviorSubject.next(this.userDTO);  // ora TypeScript sa che userDTO non è undefined
        }
      },
    });
  }
}