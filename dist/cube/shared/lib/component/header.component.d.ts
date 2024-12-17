import { OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakLoginOptions } from 'keycloak-js';
import { SharedConfig } from '../types/shared.interface';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
import { WebSocketService } from '../services/websocket/websocket.service';
import { Language, Status, UserDTO, Notification as CustomNotification } from '../types/types';
import { NotificationService } from '../services/notification/notification.service';
import * as i0 from "@angular/core";
export declare class HeaderComponent implements OnInit, OnDestroy {
    private keycloak;
    private translateService;
    private auth;
    private webSocket;
    private userService;
    private notificationService;
    private config;
    properties: any;
    showNotifications: boolean;
    /**
     * va passato il path dell'immagine nel selector del component padre
     * per es.
     * <cube-header
     * cubeLogo="assets/images/your-cube-logo.png"
     * portalLogo="assets/images/your-portal-logo.png">
     * </cube-header>
    */
    iconLogo: string;
    bigLogo: string;
    images: {
        BELL: string;
        BUSY: string;
        CUBE_PORTAL_LOGO1: string;
        EN_EN: string;
        ENVELOPE: string;
        FR_FR: string;
        INVISIBLE: string;
        IT_IT: string;
        NAVBAR_TOGGLER: string;
        ONLINE: string;
        PCCUBE_SOLO_CUBO: string;
        PCCUBE: string;
        READ_ALL: string;
    };
    userDTO?: UserDTO;
    imgSrc?: string;
    icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
    languages: Language[];
    isNavbarCollapsed: boolean;
    keycloakLoginOptions: KeycloakLoginOptions;
    listNotifications: CustomNotification[];
    notificationsCount: number;
    private timer;
    totalUnredMessagesCount: number;
    private webSocketSubscription?;
    stati: Status[];
    constructor(keycloak: KeycloakService, translateService: TranslateService, auth: AuthService, webSocket: WebSocketService, userService: UserService, notificationService: NotificationService, config: SharedConfig);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private initializeNotifications;
    setNotification(): void;
    transformDateNotification(): void;
    countNotifications(): void;
    readAllNotifications(): void;
    updateNotifications(): void;
    readNotificationAfterMouseStand(event: any, id: number): void;
    abortReadNotificationAfterMouseStand(): void;
    redirect(notification: CustomNotification): void;
    login(): void;
    logout(): void;
    changeLanguage(lang: string): void;
    updateStatus(status: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "cube-header", never, { "properties": { "alias": "properties"; "required": false; }; "showNotifications": { "alias": "showNotifications"; "required": false; }; "iconLogo": { "alias": "iconLogo"; "required": false; }; "bigLogo": { "alias": "bigLogo"; "required": false; }; }, {}, never, never, false, never>;
}
