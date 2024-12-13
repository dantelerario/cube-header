import * as i0 from '@angular/core';
import { Injectable, Inject, Component, Input, NgModule } from '@angular/core';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import * as i7 from '@angular/common';
import { DatePipe, CommonModule } from '@angular/common';
import * as i2 from 'keycloak-angular';
import * as i2$1 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, filter, switchMap, catchError, of, Subject } from 'rxjs';
import * as i1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as Stomp from 'stompjs';
import * as SockJs from 'sockjs-client';
import * as i8 from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as i9 from '@angular/router';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
        this.userKeycloakBehaviorSubject.pipe(filter(userKeycloak => !!userKeycloak?.id), switchMap(userKeycloak => userService.save().pipe(catchError(() => of(null)), switchMap(() => userService.getUser(userKeycloak.id))))).subscribe({
            next: userDTO => {
                if (userDTO) {
                    this.userDTO = userDTO;
                    this.userDTOBehaviorSubject.next(userDTO);
                }
            },
            error: () => this.reset()
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
    CHECK_SUBSCRIPTION: '/check',
    NOTIFICATION_SUBSCRIPTION: '/notification'
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
        this.newNotification = new Subject();
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
            this.notificationSubscription();
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
    notificationSubscription() {
        this.onSubscription("Notification", this.stompClient.subscribe(`${WEBSOCKET_ENDPOINTS.NOTIFICATION_SUBSCRIPTION}.${this.keycloak.getKeycloakInstance().subject}`, () => {
            this.newNotification.next(true);
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

class NotificationService {
    constructor(http, baseUrl, basePort, separator) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.basePort = basePort;
        this.separator = separator;
    }
    getNotifications() {
        return this.http.get(`${this.baseUrl}${this.separator}${this.basePort}/notification`);
    }
    getPaginatedNotifications(filterKeys, page) {
        return this.http.post(`${this.baseUrl}${this.separator}${this.basePort}/notification/all/filter`, { filterKeys, page });
    }
    readAllNotifications() {
        return this.http.put(`${this.baseUrl}${this.separator}${this.basePort}/notification`, {});
    }
    readOneNotification(id) {
        return this.http.put(`${this.baseUrl}${this.separator}${this.basePort}/notification/${id}`, {});
    }
    getTotalUnreadNotificationCount() {
        return this.http.get(`${this.baseUrl}${this.separator}${this.basePort}/notification/unread-message-count`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NotificationService, deps: [{ token: i1.HttpClient }, { token: 'BASE_URL' }, { token: 'BASE_PORT' }, { token: 'SEPARATOR' }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NotificationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['BASE_URL']
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['BASE_PORT']
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['SEPARATOR']
                }] }]; } });

class HeaderComponent {
    constructor(keycloak, translateService, auth, webSocket, userService, notificationService, config) {
        this.keycloak = keycloak;
        this.translateService = translateService;
        this.auth = auth;
        this.webSocket = webSocket;
        this.userService = userService;
        this.notificationService = notificationService;
        this.config = config;
        this.showNotifications = false;
        this.imgSrc = 'assets/images/profile.jpg';
        this.icon = faCube;
        this.languages = [];
        this.isNavbarCollapsed = true;
        this.listNotifications = [];
        this.notificationsCount = 0;
        this.totalUnredMessagesCount = 0;
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
    ngOnInit() {
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
                next: (ping) => {
                    if (ping) {
                        this.updateNotifications();
                    }
                }
            });
        }
    }
    ngOnDestroy() {
        if (this.webSocketSubscription) {
            this.webSocketSubscription.unsubscribe();
        }
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    initializeNotifications() {
        if (!this.showNotifications)
            return;
        this.notificationService.getNotifications().subscribe(notifications => {
            this.listNotifications = notifications;
            ;
            if (notifications.some(notification => notification.app == this.config.appIdentifier)) {
                this.notificationService.getTotalUnreadNotificationCount().subscribe(count => {
                    this.totalUnredMessagesCount = count;
                    this.setNotification();
                });
            }
        });
    }
    setNotification() {
        if (!this.showNotifications)
            return;
        this.transformDateNotification();
        this.countNotifications();
    }
    transformDateNotification() {
        const datePipe = new DatePipe('en-US');
        this.listNotifications.forEach((notification) => notification.sentAt = datePipe.transform(notification.sentAt, 'dd/MM/yyyy - HH:mm:ss'));
    }
    countNotifications() {
        this.notificationsCount = 0;
        this.listNotifications.forEach((notification) => {
            if (!notification.read && ((notification.app != this.config.appIdentifier) || (notification.app == this.config.appIdentifier && this.totalUnredMessagesCount != 0))) {
                this.notificationsCount += 1;
            }
        });
    }
    readAllNotifications() {
        if (!this.showNotifications)
            return;
        this.notificationService.readAllNotifications().subscribe();
        this.listNotifications.forEach(notification => notification.read = true);
        this.countNotifications();
    }
    updateNotifications() {
        if (!this.showNotifications)
            return;
        this.notificationService.getNotifications().subscribe(notifications => {
            this.listNotifications = notifications;
            ;
            this.setNotification();
        });
    }
    readNotificationAfterMouseStand(event, id) {
        if (!this.showNotifications)
            return;
        this.timer = setTimeout(() => {
            event.target.classList.remove('notification-text-new');
            this.notificationService.readOneNotification(id).subscribe();
            this.listNotifications.forEach((notification) => {
                if (notification.id == id) {
                    notification.read = true;
                }
            });
            this.countNotifications();
        }, 1000);
    }
    abortReadNotificationAfterMouseStand() {
        if (!this.showNotifications)
            return;
        clearTimeout(this.timer);
    }
    redirect(notification) {
        if (!this.showNotifications)
            return;
        if (notification.app == this.config.appIdentifier && this.properties?.chatUrl) {
            window.location.href = this.properties.chatUrl;
        }
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, deps: [{ token: i2.KeycloakService }, { token: i2$1.TranslateService }, { token: AuthService }, { token: WebSocketService }, { token: UserService }, { token: NotificationService }, { token: 'SHARED_CONFIG' }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: HeaderComponent, selector: "cube-header", inputs: { properties: "properties", showNotifications: "showNotifications" }, ngImport: i0, template: "<nav class=\"navbar navbar-expand-xl\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-brand\">\r\n            <a href=\"https://docmon.pccube.com/portal\">\r\n                <img alt=\"cubePortalLogo\" class=\"home\" src=\"~@pccube/shared/projects/cube/shared/assets/images/pccube-solo-cubo.png\">\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-brand\">\r\n            <img alt=\"cube portal logo\" routerLink=\"/\" style=\"cursor:pointer; width: 275px; height: 50px;\"\r\n                src=\"~@pccube/shared/projects/cube/shared/assets/images/cube-portal-logo1.png\">\r\n        </div>\r\n\r\n        <button class=\"navbar-toggler shadow-none\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\">\r\n            <span>\r\n                <img alt=\"navbar toggler\" src=\"~@pccube/shared/projects/cube/shared/assets/images/navbar-toggler.png\">\r\n            </span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse justify-content-end\" [ngbCollapse]=\"isNavbarCollapsed\">\r\n            <ul class=\"list-group list-group-horizontal align-items-center justify-content-center\">\r\n                <li *ngIf=\"isNavbarCollapsed\" class=\"list-group-item\">\r\n                    <div class=\"nav-link user-menu\">\r\n                        {{userDTO?.name}} {{userDTO?.surname}}\r\n                    </div>\r\n                </li>\r\n\r\n                <li *ngIf=\"userDTO\" ngbDropdown class=\"list-group-item\">\r\n                    <div ngbDropdown class=\"dropdown\">\r\n                        <button ngbDropdownToggle class=\"user-menu\">\r\n                            <img alt=\"user status\" src=\"~@pccube/shared/projects/cube/shared/assets/images/{{ userDTO!.propertiesDTO!.status }}.png\" />\r\n                        </button>\r\n                        <div ngbDropdownMenu>\r\n                            <button *ngFor=\"let status of stati\" class=\"btn\" ngbDropdownItem\r\n                                (click)=\"updateStatus(status.name)\">\r\n                                <img class=\"me-2\" alt=\"{{status.name}}\" src=\"{{ status.iconPath }}\" />\r\n                                {{\"generic.\" + status.name | translate}}\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <li ngbDropdown class=\"list-group-item\">\r\n                    <button *ngIf=\"!userDTO\" class=\"user-menu\" (click)=\"login()\">{{'Login'}}</button>\r\n                    <div *ngIf=\"userDTO\">\r\n                        <button ngbDropdownToggle class=\"user-menu\">\r\n                            <img alt=\"profilePicture\" class=\"rounded-5\" src=\"{{userDTO.propertiesDTO?.profilePicture}}\"\r\n                                width=\"32\" height=\"32\">\r\n                        </button>\r\n                        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                            <button ngbDropdownItem routerLink=\"/profile\">{{\"generic.profile\"|translate}}</button>\r\n                            <button ngbDropdownItem (click)=\"logout()\">{{'Logout'}}</button>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <!-- Notifications Menu - Only shown when showNotifications is true -->\r\n                <li *ngIf=\"showNotifications\" ngbDropdown [autoClose]=\"false\" class=\"list-group-item dropdown\">\r\n                    <div>\r\n                        <button alt=\"notification toggle\" ngbDropdownToggle class=\"user-menu\">\r\n                            <img height=\"32px\" alt=\"notification toggle\" src=\"~@pccube/shared/projects/cube/shared/assets/images/bell.png\"\r\n                                (click)=\"updateNotifications()\">\r\n                            <span *ngIf=\"notificationsCount!=0\" class=\"badge\">{{notificationsCount}}</span>\r\n                        </button>\r\n                        <ul ngbDropdownMenu class=\"dropdown-menu dropdown-menu-end\">\r\n                            <li ngbDropdownItem class=\"\">\r\n                                <div class=\"row d-flex justify-content-between align-items-center\">\r\n                                    <div class=\"col-10\">\r\n                                        <button class=\"dropdown-item p-0\"\r\n                                            routerLink=\"/notifications\"><strong>{{\"generic.notification-word\"|translate}}</strong></button>\r\n                                    </div>\r\n                                    <div class=\"col-2\">\r\n                                        <img style=\"cursor:pointer\" height=\"16px\" alt=\"read all notification\"\r\n                                            src=\"~@pccube/shared/projects/cube/shared/assets/images/read-all.png\" (click)=\"readAllNotifications()\">\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n\r\n                            <li *ngFor=\"let notification of listNotifications\" ngbDropdownItem>\r\n                                <div class=\"row\">\r\n                                    <div [ngClass]=\"notification.read ? 'col-12' : 'col-10'\" class=\"col\">\r\n                                        <div *ngIf=\"!notification.read && ((notification.app!='Chat') || (notification.app=='Chat' && totalUnredMessagesCount!=0))\"\r\n                                            class=\"notification-text notification-text-new\"\r\n                                            (mouseenter)=\"readNotificationAfterMouseStand($event, notification.id)\"\r\n                                            (mouseleave)=\"abortReadNotificationAfterMouseStand()\"\r\n                                            (click)=\"redirect(notification)\"\r\n                                            [ngClass]=\"notification.app == 'Chat' ? 'clickable' : null\">\r\n                                            <h5 class=\"my-auto\">{{notification.sentAt}}:</h5>\r\n                                            <span *ngIf=\"notification.app == 'Chat'\">{{totalUnredMessagesCount}}</span>\r\n                                            {{notification.message | translate}}\r\n                                            <hr class=\"dropdown-divider\">\r\n                                        </div>\r\n                                        <div *ngIf=\"notification.read && ((notification.app!='Chat') || (notification.app=='Chat' && totalUnredMessagesCount!=0))\"\r\n                                            class=\"notification-text text-muted\" (click)=\"redirect(notification)\"\r\n                                            [ngClass]=\"notification.app == 'Chat' ? 'clickable' : null\">\r\n                                            <h5 class=\"my-auto\">{{notification.sentAt}}:</h5>\r\n                                            <span *ngIf=\"notification.app == 'Chat'\">{{totalUnredMessagesCount}}</span>\r\n                                            {{notification.message | translate}}\r\n                                            <hr class=\"dropdown-divider\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"!notification.read && ((notification.app!='Chat') || (notification.app=='Chat' && totalUnredMessagesCount!=0))\"\r\n                                        class=\"col-2\">\r\n                                        <img src=\"~@pccube/shared/projects/cube/shared/assets/images/envelope.png\" alt=\"envelope icon\">\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n\r\n                <li ngbDropdown class=\"list-group-item\">\r\n                    <button ngbDropdownToggle class=\"user-menu\">\r\n                        <img alt=\"language flag\" src='{{\"lang.flag-picture\"|translate}}'>\r\n                    </button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                        <button *ngFor=\"let language of languages\" ngbDropdownItem\r\n                            (click)=\"changeLanguage(language.langIdentifier)\">\r\n                            <img alt=\"language flag\" src='{{language.flagPath}}'>\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>", styles: ["div.container-fluid{background:#130044;box-shadow:0 10px 50px #13004440;border-radius:.625rem;margin:1.125rem 1.25rem 0rem;min-height:5.813rem;height:100px}.navbar-brand{position:relative;left:50%;transform:translate(-50%);display:block}li.list-group-item{background:transparent;border:none}.dropdown-menu{border-radius:.625rem;min-width:inherit;padding:.25rem}button:hover,li.dropdown-item{background-color:transparent}.user-menu{border:none;background:transparent;color:#fff;white-space:nowrap}img.rounded-5{object-fit:cover}.badge{background-color:#fff;color:#130044}.dropdown-notification-toggle{color:#130044}.notification-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:21rem}.notification-text-new{color:#130044}ul.dropdown-menu{min-width:15rem;max-height:10rem;overflow-y:auto}li:active{color:#130044}hr.dropdown-divider{margin:auto;margin-top:.125rem;margin-bottom:.125rem}.home{position:absolute;left:-800px;top:-5px;height:25px;width:25px}\n"], dependencies: [{ kind: "directive", type: i7.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i8.NgbCollapse, selector: "[ngbCollapse]", inputs: ["animation", "ngbCollapse", "horizontal"], outputs: ["ngbCollapseChange", "shown", "hidden"], exportAs: ["ngbCollapse"] }, { kind: "directive", type: i8.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "popperOptions", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { kind: "directive", type: i8.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { kind: "directive", type: i8.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { kind: "directive", type: i8.NgbDropdownItem, selector: "[ngbDropdownItem]", inputs: ["disabled"] }, { kind: "directive", type: i9.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i2$1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cube-header', template: "<nav class=\"navbar navbar-expand-xl\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-brand\">\r\n            <a href=\"https://docmon.pccube.com/portal\">\r\n                <img alt=\"cubePortalLogo\" class=\"home\" src=\"~@pccube/shared/projects/cube/shared/assets/images/pccube-solo-cubo.png\">\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-brand\">\r\n            <img alt=\"cube portal logo\" routerLink=\"/\" style=\"cursor:pointer; width: 275px; height: 50px;\"\r\n                src=\"~@pccube/shared/projects/cube/shared/assets/images/cube-portal-logo1.png\">\r\n        </div>\r\n\r\n        <button class=\"navbar-toggler shadow-none\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\">\r\n            <span>\r\n                <img alt=\"navbar toggler\" src=\"~@pccube/shared/projects/cube/shared/assets/images/navbar-toggler.png\">\r\n            </span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse justify-content-end\" [ngbCollapse]=\"isNavbarCollapsed\">\r\n            <ul class=\"list-group list-group-horizontal align-items-center justify-content-center\">\r\n                <li *ngIf=\"isNavbarCollapsed\" class=\"list-group-item\">\r\n                    <div class=\"nav-link user-menu\">\r\n                        {{userDTO?.name}} {{userDTO?.surname}}\r\n                    </div>\r\n                </li>\r\n\r\n                <li *ngIf=\"userDTO\" ngbDropdown class=\"list-group-item\">\r\n                    <div ngbDropdown class=\"dropdown\">\r\n                        <button ngbDropdownToggle class=\"user-menu\">\r\n                            <img alt=\"user status\" src=\"~@pccube/shared/projects/cube/shared/assets/images/{{ userDTO!.propertiesDTO!.status }}.png\" />\r\n                        </button>\r\n                        <div ngbDropdownMenu>\r\n                            <button *ngFor=\"let status of stati\" class=\"btn\" ngbDropdownItem\r\n                                (click)=\"updateStatus(status.name)\">\r\n                                <img class=\"me-2\" alt=\"{{status.name}}\" src=\"{{ status.iconPath }}\" />\r\n                                {{\"generic.\" + status.name | translate}}\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <li ngbDropdown class=\"list-group-item\">\r\n                    <button *ngIf=\"!userDTO\" class=\"user-menu\" (click)=\"login()\">{{'Login'}}</button>\r\n                    <div *ngIf=\"userDTO\">\r\n                        <button ngbDropdownToggle class=\"user-menu\">\r\n                            <img alt=\"profilePicture\" class=\"rounded-5\" src=\"{{userDTO.propertiesDTO?.profilePicture}}\"\r\n                                width=\"32\" height=\"32\">\r\n                        </button>\r\n                        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                            <button ngbDropdownItem routerLink=\"/profile\">{{\"generic.profile\"|translate}}</button>\r\n                            <button ngbDropdownItem (click)=\"logout()\">{{'Logout'}}</button>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <!-- Notifications Menu - Only shown when showNotifications is true -->\r\n                <li *ngIf=\"showNotifications\" ngbDropdown [autoClose]=\"false\" class=\"list-group-item dropdown\">\r\n                    <div>\r\n                        <button alt=\"notification toggle\" ngbDropdownToggle class=\"user-menu\">\r\n                            <img height=\"32px\" alt=\"notification toggle\" src=\"~@pccube/shared/projects/cube/shared/assets/images/bell.png\"\r\n                                (click)=\"updateNotifications()\">\r\n                            <span *ngIf=\"notificationsCount!=0\" class=\"badge\">{{notificationsCount}}</span>\r\n                        </button>\r\n                        <ul ngbDropdownMenu class=\"dropdown-menu dropdown-menu-end\">\r\n                            <li ngbDropdownItem class=\"\">\r\n                                <div class=\"row d-flex justify-content-between align-items-center\">\r\n                                    <div class=\"col-10\">\r\n                                        <button class=\"dropdown-item p-0\"\r\n                                            routerLink=\"/notifications\"><strong>{{\"generic.notification-word\"|translate}}</strong></button>\r\n                                    </div>\r\n                                    <div class=\"col-2\">\r\n                                        <img style=\"cursor:pointer\" height=\"16px\" alt=\"read all notification\"\r\n                                            src=\"~@pccube/shared/projects/cube/shared/assets/images/read-all.png\" (click)=\"readAllNotifications()\">\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n\r\n                            <li *ngFor=\"let notification of listNotifications\" ngbDropdownItem>\r\n                                <div class=\"row\">\r\n                                    <div [ngClass]=\"notification.read ? 'col-12' : 'col-10'\" class=\"col\">\r\n                                        <div *ngIf=\"!notification.read && ((notification.app!='Chat') || (notification.app=='Chat' && totalUnredMessagesCount!=0))\"\r\n                                            class=\"notification-text notification-text-new\"\r\n                                            (mouseenter)=\"readNotificationAfterMouseStand($event, notification.id)\"\r\n                                            (mouseleave)=\"abortReadNotificationAfterMouseStand()\"\r\n                                            (click)=\"redirect(notification)\"\r\n                                            [ngClass]=\"notification.app == 'Chat' ? 'clickable' : null\">\r\n                                            <h5 class=\"my-auto\">{{notification.sentAt}}:</h5>\r\n                                            <span *ngIf=\"notification.app == 'Chat'\">{{totalUnredMessagesCount}}</span>\r\n                                            {{notification.message | translate}}\r\n                                            <hr class=\"dropdown-divider\">\r\n                                        </div>\r\n                                        <div *ngIf=\"notification.read && ((notification.app!='Chat') || (notification.app=='Chat' && totalUnredMessagesCount!=0))\"\r\n                                            class=\"notification-text text-muted\" (click)=\"redirect(notification)\"\r\n                                            [ngClass]=\"notification.app == 'Chat' ? 'clickable' : null\">\r\n                                            <h5 class=\"my-auto\">{{notification.sentAt}}:</h5>\r\n                                            <span *ngIf=\"notification.app == 'Chat'\">{{totalUnredMessagesCount}}</span>\r\n                                            {{notification.message | translate}}\r\n                                            <hr class=\"dropdown-divider\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"!notification.read && ((notification.app!='Chat') || (notification.app=='Chat' && totalUnredMessagesCount!=0))\"\r\n                                        class=\"col-2\">\r\n                                        <img src=\"~@pccube/shared/projects/cube/shared/assets/images/envelope.png\" alt=\"envelope icon\">\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n\r\n                <li ngbDropdown class=\"list-group-item\">\r\n                    <button ngbDropdownToggle class=\"user-menu\">\r\n                        <img alt=\"language flag\" src='{{\"lang.flag-picture\"|translate}}'>\r\n                    </button>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                        <button *ngFor=\"let language of languages\" ngbDropdownItem\r\n                            (click)=\"changeLanguage(language.langIdentifier)\">\r\n                            <img alt=\"language flag\" src='{{language.flagPath}}'>\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>", styles: ["div.container-fluid{background:#130044;box-shadow:0 10px 50px #13004440;border-radius:.625rem;margin:1.125rem 1.25rem 0rem;min-height:5.813rem;height:100px}.navbar-brand{position:relative;left:50%;transform:translate(-50%);display:block}li.list-group-item{background:transparent;border:none}.dropdown-menu{border-radius:.625rem;min-width:inherit;padding:.25rem}button:hover,li.dropdown-item{background-color:transparent}.user-menu{border:none;background:transparent;color:#fff;white-space:nowrap}img.rounded-5{object-fit:cover}.badge{background-color:#fff;color:#130044}.dropdown-notification-toggle{color:#130044}.notification-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:21rem}.notification-text-new{color:#130044}ul.dropdown-menu{min-width:15rem;max-height:10rem;overflow-y:auto}li:active{color:#130044}hr.dropdown-divider{margin:auto;margin-top:.125rem;margin-bottom:.125rem}.home{position:absolute;left:-800px;top:-5px;height:25px;width:25px}\n"] }]
        }], ctorParameters: function () { return [{ type: i2.KeycloakService }, { type: i2$1.TranslateService }, { type: AuthService }, { type: WebSocketService }, { type: UserService }, { type: NotificationService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['SHARED_CONFIG']
                }] }]; }, propDecorators: { properties: [{
                type: Input
            }], showNotifications: [{
                type: Input
            }] } });

class HeaderModule {
    static forRoot(config) {
        return {
            ngModule: HeaderModule,
            providers: [
                NotificationService,
                AuthService,
                UserService,
                WebSocketService,
                {
                    provide: 'SHARED_CONFIG',
                    useValue: config
                },
                {
                    provide: 'BASE_URL',
                    useValue: config.baseUrl
                },
                {
                    provide: 'BASE_PORT',
                    useValue: config.basePort
                },
                {
                    provide: 'SEPARATOR',
                    useValue: config.separator
                }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, declarations: [HeaderComponent], imports: [CommonModule,
            TranslateModule,
            FontAwesomeModule,
            NgbModule,
            RouterModule,
            HttpClientModule], exports: [HeaderComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, imports: [CommonModule,
            TranslateModule,
            FontAwesomeModule,
            NgbModule,
            RouterModule,
            HttpClientModule] }); }
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
                        RouterModule,
                        HttpClientModule
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
