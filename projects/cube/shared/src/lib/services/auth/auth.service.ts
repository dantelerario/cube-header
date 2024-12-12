import { HttpClient } from '@angular/common/http';
import { Injectable,Inject } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { BehaviorSubject,catchError,filter,of,switchMap } from 'rxjs';
import { UserDTO } from '../../types/types';
import { UserService } from '../user/user.service';
import { SharedConfig } from '../../shared.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Proprietà per le informazioni utente
    userKeycloak?: KeycloakProfile;
    userDTO?: UserDTO;

    // BehaviorSubjects per lo stato dell'utente
    userDTOBehaviorSubject = new BehaviorSubject<UserDTO | undefined>(undefined);
    userKeycloakBehaviorSubject = new BehaviorSubject<KeycloakProfile | undefined>(undefined);

    // constructor(
    //     private http: HttpClient,
    //     private userService: UserService,
    //     @Inject('SHARED_CONFIG') private config: SharedConfig
    // ) {
    //     // Sottoscrizione per gestire gli aggiornamenti del profilo Keycloak
    //     this.userKeycloakBehaviorSubject.pipe(
    //         filter(userKeycloak => !!userKeycloak),
    //         switchMap(userKeycloak =>
    //             userService.save().pipe(
    //                 switchMap(() => userService.getUser(userKeycloak!.id!))
    //             )
    //         )
    //     ).subscribe(userDTO => {
    //         this.userDTO = userDTO;
    //         this.userDTOBehaviorSubject.next(userDTO);
    //     });
    // }
    constructor(
        private http: HttpClient,
        private userService: UserService,
        @Inject('SHARED_CONFIG') private config: SharedConfig
    ) {
        // Add error handling and proper sequencing
        this.userKeycloakBehaviorSubject.pipe(
            filter(userKeycloak => !!userKeycloak?.id),
            switchMap(userKeycloak => userService.save().pipe(
                catchError(() => of(null)),
                switchMap(() => userService.getUser(userKeycloak!.id!))
            ))
        ).subscribe({
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
    updateKeycloakProfile(profile: KeycloakProfile): void {
        this.userKeycloak = profile;
        this.userKeycloakBehaviorSubject.next(profile);
    }

    // Metodo per ottenere l'utente corrente
    getCurrentUser(): UserDTO | undefined {
        return this.userDTO;
    }

    // Metodo per resettare lo stato
    reset(): void {
        this.userKeycloak = undefined;
        this.userDTO = undefined;
        this.userDTOBehaviorSubject.next(undefined);
        this.userKeycloakBehaviorSubject.next(undefined);
    }
}