import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, filter, switchMap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../user/user.service";
export class AuthService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY3ViZS9zaGFyZWQvc3JjL2xpYi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFReEQsTUFBTSxPQUFPLFdBQVc7SUFTcEIsWUFDWSxJQUFnQixFQUNoQixXQUF3QixFQUNDLE1BQW9CO1FBRjdDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDQyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBUHpELDRDQUE0QztRQUM1QywyQkFBc0IsR0FBRyxJQUFJLGVBQWUsQ0FBc0IsU0FBUyxDQUFDLENBQUM7UUFDN0UsZ0NBQTJCLEdBQUcsSUFBSSxlQUFlLENBQThCLFNBQVMsQ0FBQyxDQUFDO1FBT3RGLG9FQUFvRTtRQUNwRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUNqQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQ3RDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUNyQixXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUNuQixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFhLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FDMUQsQ0FDSixDQUNKLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNENBQTRDO0lBQzVDLHFCQUFxQixDQUFDLE9BQXdCO1FBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHdDQUF3QztJQUN4QyxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxnQ0FBZ0M7SUFDaEMsS0FBSztRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDOytHQTdDUSxXQUFXLHVFQVlSLGVBQWU7bUhBWmxCLFdBQVcsY0FGUixNQUFNOzs0RkFFVCxXQUFXO2tCQUh2QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBYVEsTUFBTTsyQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSxJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2V5Y2xvYWtQcm9maWxlIH0gZnJvbSAna2V5Y2xvYWstanMnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsZmlsdGVyLHN3aXRjaE1hcCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBVc2VyRFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2hhcmVkLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICAgIC8vIFByb3ByaWV0w6AgcGVyIGxlIGluZm9ybWF6aW9uaSB1dGVudGVcclxuICAgIHVzZXJLZXljbG9haz86IEtleWNsb2FrUHJvZmlsZTtcclxuICAgIHVzZXJEVE8/OiBVc2VyRFRPO1xyXG5cclxuICAgIC8vIEJlaGF2aW9yU3ViamVjdHMgcGVyIGxvIHN0YXRvIGRlbGwndXRlbnRlXHJcbiAgICB1c2VyRFRPQmVoYXZpb3JTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyRFRPIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gICAgdXNlcktleWNsb2FrQmVoYXZpb3JTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxLZXljbG9ha1Byb2ZpbGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgIEBJbmplY3QoJ1NIQVJFRF9DT05GSUcnKSBwcml2YXRlIGNvbmZpZzogU2hhcmVkQ29uZmlnXHJcbiAgICApIHtcclxuICAgICAgICAvLyBTb3R0b3Njcml6aW9uZSBwZXIgZ2VzdGlyZSBnbGkgYWdnaW9ybmFtZW50aSBkZWwgcHJvZmlsbyBLZXljbG9ha1xyXG4gICAgICAgIHRoaXMudXNlcktleWNsb2FrQmVoYXZpb3JTdWJqZWN0LnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcih1c2VyS2V5Y2xvYWsgPT4gISF1c2VyS2V5Y2xvYWspLFxyXG4gICAgICAgICAgICBzd2l0Y2hNYXAodXNlcktleWNsb2FrID0+XHJcbiAgICAgICAgICAgICAgICB1c2VyU2VydmljZS5zYXZlKCkucGlwZShcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdXNlclNlcnZpY2UuZ2V0VXNlcih1c2VyS2V5Y2xvYWshLmlkISkpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApLnN1YnNjcmliZSh1c2VyRFRPID0+IHtcclxuICAgICAgICAgICAgdGhpcy51c2VyRFRPID0gdXNlckRUTztcclxuICAgICAgICAgICAgdGhpcy51c2VyRFRPQmVoYXZpb3JTdWJqZWN0Lm5leHQodXNlckRUTyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0b2RvIHBlciBhZ2dpb3JuYXJlIGlsIHByb2ZpbG8gS2V5Y2xvYWtcclxuICAgIHVwZGF0ZUtleWNsb2FrUHJvZmlsZShwcm9maWxlOiBLZXljbG9ha1Byb2ZpbGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVzZXJLZXljbG9hayA9IHByb2ZpbGU7XHJcbiAgICAgICAgdGhpcy51c2VyS2V5Y2xvYWtCZWhhdmlvclN1YmplY3QubmV4dChwcm9maWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRvZG8gcGVyIG90dGVuZXJlIGwndXRlbnRlIGNvcnJlbnRlXHJcbiAgICBnZXRDdXJyZW50VXNlcigpOiBVc2VyRFRPIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyRFRPO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldG9kbyBwZXIgcmVzZXR0YXJlIGxvIHN0YXRvXHJcbiAgICByZXNldCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVzZXJLZXljbG9hayA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnVzZXJEVE8gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy51c2VyRFRPQmVoYXZpb3JTdWJqZWN0Lm5leHQodW5kZWZpbmVkKTtcclxuICAgICAgICB0aGlzLnVzZXJLZXljbG9ha0JlaGF2aW9yU3ViamVjdC5uZXh0KHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbn0iXX0=