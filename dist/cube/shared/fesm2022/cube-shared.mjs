import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import * as i1 from 'keycloak-angular';
import * as i2 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as i5 from '@angular/router';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

class HeaderComponent {
    constructor(keycloak, translateService) {
        this.keycloak = keycloak;
        this.translateService = translateService;
        this.imgSrc = 'assets/images/profile.jpg';
        this.icon = faCube;
        this.languages = [];
        this.isNavbarCollapsed = true;
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
        this.languages.push({
            name: 'English',
            langIdentifier: 'en-EN',
            flagPath: 'assets/images/en-EN.png',
        }, {
            name: 'Italiano',
            langIdentifier: 'it-IT',
            flagPath: 'assets/images/it-IT.png',
        }, {
            name: 'Français',
            langIdentifier: 'fr-FR',
            flagPath: 'assets/images/fr-FR.png',
        });
        this.languages.sort();
    }
    //Questo ngOnInit ascolta le modifiche nell'oggetto userDTO all'interno del servizio
    //auth e aggiorna le proprietà del componente (userDTO e la lingua predefinita tramite
    //TranslateService) in base a tali modifiche. Questo può essere utilizzato per inizializzare
    //o aggiornare le informazioni del componente in base allo stato dell'utente.
    ngOnInit() {
        // Sottoscrizione all'observable userDTOBehaviorSubject all'interno del servizio auth
        this.auth.userDTOBehaviorSubject.subscribe({
            next: (receivedUserDTO) => {
                // La funzione di callback 'next' viene chiamata quando c'è una modifica nell'oggetto userDTO
                // Imposta la proprietà userDTO del componente con il nuovo valore ricevuto
                this.userDTO = receivedUserDTO;
                this.translateService.use(
                // Utilizza il servizio di traduzione (TranslateService) per impostare la lingua predefinita
                // dall'oggetto propertiesDTO dell'utente corrente
                this.userDTO?.propertiesDTO?.defaultLanguage);
            },
        });
    }
    login() {
        this.keycloak.login(this.keycloakLoginOptions);
        // this.keycloak.getKeycloakInstance().onAuthLogout()
    }
    logout() {
        this.webSocket.disconnect().then(() => {
            this.keycloak.logout(this.properties.redirectUri);
        });
    }
    changeLanguage(lang) {
        // Utilizza il servizio di traduzione (TranslateService) per impostare la lingua dell'applicazione
        this.translateService.use(lang);
    }
    updateStatus(status) {
        this.userService.updateStatus(status).subscribe({
            next: (response) => {
                if (response && this.userDTO) { // aggiungi controllo
                    this.userDTO.propertiesDTO.status = status;
                    this.auth.userDTOBehaviorSubject.next(this.userDTO); // ora TypeScript sa che userDTO non è undefined
                }
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, deps: [{ token: i1.KeycloakService }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: HeaderComponent, selector: "cube-shared", inputs: { auth: "auth", webSocket: "webSocket", userService: "userService", properties: "properties", keycloakLoginOptions: "keycloakLoginOptions" }, ngImport: i0, template: "<nav class=\"navbar navbar-expand-xl\">\r\n    <div class=\"container-fluid\">\r\n\r\n        <!-- ## NAVBAR HOME TO PORTAL ## -->\r\n        <div class=\"navbar-brand\">\r\n            <a href=\"https://docmon.pccube.com/portal\">\r\n                <img alt=\"cubePortalLogo\" class=\"home\" src=\"assets/images/pccube-solo-cubo.png\">\r\n            </a>\r\n        </div>\r\n\r\n        <!-- ## NAVBAR LOGO ## -->\r\n        <div class=\"navbar-brand\">\r\n            <img alt=\"cubeChatLogo\" routerLink=\"/\" style=\"cursor:pointer;width: 275px; height: 50px;\"\r\n                src=\"assets/images/pccube.png\">\r\n        </div>\r\n\r\n        <!-- ## NAVBAR TOGGLER - QUANDO SCHERMO PICCOLO ## -->\r\n        <button class=\"navbar-toggler shadow-none\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\">\r\n            <span>\r\n                <img alt=\"navbarToggler\" src=\"assets/images/navbar-toggler.png\">\r\n            </span>\r\n        </button>\r\n\r\n        <!-- ## CORPO DELLA NAVBAR COLLASSABILE ## -->\r\n        <div class=\"collapse navbar-collapse justify-content-end\" [ngbCollapse]=\"isNavbarCollapsed\">\r\n            <!-- ## LISTA DEGLI ELEMENTI DELLA NAVBAR ## -->\r\n            <ul class=\"list-group list-group-horizontal align-items-center justify-content-center\">\r\n\r\n                <!-- ## NOME E COGNOME UTENTE - SOLO TESTO ## -->\r\n                <li *ngIf=\"isNavbarCollapsed\" class=\"list-group-item\">\r\n                    <div class=\"nav-link user-menu\">\r\n                        {{userDTO?.name}} {{userDTO?.surname}}\r\n                    </div>\r\n                </li>\r\n\r\n                <li *ngIf=\"userDTO\" ngbDropdown class=\"list-group-item\">\r\n                    <div ngbDropdown class=\"dropdown\">\r\n                        <button ngbDropdownToggle class=\"user-menu\">\r\n                            <img alt=\"user status\" src=\"assets/images/{{ userDTO!.propertiesDTO!.status }}.png\" />\r\n                        </button>\r\n                        <div ngbDropdownMenu>\r\n                            <button *ngFor=\"let status of stati\" class=\"btn\" ngbDropdownItem\r\n                                (click)=\"updateStatus(status.name)\">\r\n                                <img class=\"me-2\" alt=\"{{status.name}}\" src=\"{{ status.iconPath }}\" />\r\n                                {{\"generic.\" + status.name | translate}}\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <!-- ## USER MENU ## -->\r\n                <li ngbDropdown class=\"list-group-item\">\r\n                    <button *ngIf=\"!userDTO\" class=\"user-menu\" (click)=\"login()\">{{'Login'}}</button>\r\n                    <div *ngIf=\"userDTO\">\r\n                        <button ngbDropdownToggle class=\"user-menu\">\r\n                            <img alt=\"profilePicture\" class=\"rounded-5\" src=\"{{userDTO.propertiesDTO?.profilePicture}}\"\r\n                                width=\"32\" height=\"32\">\r\n                        </button>\r\n                        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                            <button ngbDropdownItem routerLink=\"/profile\">{{\"generic.profile\"|translate}}</button>\r\n                            <button ngbDropdownItem (click)=\"logout()\">{{'Logout'}}</button>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <!-- ## LANGUAGE SELECTOR ## -->\r\n                <li ngbDropdown class=\"list-group-item\">\r\n                    <button ngbDropdownToggle class=\"user-menu\">\r\n                        <!--\r\n                            Aggiungere salvataggio a db e update\r\n                            <img src='assets/images/{{userDto?.propertiesDTO?.defaultLanguage}}.png'>\r\n                        -->\r\n                        <img alt=\"languageFlag\" src='{{\"lang.flag-picture\" | translate}}'>\r\n                    </button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                        <button *ngFor=\"let language of languages\" ngbDropdownItem\r\n                            (click)=\"changeLanguage(language.langIdentifier)\">\r\n                            <img alt=\"flagLanguageDropdown\" src='{{language.flagPath}}'>\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n\r\n            </ul>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</nav>", styles: ["div.container-fluid{background:#130044;box-shadow:0 10px 50px #13004440;border-radius:.625rem;margin:1.125rem 1.25rem 0rem;min-height:5.813rem;height:100px}.navbar-brand{position:relative;left:50%;transform:translate(-50%);display:block}li.list-group-item{background:transparent;border:none}.dropdown-menu{border-radius:.625rem;min-width:inherit;padding:.25rem}button:hover,li.dropdown-item{background-color:transparent}.user-menu{border:none;background:transparent;color:#fff;white-space:nowrap}img.rounded-5{object-fit:cover}.badge{background-color:#fff;color:#130044}.dropdown-notification-toggle{color:#130044}.notification-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:21rem}.notification-text-new{color:#130044}ul.dropdown-menu{min-width:15rem;max-height:10rem;overflow-y:auto}li:active{color:#130044}hr.dropdown-divider{margin:auto;margin-top:.125rem;margin-bottom:.125rem}.home{position:absolute;left:-800px;top:-5px;height:25px;width:25px}\n"], dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgbCollapse, selector: "[ngbCollapse]", inputs: ["animation", "ngbCollapse", "horizontal"], outputs: ["ngbCollapseChange", "shown", "hidden"], exportAs: ["ngbCollapse"] }, { kind: "directive", type: i4.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "popperOptions", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { kind: "directive", type: i4.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { kind: "directive", type: i4.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { kind: "directive", type: i4.NgbDropdownItem, selector: "[ngbDropdownItem]", inputs: ["disabled"] }, { kind: "directive", type: i5.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cube-shared', template: "<nav class=\"navbar navbar-expand-xl\">\r\n    <div class=\"container-fluid\">\r\n\r\n        <!-- ## NAVBAR HOME TO PORTAL ## -->\r\n        <div class=\"navbar-brand\">\r\n            <a href=\"https://docmon.pccube.com/portal\">\r\n                <img alt=\"cubePortalLogo\" class=\"home\" src=\"assets/images/pccube-solo-cubo.png\">\r\n            </a>\r\n        </div>\r\n\r\n        <!-- ## NAVBAR LOGO ## -->\r\n        <div class=\"navbar-brand\">\r\n            <img alt=\"cubeChatLogo\" routerLink=\"/\" style=\"cursor:pointer;width: 275px; height: 50px;\"\r\n                src=\"assets/images/pccube.png\">\r\n        </div>\r\n\r\n        <!-- ## NAVBAR TOGGLER - QUANDO SCHERMO PICCOLO ## -->\r\n        <button class=\"navbar-toggler shadow-none\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\">\r\n            <span>\r\n                <img alt=\"navbarToggler\" src=\"assets/images/navbar-toggler.png\">\r\n            </span>\r\n        </button>\r\n\r\n        <!-- ## CORPO DELLA NAVBAR COLLASSABILE ## -->\r\n        <div class=\"collapse navbar-collapse justify-content-end\" [ngbCollapse]=\"isNavbarCollapsed\">\r\n            <!-- ## LISTA DEGLI ELEMENTI DELLA NAVBAR ## -->\r\n            <ul class=\"list-group list-group-horizontal align-items-center justify-content-center\">\r\n\r\n                <!-- ## NOME E COGNOME UTENTE - SOLO TESTO ## -->\r\n                <li *ngIf=\"isNavbarCollapsed\" class=\"list-group-item\">\r\n                    <div class=\"nav-link user-menu\">\r\n                        {{userDTO?.name}} {{userDTO?.surname}}\r\n                    </div>\r\n                </li>\r\n\r\n                <li *ngIf=\"userDTO\" ngbDropdown class=\"list-group-item\">\r\n                    <div ngbDropdown class=\"dropdown\">\r\n                        <button ngbDropdownToggle class=\"user-menu\">\r\n                            <img alt=\"user status\" src=\"assets/images/{{ userDTO!.propertiesDTO!.status }}.png\" />\r\n                        </button>\r\n                        <div ngbDropdownMenu>\r\n                            <button *ngFor=\"let status of stati\" class=\"btn\" ngbDropdownItem\r\n                                (click)=\"updateStatus(status.name)\">\r\n                                <img class=\"me-2\" alt=\"{{status.name}}\" src=\"{{ status.iconPath }}\" />\r\n                                {{\"generic.\" + status.name | translate}}\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <!-- ## USER MENU ## -->\r\n                <li ngbDropdown class=\"list-group-item\">\r\n                    <button *ngIf=\"!userDTO\" class=\"user-menu\" (click)=\"login()\">{{'Login'}}</button>\r\n                    <div *ngIf=\"userDTO\">\r\n                        <button ngbDropdownToggle class=\"user-menu\">\r\n                            <img alt=\"profilePicture\" class=\"rounded-5\" src=\"{{userDTO.propertiesDTO?.profilePicture}}\"\r\n                                width=\"32\" height=\"32\">\r\n                        </button>\r\n                        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                            <button ngbDropdownItem routerLink=\"/profile\">{{\"generic.profile\"|translate}}</button>\r\n                            <button ngbDropdownItem (click)=\"logout()\">{{'Logout'}}</button>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <!-- ## LANGUAGE SELECTOR ## -->\r\n                <li ngbDropdown class=\"list-group-item\">\r\n                    <button ngbDropdownToggle class=\"user-menu\">\r\n                        <!--\r\n                            Aggiungere salvataggio a db e update\r\n                            <img src='assets/images/{{userDto?.propertiesDTO?.defaultLanguage}}.png'>\r\n                        -->\r\n                        <img alt=\"languageFlag\" src='{{\"lang.flag-picture\" | translate}}'>\r\n                    </button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                        <button *ngFor=\"let language of languages\" ngbDropdownItem\r\n                            (click)=\"changeLanguage(language.langIdentifier)\">\r\n                            <img alt=\"flagLanguageDropdown\" src='{{language.flagPath}}'>\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n\r\n            </ul>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</nav>", styles: ["div.container-fluid{background:#130044;box-shadow:0 10px 50px #13004440;border-radius:.625rem;margin:1.125rem 1.25rem 0rem;min-height:5.813rem;height:100px}.navbar-brand{position:relative;left:50%;transform:translate(-50%);display:block}li.list-group-item{background:transparent;border:none}.dropdown-menu{border-radius:.625rem;min-width:inherit;padding:.25rem}button:hover,li.dropdown-item{background-color:transparent}.user-menu{border:none;background:transparent;color:#fff;white-space:nowrap}img.rounded-5{object-fit:cover}.badge{background-color:#fff;color:#130044}.dropdown-notification-toggle{color:#130044}.notification-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:21rem}.notification-text-new{color:#130044}ul.dropdown-menu{min-width:15rem;max-height:10rem;overflow-y:auto}li:active{color:#130044}hr.dropdown-divider{margin:auto;margin-top:.125rem;margin-bottom:.125rem}.home{position:absolute;left:-800px;top:-5px;height:25px;width:25px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.KeycloakService }, { type: i2.TranslateService }]; }, propDecorators: { auth: [{
                type: Input
            }], webSocket: [{
                type: Input
            }], userService: [{
                type: Input
            }], properties: [{
                type: Input
            }], keycloakLoginOptions: [{
                type: Input
            }] } });

class HeaderModule {
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
                    exports: [HeaderComponent]
                }]
        }] });

/*
 * Public API Surface of Cube Shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HeaderComponent, HeaderModule };
//# sourceMappingURL=cube-shared.mjs.map
