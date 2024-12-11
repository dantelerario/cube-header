import * as i0 from '@angular/core';
import { Component, Inject, NgModule } from '@angular/core';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import * as i1 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

class HeaderComponent {
    constructor(
    // private keycloak: KeycloakService,
    translateService, 
    // private auth: AuthService,
    // private webSocket: WebSocketService,
    // private userService: UserService,
    config) {
        this.translateService = translateService;
        this.config = config;
        this.imgSrc = 'assets/images/profile.jpg';
        this.icon = faCube;
        this.languages = [];
        this.isNavbarCollapsed = true;
        // keycloakLoginOptions: KeycloakLoginOptions;
        this.stati = [
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
        console.log('HeaderComponent costruttore chiamato');
        // this.keycloakLoginOptions = { 
        //   redirectUri: this.config.loginRedirectChatHomePage,
        // };
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
    ngOnInit() {
        // this.auth.userDTOBehaviorSubject.subscribe({
        //   next: (receivedUserDTO: any) => {
        //     this.userDTO = receivedUserDTO;
        //     if (this.userDTO?.propertiesDTO?.defaultLanguage) {
        //       this.translateService.use(this.userDTO.propertiesDTO.defaultLanguage);
        //     }
        //   },
        // });
    }
    login() {
        // this.keycloak.login(this.keycloakLoginOptions);
    }
    // logout(): void {
    //   this.webSocket.disconnect().then(() => {
    //     this.keycloak.logout(this.config.redirectUri);
    //   });
    // }
    changeLanguage(lang) {
        this.translateService.use(lang);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, deps: [{ token: i1.TranslateService }, { token: 'SHARED_CONFIG' }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: HeaderComponent, selector: "cube-header", ngImport: i0, template: "<p>works</p>", styles: ["div.container-fluid{background:#130044;box-shadow:0 10px 50px #13004440;border-radius:.625rem;margin:1.125rem 1.25rem 0rem;min-height:5.813rem;height:100px}.navbar-brand{position:relative;left:50%;transform:translate(-50%);display:block}li.list-group-item{background:transparent;border:none}.dropdown-menu{border-radius:.625rem;min-width:inherit;padding:.25rem}button:hover,li.dropdown-item{background-color:transparent}.user-menu{border:none;background:transparent;color:#fff;white-space:nowrap}img.rounded-5{object-fit:cover}.badge{background-color:#fff;color:#130044}.dropdown-notification-toggle{color:#130044}.notification-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:21rem}.notification-text-new{color:#130044}ul.dropdown-menu{min-width:15rem;max-height:10rem;overflow-y:auto}li:active{color:#130044}hr.dropdown-divider{margin:auto;margin-top:.125rem;margin-bottom:.125rem}.home{position:absolute;left:-800px;top:-5px;height:25px;width:25px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cube-header', template: "<p>works</p>", styles: ["div.container-fluid{background:#130044;box-shadow:0 10px 50px #13004440;border-radius:.625rem;margin:1.125rem 1.25rem 0rem;min-height:5.813rem;height:100px}.navbar-brand{position:relative;left:50%;transform:translate(-50%);display:block}li.list-group-item{background:transparent;border:none}.dropdown-menu{border-radius:.625rem;min-width:inherit;padding:.25rem}button:hover,li.dropdown-item{background-color:transparent}.user-menu{border:none;background:transparent;color:#fff;white-space:nowrap}img.rounded-5{object-fit:cover}.badge{background-color:#fff;color:#130044}.dropdown-notification-toggle{color:#130044}.notification-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:21rem}.notification-text-new{color:#130044}ul.dropdown-menu{min-width:15rem;max-height:10rem;overflow-y:auto}li:active{color:#130044}hr.dropdown-divider{margin:auto;margin-top:.125rem;margin-bottom:.125rem}.home{position:absolute;left:-800px;top:-5px;height:25px;width:25px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['SHARED_CONFIG']
                }] }]; } });

class HeaderModule {
    constructor() {
        console.log('HeaderModule initialized');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, declarations: [HeaderComponent], imports: [CommonModule,
            TranslateModule,
            FontAwesomeModule,
            NgbModule,
            RouterModule], exports: [HeaderComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, imports: [CommonModule,
            TranslateModule,
            FontAwesomeModule,
            NgbModule,
            RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [HeaderComponent],
                    imports: [
                        CommonModule,
                        TranslateModule,
                        FontAwesomeModule,
                        NgbModule,
                        RouterModule
                    ],
                    exports: [HeaderComponent],
                    providers: [
                    // AuthService,
                    // UserService,
                    // WebSocketService,
                    // {
                    //   provide: 'SHARED_CONFIG',
                    //   useValue: {
                    //     // valori di default che possono essere sovrascritti dall'app
                    //     separator: ':',
                    //     baseUrl: 'http://localhost',
                    //     basePort: '8101',
                    //     basePortPortal: '8100',
                    //     redirectUri: 'http://localhost:4201',
                    //     loginRedirectChatHomePage: 'http://localhost:4201'
                    //   }
                    // }
                    ]
                }]
        }], ctorParameters: function () { return []; } });

/*
 * Public API Surface of Cube Shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HeaderComponent, HeaderModule };
//# sourceMappingURL=cube-shared.mjs.map
