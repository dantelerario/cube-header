import * as i0 from '@angular/core';
import { Injectable, Inject, Component, NgModule } from '@angular/core';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import * as i2 from 'keycloak-angular';
import * as i2$1 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, filter, switchMap, Subject } from 'rxjs';
import * as i1 from '@angular/common/http';
import * as Stomp from 'stompjs';
import * as SockJs from 'sockjs-client';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

const USER_ENDPOINTS = {
    SAVE: '/user',
    GET_USER: '/user',
    GET_FILTERED: '/user/all',
    UPDATE_PICTURE: '/properties/picture',
    UPDATE_ITEMS_PER_PAGE: '/properties/itemPerPage',
    UPDATE_LANGUAGE: '/properties/language',
    UPDATE_STATUS: '/properties/status',
    GET_PERMISSIONS: '/permission' // /{userId} verrà aggiunto dinamicamente
};

class UserService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    getPortalUrl(endpoint) {
        return `${this.config.baseUrl}${this.config.separator}${this.config.basePortPortal}${endpoint}`;
    }
    getBaseUrl(endpoint) {
        return `${this.config.baseUrl}${this.config.separator}${this.config.basePort}${endpoint}`;
    }
    save() {
        return this.http.post(this.getPortalUrl(USER_ENDPOINTS.SAVE), {});
    }
    getUser(userId) {
        return this.http.get(`${this.getPortalUrl(USER_ENDPOINTS.GET_USER)}/${userId}`);
    }
    getUserListFiltered(filterKey, page, excludeIdChat) {
        return this.http.get(`${this.getPortalUrl(USER_ENDPOINTS.GET_FILTERED)}/${filterKey}/${page}`);
    }
    updateProfilePic(picture) {
        return this.http.put(this.getPortalUrl(USER_ENDPOINTS.UPDATE_PICTURE), picture);
    }
    updateItemPerPage(itemPerPage) {
        return this.http.put(this.getPortalUrl(USER_ENDPOINTS.UPDATE_ITEMS_PER_PAGE), itemPerPage);
    }
    updateLanguage(lang) {
        return this.http.put(this.getPortalUrl(USER_ENDPOINTS.UPDATE_LANGUAGE), lang);
    }
    updateStatus(status) {
        return this.http.put(this.getPortalUrl(USER_ENDPOINTS.UPDATE_STATUS), status);
    }
    getUserPermissions(userId) {
        return this.http.get(`${this.getBaseUrl(USER_ENDPOINTS.GET_PERMISSIONS)}/${userId}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UserService, deps: [{ token: i1.HttpClient }, { token: 'SHARED_CONFIG' }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UserService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['SHARED_CONFIG']
                }] }]; } });

class AuthService {
    constructor(http, userService, config) {
        this.http = http;
        this.userService = userService;
        this.config = config;
        // BehaviorSubjects per lo stato dell'utente
        this.userDTOBehaviorSubject = new BehaviorSubject(undefined);
        this.userKeycloakBehaviorSubject = new BehaviorSubject(undefined);
        // Sottoscrizione per gestire gli aggiornamenti del profilo Keycloak
        this.userKeycloakBehaviorSubject.pipe(filter(userKeycloak => !!userKeycloak), switchMap(userKeycloak => userService.save().pipe(switchMap(() => userService.getUser(userKeycloak.id))))).subscribe(userDTO => {
            this.userDTO = userDTO;
            this.userDTOBehaviorSubject.next(userDTO);
        });
    }
    // Metodo per aggiornare il profilo Keycloak
    updateKeycloakProfile(profile) {
        this.userKeycloak = profile;
        this.userKeycloakBehaviorSubject.next(profile);
    }
    // Metodo per ottenere l'utente corrente
    getCurrentUser() {
        return this.userDTO;
    }
    // Metodo per resettare lo stato
    reset() {
        this.userKeycloak = undefined;
        this.userDTO = undefined;
        this.userDTOBehaviorSubject.next(undefined);
        this.userKeycloakBehaviorSubject.next(undefined);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, deps: [{ token: i1.HttpClient }, { token: UserService }, { token: 'SHARED_CONFIG' }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: UserService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['SHARED_CONFIG']
                }] }]; } });

const WEBSOCKET_ENDPOINTS = {
    // Endpoint base per la connessione WebSocket
    BASE_ENDPOINT: '/cube-chat-web-socket',
    // Endpoint per invio messaggi
    REGISTER: '/register',
    DISCONNECT: '/disconnect',
    SEND_TO_ONE: '/send-to-one',
    SEND_TO_GROUP: '/send-to-group',
    READ_MESSAGE: '/readMessage',
    AM_I_WRITING: '/am-i-writing',
    // Endpoint per sottoscrizioni
    PRIVATE_SUBSCRIPTION: '/private',
    STATUS_SUBSCRIPTION: '/status',
    IS_WRITING_SUBSCRIPTION: '/is-writing',
    CHECK_SUBSCRIPTION: '/check'
};

class WebSocketService {
    constructor(authService, keycloak, config) {
        this.authService = authService;
        this.keycloak = keycloak;
        this.config = config;
        this.subscriptions = [];
        this.isConnected = false;
        this.writingUsers = {};
        this.newChatMessage = new Subject();
        this.newStatus = new Subject();
        this.othersWriting = new BehaviorSubject({});
    }
    getWebSocketUrl() {
        return `${this.config.baseUrl}${this.config.separator}${this.config.basePort}${WEBSOCKET_ENDPOINTS.BASE_ENDPOINT}`;
    }
    connect() {
        this.stompClient = Stomp.over(new SockJs(this.getWebSocketUrl()));
        this.stompClient.connect({}, () => {
            console.warn("CONNESSO A WEB SOCKET");
            this.authService.userKeycloakBehaviorSubject.subscribe({
                next: (user) => this.userData = user
            });
            this.isConnected = true;
            this.registerUser();
            this.privateSubscription();
            this.statusSubscription();
            this.writingSubscription();
        });
    }
    async disconnect() {
        this.disconnectUser();
        await this.stompClient?.disconnect(() => {
            this.subscriptions.forEach((sub) => sub.sub.unsubscribe());
        });
        this.isConnected = false;
    }
    registerUser() {
        this.stompClient?.send(`${WEBSOCKET_ENDPOINTS.REGISTER}.${this.keycloak.getKeycloakInstance().subject}`);
    }
    disconnectUser() {
        this.stompClient?.send(WEBSOCKET_ENDPOINTS.DISCONNECT);
    }
    sendToOne(trigger) {
        this.stompClient?.send(WEBSOCKET_ENDPOINTS.SEND_TO_ONE, {}, JSON.stringify(trigger));
    }
    amIWriting(idchat, isWriting) {
        this.stompClient?.send(`${WEBSOCKET_ENDPOINTS.AM_I_WRITING}.${idchat}.${isWriting}`);
    }
    sendToGroup(trigger) {
        this.stompClient?.send(WEBSOCKET_ENDPOINTS.SEND_TO_GROUP, {}, JSON.stringify(trigger));
    }
    readMessage(id) {
        this.stompClient?.send(`${WEBSOCKET_ENDPOINTS.READ_MESSAGE}.${id}`);
    }
    privateSubscription() {
        this.onSubscription("Private", this.stompClient.subscribe(`${WEBSOCKET_ENDPOINTS.PRIVATE_SUBSCRIPTION}.${this.keycloak.getKeycloakInstance().subject}`, (message) => {
            this.newChatMessage.next(message.body);
        }));
    }
    statusSubscription() {
        this.onSubscription("Status", this.stompClient.subscribe(`${WEBSOCKET_ENDPOINTS.STATUS_SUBSCRIPTION}.${this.keycloak.getKeycloakInstance().subject}`, (newUserStatus) => {
            this.newStatus.next(JSON.parse(newUserStatus.body));
        }));
    }
    writingSubscription() {
        this.onSubscription("Writing", this.stompClient.subscribe(`${WEBSOCKET_ENDPOINTS.IS_WRITING_SUBSCRIPTION}.${this.keycloak.getKeycloakInstance().subject}`, (writingDto) => {
            const w = JSON.parse(writingDto.body);
            if (w.isWriting && (!this.writingUsers[w.chatId] || !this.writingUsers[w.chatId].includes(w.userId))) {
                if (!this.writingUsers[w.chatId]) {
                    this.writingUsers[w.chatId] = [];
                }
                this.writingUsers[w.chatId].push(w.userId);
            }
            else if (!w.isWriting && this.writingUsers[w.chatId] && this.writingUsers[w.chatId].includes(w.userId)) {
                this.writingUsers[w.chatId].splice(this.writingUsers[w.chatId].indexOf(w.userId), 1);
                if (this.writingUsers[w.chatId].length == 0) {
                    delete this.writingUsers[w.chatId];
                }
            }
            this.othersWriting.next(this.writingUsers);
        }));
    }
    onSubscription(key, sub) {
        for (let i = 0; i < this.subscriptions.length; i++) {
            if (this.subscriptions[i].key == key) {
                this.subscriptions[i].sub.unsubscribe();
                this.subscriptions.splice(i, 1);
            }
        }
        this.subscriptions.push({ key: key, sub: sub });
    }
    checkMessageSubscription(idChat, callBack) {
        this.onSubscription("Check", this.stompClient.subscribe(`${WEBSOCKET_ENDPOINTS.CHECK_SUBSCRIPTION}.${idChat}.${this.keycloak.getKeycloakInstance().subject}`, callBack));
    }
    checkmessageUnsubscribe() {
        for (let i = 0; i < this.subscriptions.length; i++) {
            if (this.subscriptions[i].key == 'Check') {
                this.subscriptions[i].sub.unsubscribe();
                this.subscriptions.splice(i, 1);
            }
        }
    }
    ngOnDestroy() {
        this.disconnect();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: WebSocketService, deps: [{ token: AuthService }, { token: i2.KeycloakService }, { token: 'SHARED_CONFIG' }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: WebSocketService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: WebSocketService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: AuthService }, { type: i2.KeycloakService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['SHARED_CONFIG']
                }] }]; } });

class HeaderComponent {
    constructor(keycloak, translateService, auth, webSocket, userService, config) {
        this.keycloak = keycloak;
        this.translateService = translateService;
        this.auth = auth;
        this.webSocket = webSocket;
        this.userService = userService;
        this.config = config;
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
        console.log('HeaderComponent costruttore chiamato');
        this.keycloakLoginOptions = {
            redirectUri: this.config.loginRedirectChatHomePage,
        };
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
        this.auth.userDTOBehaviorSubject.subscribe({
            next: (receivedUserDTO) => {
                this.userDTO = receivedUserDTO;
                if (this.userDTO?.propertiesDTO?.defaultLanguage) {
                    this.translateService.use(this.userDTO.propertiesDTO.defaultLanguage);
                }
            },
        });
    }
    login() {
        this.keycloak.login(this.keycloakLoginOptions);
    }
    logout() {
        this.webSocket.disconnect().then(() => {
            this.keycloak.logout(this.config.redirectUri);
        });
    }
    changeLanguage(lang) {
        this.translateService.use(lang);
    }
    updateStatus(status) {
        this.userService.updateStatus(status).subscribe({
            next: (response) => {
                if (response && this.userDTO) {
                    this.userDTO.propertiesDTO.status = status;
                    this.auth.userDTOBehaviorSubject.next(this.userDTO);
                }
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, deps: [{ token: i2.KeycloakService }, { token: i2$1.TranslateService }, { token: AuthService }, { token: WebSocketService }, { token: UserService }, { token: 'SHARED_CONFIG' }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: HeaderComponent, selector: "cube-header", ngImport: i0, template: "<p>works</p>", styles: ["div.container-fluid{background:#130044;box-shadow:0 10px 50px #13004440;border-radius:.625rem;margin:1.125rem 1.25rem 0rem;min-height:5.813rem;height:100px}.navbar-brand{position:relative;left:50%;transform:translate(-50%);display:block}li.list-group-item{background:transparent;border:none}.dropdown-menu{border-radius:.625rem;min-width:inherit;padding:.25rem}button:hover,li.dropdown-item{background-color:transparent}.user-menu{border:none;background:transparent;color:#fff;white-space:nowrap}img.rounded-5{object-fit:cover}.badge{background-color:#fff;color:#130044}.dropdown-notification-toggle{color:#130044}.notification-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:21rem}.notification-text-new{color:#130044}ul.dropdown-menu{min-width:15rem;max-height:10rem;overflow-y:auto}li:active{color:#130044}hr.dropdown-divider{margin:auto;margin-top:.125rem;margin-bottom:.125rem}.home{position:absolute;left:-800px;top:-5px;height:25px;width:25px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cube-header', template: "<p>works</p>", styles: ["div.container-fluid{background:#130044;box-shadow:0 10px 50px #13004440;border-radius:.625rem;margin:1.125rem 1.25rem 0rem;min-height:5.813rem;height:100px}.navbar-brand{position:relative;left:50%;transform:translate(-50%);display:block}li.list-group-item{background:transparent;border:none}.dropdown-menu{border-radius:.625rem;min-width:inherit;padding:.25rem}button:hover,li.dropdown-item{background-color:transparent}.user-menu{border:none;background:transparent;color:#fff;white-space:nowrap}img.rounded-5{object-fit:cover}.badge{background-color:#fff;color:#130044}.dropdown-notification-toggle{color:#130044}.notification-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:21rem}.notification-text-new{color:#130044}ul.dropdown-menu{min-width:15rem;max-height:10rem;overflow-y:auto}li:active{color:#130044}hr.dropdown-divider{margin:auto;margin-top:.125rem;margin-bottom:.125rem}.home{position:absolute;left:-800px;top:-5px;height:25px;width:25px}\n"] }]
        }], ctorParameters: function () { return [{ type: i2.KeycloakService }, { type: i2$1.TranslateService }, { type: AuthService }, { type: WebSocketService }, { type: UserService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['SHARED_CONFIG']
                }] }]; } });

class HeaderModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, declarations: [HeaderComponent], imports: [CommonModule,
            TranslateModule,
            FontAwesomeModule,
            NgbModule,
            RouterModule], exports: [HeaderComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, providers: [
            AuthService,
            UserService,
            WebSocketService,
            {
                provide: 'SHARED_CONFIG',
                useValue: {
                    // valori di default che possono essere sovrascritti dall'app
                    separator: ':',
                    baseUrl: 'http://localhost',
                    basePort: '8101',
                    basePortPortal: '8100',
                    redirectUri: 'http://localhost:4201',
                    loginRedirectChatHomePage: 'http://localhost:4201'
                }
            }
        ], imports: [CommonModule,
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
                        AuthService,
                        UserService,
                        WebSocketService,
                        {
                            provide: 'SHARED_CONFIG',
                            useValue: {
                                // valori di default che possono essere sovrascritti dall'app
                                separator: ':',
                                baseUrl: 'http://localhost',
                                basePort: '8101',
                                basePortPortal: '8100',
                                redirectUri: 'http://localhost:4201',
                                loginRedirectChatHomePage: 'http://localhost:4201'
                            }
                        }
                    ]
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
