import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, of, switchMap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../user/user.service";
export class AuthService {
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
    constructor(http, userService, config) {
        this.http = http;
        this.userService = userService;
        this.config = config;
        // BehaviorSubjects per lo stato dell'utente
        this.userDTOBehaviorSubject = new BehaviorSubject(undefined);
        this.userKeycloakBehaviorSubject = new BehaviorSubject(undefined);
        // Add error handling and proper sequencing
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, deps: [{ token: i1.HttpClient }, { token: i2.UserService }, { token: 'SHARED_CONFIG' }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.UserService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['SHARED_CONFIG']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY3ViZS9zaGFyZWQvc3JjL2xpYi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQVF0RSxNQUFNLE9BQU8sV0FBVztJQVNwQixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLHdDQUF3QztJQUN4Qyw0REFBNEQ7SUFDNUQsTUFBTTtJQUNOLDJFQUEyRTtJQUMzRSw2Q0FBNkM7SUFDN0Msa0RBQWtEO0lBQ2xELG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsMEVBQTBFO0lBQzFFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyxxREFBcUQ7SUFDckQsVUFBVTtJQUNWLElBQUk7SUFDSixZQUNZLElBQWdCLEVBQ2hCLFdBQXdCLEVBQ0MsTUFBb0I7UUFGN0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNDLFdBQU0sR0FBTixNQUFNLENBQWM7UUF6QnpELDRDQUE0QztRQUM1QywyQkFBc0IsR0FBRyxJQUFJLGVBQWUsQ0FBc0IsU0FBUyxDQUFDLENBQUM7UUFDN0UsZ0NBQTJCLEdBQUcsSUFBSSxlQUFlLENBQThCLFNBQVMsQ0FBQyxDQUFDO1FBeUJ0RiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FDakMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsRUFDMUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDN0MsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUMxQixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFhLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FDMUQsQ0FBQyxDQUNMLENBQUMsU0FBUyxDQUFDO1lBQ1IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFO2dCQUNaLElBQUksT0FBTyxFQUFFO29CQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM3QztZQUNMLENBQUM7WUFDRCxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtTQUM1QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNENBQTRDO0lBQzVDLHFCQUFxQixDQUFDLE9BQXdCO1FBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHdDQUF3QztJQUN4QyxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxnQ0FBZ0M7SUFDaEMsS0FBSztRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDOytHQW5FUSxXQUFXLHVFQThCUixlQUFlO21IQTlCbEIsV0FBVyxjQUZSLE1BQU07OzRGQUVULFdBQVc7a0JBSHZCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzswQkErQlEsTUFBTTsyQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSxJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2V5Y2xvYWtQcm9maWxlIH0gZnJvbSAna2V5Y2xvYWstanMnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsY2F0Y2hFcnJvcixmaWx0ZXIsb2Ysc3dpdGNoTWFwIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFVzZXJEVE8gfSBmcm9tICcuLi8uLi90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdXNlci91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRDb25maWcgfSBmcm9tICcuLi8uLi9zaGFyZWQuaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gICAgLy8gUHJvcHJpZXTDoCBwZXIgbGUgaW5mb3JtYXppb25pIHV0ZW50ZVxyXG4gICAgdXNlcktleWNsb2FrPzogS2V5Y2xvYWtQcm9maWxlO1xyXG4gICAgdXNlckRUTz86IFVzZXJEVE87XHJcblxyXG4gICAgLy8gQmVoYXZpb3JTdWJqZWN0cyBwZXIgbG8gc3RhdG8gZGVsbCd1dGVudGVcclxuICAgIHVzZXJEVE9CZWhhdmlvclN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFVzZXJEVE8gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcbiAgICB1c2VyS2V5Y2xvYWtCZWhhdmlvclN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEtleWNsb2FrUHJvZmlsZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbiAgICAvLyBjb25zdHJ1Y3RvcihcclxuICAgIC8vICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAvLyAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICAvLyAgICAgQEluamVjdCgnU0hBUkVEX0NPTkZJRycpIHByaXZhdGUgY29uZmlnOiBTaGFyZWRDb25maWdcclxuICAgIC8vICkge1xyXG4gICAgLy8gICAgIC8vIFNvdHRvc2NyaXppb25lIHBlciBnZXN0aXJlIGdsaSBhZ2dpb3JuYW1lbnRpIGRlbCBwcm9maWxvIEtleWNsb2FrXHJcbiAgICAvLyAgICAgdGhpcy51c2VyS2V5Y2xvYWtCZWhhdmlvclN1YmplY3QucGlwZShcclxuICAgIC8vICAgICAgICAgZmlsdGVyKHVzZXJLZXljbG9hayA9PiAhIXVzZXJLZXljbG9hayksXHJcbiAgICAvLyAgICAgICAgIHN3aXRjaE1hcCh1c2VyS2V5Y2xvYWsgPT5cclxuICAgIC8vICAgICAgICAgICAgIHVzZXJTZXJ2aWNlLnNhdmUoKS5waXBlKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiB1c2VyU2VydmljZS5nZXRVc2VyKHVzZXJLZXljbG9hayEuaWQhKSlcclxuICAgIC8vICAgICAgICAgICAgIClcclxuICAgIC8vICAgICAgICAgKVxyXG4gICAgLy8gICAgICkuc3Vic2NyaWJlKHVzZXJEVE8gPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnVzZXJEVE8gPSB1c2VyRFRPO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnVzZXJEVE9CZWhhdmlvclN1YmplY3QubmV4dCh1c2VyRFRPKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgICAgICBASW5qZWN0KCdTSEFSRURfQ09ORklHJykgcHJpdmF0ZSBjb25maWc6IFNoYXJlZENvbmZpZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgLy8gQWRkIGVycm9yIGhhbmRsaW5nIGFuZCBwcm9wZXIgc2VxdWVuY2luZ1xyXG4gICAgICAgIHRoaXMudXNlcktleWNsb2FrQmVoYXZpb3JTdWJqZWN0LnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcih1c2VyS2V5Y2xvYWsgPT4gISF1c2VyS2V5Y2xvYWs/LmlkKSxcclxuICAgICAgICAgICAgc3dpdGNoTWFwKHVzZXJLZXljbG9hayA9PiB1c2VyU2VydmljZS5zYXZlKCkucGlwZShcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobnVsbCkpLFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHVzZXJTZXJ2aWNlLmdldFVzZXIodXNlcktleWNsb2FrIS5pZCEpKVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICkuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgbmV4dDogdXNlckRUTyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlckRUTykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckRUTyA9IHVzZXJEVE87XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRFRPQmVoYXZpb3JTdWJqZWN0Lm5leHQodXNlckRUTyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiAoKSA9PiB0aGlzLnJlc2V0KClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRvZG8gcGVyIGFnZ2lvcm5hcmUgaWwgcHJvZmlsbyBLZXljbG9ha1xyXG4gICAgdXBkYXRlS2V5Y2xvYWtQcm9maWxlKHByb2ZpbGU6IEtleWNsb2FrUHJvZmlsZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXNlcktleWNsb2FrID0gcHJvZmlsZTtcclxuICAgICAgICB0aGlzLnVzZXJLZXljbG9ha0JlaGF2aW9yU3ViamVjdC5uZXh0KHByb2ZpbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldG9kbyBwZXIgb3R0ZW5lcmUgbCd1dGVudGUgY29ycmVudGVcclxuICAgIGdldEN1cnJlbnRVc2VyKCk6IFVzZXJEVE8gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJEVE87XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0b2RvIHBlciByZXNldHRhcmUgbG8gc3RhdG9cclxuICAgIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXNlcktleWNsb2FrID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudXNlckRUTyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnVzZXJEVE9CZWhhdmlvclN1YmplY3QubmV4dCh1bmRlZmluZWQpO1xyXG4gICAgICAgIHRoaXMudXNlcktleWNsb2FrQmVoYXZpb3JTdWJqZWN0Lm5leHQodW5kZWZpbmVkKTtcclxuICAgIH1cclxufSJdfQ==