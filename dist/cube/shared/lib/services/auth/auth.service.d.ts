import { HttpClient } from '@angular/common/http';
import { KeycloakProfile } from 'keycloak-js';
import { BehaviorSubject } from 'rxjs';
import { UserDTO } from '../../types/types';
import { UserService } from '../user/user.service';
import { SharedConfig } from '../../shared.interface';
import * as i0 from "@angular/core";
export declare class AuthService {
    private http;
    private userService;
    private config;
    userKeycloak?: KeycloakProfile;
    userDTO?: UserDTO;
    userDTOBehaviorSubject: BehaviorSubject<UserDTO | undefined>;
    userKeycloakBehaviorSubject: BehaviorSubject<KeycloakProfile | undefined>;
    constructor(http: HttpClient, userService: UserService, config: SharedConfig);
    updateKeycloakProfile(profile: KeycloakProfile): void;
    getCurrentUser(): UserDTO | undefined;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
