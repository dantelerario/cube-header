import { OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { MessageTriggerDTO, propertiesDTO } from '../../types/types';
import * as Stomp from 'stompjs';
import { BehaviorSubject, Subject } from 'rxjs';
import { SharedConfig } from '../../shared.interface';
import * as i0 from "@angular/core";
export declare class WebSocketService implements OnDestroy {
    private authService;
    private keycloak;
    private config;
    stompClient?: Stomp.Client;
    private subscriptions;
    isConnected: boolean;
    userData?: KeycloakProfile;
    private writingUsers;
    newChatMessage: Subject<string | undefined>;
    newStatus: Subject<propertiesDTO | undefined>;
    othersWriting: BehaviorSubject<{
        [idChat: string]: string[];
    }>;
    constructor(authService: AuthService, keycloak: KeycloakService, config: SharedConfig);
    private getWebSocketUrl;
    connect(): void;
    disconnect(): Promise<void>;
    registerUser(): void;
    disconnectUser(): void;
    sendToOne(trigger: MessageTriggerDTO): void;
    amIWriting(idchat: number, isWriting: boolean): void;
    sendToGroup(trigger: MessageTriggerDTO): void;
    readMessage(id: number): void;
    privateSubscription(): void;
    statusSubscription(): void;
    writingSubscription(): void;
    onSubscription(key: string, sub: Stomp.Subscription): void;
    checkMessageSubscription(idChat: string, callBack: ((message: Stomp.Message) => any)): void;
    checkmessageUnsubscribe(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WebSocketService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WebSocketService>;
}
