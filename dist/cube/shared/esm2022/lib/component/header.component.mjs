import { Component, Inject } from '@angular/core';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "keycloak-angular";
import * as i2 from "@ngx-translate/core";
import * as i3 from "../services/auth/auth.service";
import * as i4 from "../services/websocket/websocket.service";
import * as i5 from "../services/user/user.service";
export class HeaderComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, deps: [{ token: i1.KeycloakService }, { token: i2.TranslateService }, { token: i3.AuthService }, { token: i4.WebSocketService }, { token: i5.UserService }, { token: 'SHARED_CONFIG' }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: HeaderComponent, selector: "cube-header", ngImport: i0, template: "<p>works</p>", styles: ["div.container-fluid{background:#130044;box-shadow:0 10px 50px #13004440;border-radius:.625rem;margin:1.125rem 1.25rem 0rem;min-height:5.813rem;height:100px}.navbar-brand{position:relative;left:50%;transform:translate(-50%);display:block}li.list-group-item{background:transparent;border:none}.dropdown-menu{border-radius:.625rem;min-width:inherit;padding:.25rem}button:hover,li.dropdown-item{background-color:transparent}.user-menu{border:none;background:transparent;color:#fff;white-space:nowrap}img.rounded-5{object-fit:cover}.badge{background-color:#fff;color:#130044}.dropdown-notification-toggle{color:#130044}.notification-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:21rem}.notification-text-new{color:#130044}ul.dropdown-menu{min-width:15rem;max-height:10rem;overflow-y:auto}li:active{color:#130044}hr.dropdown-divider{margin:auto;margin-top:.125rem;margin-bottom:.125rem}.home{position:absolute;left:-800px;top:-5px;height:25px;width:25px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cube-header', template: "<p>works</p>", styles: ["div.container-fluid{background:#130044;box-shadow:0 10px 50px #13004440;border-radius:.625rem;margin:1.125rem 1.25rem 0rem;min-height:5.813rem;height:100px}.navbar-brand{position:relative;left:50%;transform:translate(-50%);display:block}li.list-group-item{background:transparent;border:none}.dropdown-menu{border-radius:.625rem;min-width:inherit;padding:.25rem}button:hover,li.dropdown-item{background-color:transparent}.user-menu{border:none;background:transparent;color:#fff;white-space:nowrap}img.rounded-5{object-fit:cover}.badge{background-color:#fff;color:#130044}.dropdown-notification-toggle{color:#130044}.notification-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:21rem}.notification-text-new{color:#130044}ul.dropdown-menu{min-width:15rem;max-height:10rem;overflow-y:auto}li:active{color:#130044}hr.dropdown-divider{margin:auto;margin-top:.125rem;margin-bottom:.125rem}.home{position:absolute;left:-800px;top:-5px;height:25px;width:25px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.KeycloakService }, { type: i2.TranslateService }, { type: i3.AuthService }, { type: i4.WebSocketService }, { type: i5.UserService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['SHARED_CONFIG']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2N1YmUvc2hhcmVkL3NyYy9saWIvY29tcG9uZW50L2hlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jdWJlL3NoYXJlZC9zcmMvbGliL2NvbXBvbmVudC9oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBUSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7O0FBYzNELE1BQU0sT0FBTyxlQUFlO0lBdUIxQixZQUNVLFFBQXlCLEVBQ3pCLGdCQUFrQyxFQUNsQyxJQUFpQixFQUNqQixTQUEyQixFQUMzQixXQUF3QixFQUNDLE1BQW9CO1FBTDdDLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNDLFdBQU0sR0FBTixNQUFNLENBQWM7UUEzQnZELFdBQU0sR0FBWSwyQkFBMkIsQ0FBQztRQUM5QyxTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFHekIsVUFBSyxHQUFhO1lBQ2hCO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRSwwQkFBMEI7YUFDckM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsd0JBQXdCO2FBQ25DO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7U0FDRixDQUFDO1FBVUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxvQkFBb0IsR0FBRztZQUMxQixXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUI7U0FDbkQsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZjtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixjQUFjLEVBQUUsT0FBTztnQkFDdkIsUUFBUSxFQUFFLHlCQUF5QjthQUNwQztZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixjQUFjLEVBQUUsT0FBTztnQkFDdkIsUUFBUSxFQUFFLHlCQUF5QjthQUNwQztZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixjQUFjLEVBQUUsT0FBTztnQkFDdkIsUUFBUSxFQUFFLHlCQUF5QjthQUNwQztTQUNGLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDO1lBQ3pDLElBQUksRUFBRSxDQUFDLGVBQW9CLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7Z0JBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFO29CQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUN2RTtZQUNILENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQVk7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQWM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzlDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNqQixJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3JEO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBeEZVLGVBQWUsdUtBNkJoQixlQUFlO21HQTdCZCxlQUFlLG1EQ2hCNUIsY0FBWTs7NEZEZ0JDLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0UsYUFBYTs7MEJBaUNwQixNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0LEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgZmFDdWJlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IEtleWNsb2FrU2VydmljZSB9IGZyb20gJ2tleWNsb2FrLWFuZ3VsYXInO1xuaW1wb3J0IHsgS2V5Y2xvYWtMb2dpbk9wdGlvbnMgfSBmcm9tICdrZXljbG9hay1qcyc7XG5pbXBvcnQgeyBTaGFyZWRDb25maWcgfSBmcm9tICcuLi9zaGFyZWQuaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXZWJTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvd2Vic29ja2V0L3dlYnNvY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlLFN0YXR1cyxVc2VyRFRPIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWJlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1c2VyRFRPPzogVXNlckRUTztcbiAgaW1nU3JjPzogc3RyaW5nID0gJ2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS5qcGcnO1xuICBpY29uID0gZmFDdWJlO1xuICBsYW5ndWFnZXM6IExhbmd1YWdlW10gPSBbXTtcbiAgaXNOYXZiYXJDb2xsYXBzZWQgPSB0cnVlO1xuICBrZXljbG9ha0xvZ2luT3B0aW9uczogS2V5Y2xvYWtMb2dpbk9wdGlvbnM7ICAvLyBhZ2dpdW50b1xuXG4gIHN0YXRpOiBTdGF0dXNbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnb25saW5lJyxcbiAgICAgIGljb25QYXRoOiAnYXNzZXRzL2ltYWdlcy9PTkxJTkUucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdidXN5JyxcbiAgICAgIGljb25QYXRoOiAnYXNzZXRzL2ltYWdlcy9CVVNZLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnaW52aXNpYmxlJyxcbiAgICAgIGljb25QYXRoOiAnYXNzZXRzL2ltYWdlcy9JTlZJU0lCTEUucG5nJyxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUga2V5Y2xvYWs6IEtleWNsb2FrU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHdlYlNvY2tldDogV2ViU29ja2V0U2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBASW5qZWN0KCdTSEFSRURfQ09ORklHJykgcHJpdmF0ZSBjb25maWc6IFNoYXJlZENvbmZpZ1xuICApIHtcbiAgICBjb25zb2xlLmxvZygnSGVhZGVyQ29tcG9uZW50IGNvc3RydXR0b3JlIGNoaWFtYXRvJyk7XG4gICAgdGhpcy5rZXljbG9ha0xvZ2luT3B0aW9ucyA9IHsgIC8vIGluaXppYWxpenphdG8gbmVsIGNvc3RydXR0b3JlXG4gICAgICByZWRpcmVjdFVyaTogdGhpcy5jb25maWcubG9naW5SZWRpcmVjdENoYXRIb21lUGFnZSxcbiAgICB9O1xuICAgIHRoaXMubGFuZ3VhZ2VzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnRW5nbGlzaCcsXG4gICAgICAgIGxhbmdJZGVudGlmaWVyOiAnZW4tRU4nLFxuICAgICAgICBmbGFnUGF0aDogJ2Fzc2V0cy9pbWFnZXMvZW4tRU4ucG5nJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdJdGFsaWFubycsXG4gICAgICAgIGxhbmdJZGVudGlmaWVyOiAnaXQtSVQnLFxuICAgICAgICBmbGFnUGF0aDogJ2Fzc2V0cy9pbWFnZXMvaXQtSVQucG5nJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdGcmFuw6dhaXMnLFxuICAgICAgICBsYW5nSWRlbnRpZmllcjogJ2ZyLUZSJyxcbiAgICAgICAgZmxhZ1BhdGg6ICdhc3NldHMvaW1hZ2VzL2ZyLUZSLnBuZycsXG4gICAgICB9XG4gICAgXS5zb3J0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGgudXNlckRUT0JlaGF2aW9yU3ViamVjdC5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKHJlY2VpdmVkVXNlckRUTzogYW55KSA9PiB7XG4gICAgICAgIHRoaXMudXNlckRUTyA9IHJlY2VpdmVkVXNlckRUTztcbiAgICAgICAgaWYgKHRoaXMudXNlckRUTz8ucHJvcGVydGllc0RUTz8uZGVmYXVsdExhbmd1YWdlKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZSh0aGlzLnVzZXJEVE8ucHJvcGVydGllc0RUTy5kZWZhdWx0TGFuZ3VhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgdGhpcy5rZXljbG9hay5sb2dpbih0aGlzLmtleWNsb2FrTG9naW5PcHRpb25zKTtcbiAgfVxuXG4gIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLndlYlNvY2tldC5kaXNjb25uZWN0KCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmtleWNsb2FrLmxvZ291dCh0aGlzLmNvbmZpZy5yZWRpcmVjdFVyaSk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VMYW5ndWFnZShsYW5nOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKGxhbmcpO1xuICB9XG5cbiAgdXBkYXRlU3RhdHVzKHN0YXR1czogc3RyaW5nKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVTdGF0dXMoc3RhdHVzKS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZSAmJiB0aGlzLnVzZXJEVE8pIHtcbiAgICAgICAgICB0aGlzLnVzZXJEVE8ucHJvcGVydGllc0RUTyEuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgIHRoaXMuYXV0aC51c2VyRFRPQmVoYXZpb3JTdWJqZWN0Lm5leHQodGhpcy51c2VyRFRPKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufSIsIjxwPndvcmtzPC9wPiJdfQ==