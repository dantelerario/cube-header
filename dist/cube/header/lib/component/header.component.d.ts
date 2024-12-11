import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakLoginOptions } from 'keycloak-js';
import { AuthService, Language, Status, UserDTO, UserService, WebSocketService } from '../types/types';
import * as i0 from "@angular/core";
export declare class HeaderComponent implements OnInit {
    private keycloak;
    private translateService;
    auth: AuthService;
    webSocket: WebSocketService;
    userService: UserService;
    properties: any;
    keycloakLoginOptions: KeycloakLoginOptions;
    userDTO?: UserDTO;
    imgSrc?: string;
    icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
    languages: Language[];
    isNavbarCollapsed: boolean;
    stati: Status[];
    constructor(keycloak: KeycloakService, translateService: TranslateService);
    ngOnInit(): void;
    login(): void;
    logout(): void;
    changeLanguage(lang: string): void;
    updateStatus(status: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "cube-header", never, { "auth": { "alias": "auth"; "required": false; }; "webSocket": { "alias": "webSocket"; "required": false; }; "userService": { "alias": "userService"; "required": false; }; "properties": { "alias": "properties"; "required": false; }; "keycloakLoginOptions": { "alias": "keycloakLoginOptions"; "required": false; }; }, {}, never, never, false, never>;
}
