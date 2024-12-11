import { Injectable,OnDestroy,Inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { IsWritingDto,MessageTriggerDTO,propertiesDTO } from '../../types/types';
import * as Stomp from 'stompjs';
import * as SockJs from 'sockjs-client';
import { BehaviorSubject,Subject } from 'rxjs';
import { SharedConfig } from '../../shared.interface';
import { WEBSOCKET_ENDPOINTS } from './websocket.constants';

@Injectable({
    providedIn: 'root'
})
export class WebSocketService implements OnDestroy {
    stompClient?: Stomp.Client;
    private subscriptions: { key: string,sub: Stomp.Subscription }[] = [];
    isConnected = false;
    userData?: KeycloakProfile;

    private writingUsers: { [idChat: string]: string[] } = {};

    newChatMessage: Subject<string | undefined> = new Subject<string | undefined>();
    newStatus: Subject<propertiesDTO | undefined> = new Subject<propertiesDTO | undefined>();
    othersWriting: BehaviorSubject<{ [idChat: string]: string[] }> = new BehaviorSubject<{ [idChat: string]: string[] }>({});

    constructor(
        private authService: AuthService,
        private keycloak: KeycloakService,
        @Inject('SHARED_CONFIG') private config: SharedConfig
    ) { }

    private getWebSocketUrl(): string {
        return `${this.config.baseUrl}${this.config.separator}${this.config.basePort}${WEBSOCKET_ENDPOINTS.BASE_ENDPOINT}`;
    }

    connect(): void {
        this.stompClient = Stomp.over(new SockJs(this.getWebSocketUrl()));
        this.stompClient.connect({},() => {
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

    async disconnect(): Promise<void> {
        this.disconnectUser();
        await this.stompClient?.disconnect(() => {
            this.subscriptions.forEach((sub) => sub.sub.unsubscribe());
        });
        this.isConnected = false;
    }

    registerUser() {
        this.stompClient?.send(
            `${WEBSOCKET_ENDPOINTS.REGISTER}.${this.keycloak.getKeycloakInstance().subject}`
        );
    }

    disconnectUser() {
        this.stompClient?.send(WEBSOCKET_ENDPOINTS.DISCONNECT);
    }

    sendToOne(trigger: MessageTriggerDTO) {
        this.stompClient?.send(WEBSOCKET_ENDPOINTS.SEND_TO_ONE,{},JSON.stringify(trigger));
    }

    amIWriting(idchat: number,isWriting: boolean): void {
        this.stompClient?.send(`${WEBSOCKET_ENDPOINTS.AM_I_WRITING}.${idchat}.${isWriting}`);
    }

    sendToGroup(trigger: MessageTriggerDTO) {
        this.stompClient?.send(WEBSOCKET_ENDPOINTS.SEND_TO_GROUP,{},JSON.stringify(trigger));
    }

    readMessage(id: number) {
        this.stompClient?.send(`${WEBSOCKET_ENDPOINTS.READ_MESSAGE}.${id}`);
    }

    privateSubscription() {
        this.onSubscription(
            "Private",
            this.stompClient!.subscribe(
                `${WEBSOCKET_ENDPOINTS.PRIVATE_SUBSCRIPTION}.${this.keycloak.getKeycloakInstance().subject}`,
                (message) => {
                    this.newChatMessage.next(message.body);
                }
            )
        );
    }

    statusSubscription() {
        this.onSubscription(
            "Status",
            this.stompClient!.subscribe(
                `${WEBSOCKET_ENDPOINTS.STATUS_SUBSCRIPTION}.${this.keycloak.getKeycloakInstance().subject}`,
                (newUserStatus) => {
                    this.newStatus.next(JSON.parse(newUserStatus.body));
                }
            )
        );
    }

    writingSubscription() {
        this.onSubscription(
            "Writing",
            this.stompClient!.subscribe(
                `${WEBSOCKET_ENDPOINTS.IS_WRITING_SUBSCRIPTION}.${this.keycloak.getKeycloakInstance().subject}`,
                (writingDto) => {
                    const w: IsWritingDto = JSON.parse(writingDto.body);

                    if (w.isWriting && (!this.writingUsers[w.chatId] || !this.writingUsers[w.chatId].includes(w.userId))) {
                        if (!this.writingUsers[w.chatId]) {
                            this.writingUsers[w.chatId] = [];
                        }
                        this.writingUsers[w.chatId].push(w.userId);
                    } else if (!w.isWriting && this.writingUsers[w.chatId] && this.writingUsers[w.chatId].includes(w.userId)) {
                        this.writingUsers[w.chatId].splice(this.writingUsers[w.chatId].indexOf(w.userId),1);
                        if (this.writingUsers[w.chatId].length == 0) {
                            delete this.writingUsers[w.chatId];
                        }
                    }

                    this.othersWriting.next(this.writingUsers);
                }
            )
        );
    }

    onSubscription(key: string,sub: Stomp.Subscription) {
        for (let i = 0; i < this.subscriptions.length; i++) {
            if (this.subscriptions[i].key == key) {
                this.subscriptions[i].sub.unsubscribe();
                this.subscriptions.splice(i,1);
            }
        }
        this.subscriptions.push({ key: key,sub: sub });
    }

    checkMessageSubscription(idChat: string,callBack: ((message: Stomp.Message) => any)) {
        this.onSubscription(
            "Check",
            this.stompClient!.subscribe(
                `${WEBSOCKET_ENDPOINTS.CHECK_SUBSCRIPTION}.${idChat}.${this.keycloak.getKeycloakInstance().subject}`,
                callBack
            )
        );
    }

    checkmessageUnsubscribe() {
        for (let i = 0; i < this.subscriptions.length; i++) {
            if (this.subscriptions[i].key == 'Check') {
                this.subscriptions[i].sub.unsubscribe();
                this.subscriptions.splice(i,1);
            }
        }
    }

    ngOnDestroy(): void {
        this.disconnect();
    }
}