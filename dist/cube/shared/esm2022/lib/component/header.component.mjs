import { Component, Inject } from '@angular/core';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class HeaderComponent {
    constructor(
    // private keycloak: KeycloakService,
    translateService, 
    // private auth: AuthService,
    // private webSocket: WebSocketService,
    // private userService: UserService,
    config) {
        this.translateService = translateService;
        this.config = config;
        this.imgSrc = 'assets/images/profile.jpg';
        this.icon = faCube;
        this.languages = [];
        this.isNavbarCollapsed = true;
        // keycloakLoginOptions: KeycloakLoginOptions;
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
        // this.keycloakLoginOptions = { 
        //   redirectUri: this.config.loginRedirectChatHomePage,
        // };
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
        // this.auth.userDTOBehaviorSubject.subscribe({
        //   next: (receivedUserDTO: any) => {
        //     this.userDTO = receivedUserDTO;
        //     if (this.userDTO?.propertiesDTO?.defaultLanguage) {
        //       this.translateService.use(this.userDTO.propertiesDTO.defaultLanguage);
        //     }
        //   },
        // });
    }
    login() {
        // this.keycloak.login(this.keycloakLoginOptions);
    }
    // logout(): void {
    //   this.webSocket.disconnect().then(() => {
    //     this.keycloak.logout(this.config.redirectUri);
    //   });
    // }
    changeLanguage(lang) {
        this.translateService.use(lang);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, deps: [{ token: i1.TranslateService }, { token: 'SHARED_CONFIG' }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: HeaderComponent, selector: "cube-header", ngImport: i0, template: "<p>works</p>", styles: ["div.container-fluid{background:#130044;box-shadow:0 10px 50px #13004440;border-radius:.625rem;margin:1.125rem 1.25rem 0rem;min-height:5.813rem;height:100px}.navbar-brand{position:relative;left:50%;transform:translate(-50%);display:block}li.list-group-item{background:transparent;border:none}.dropdown-menu{border-radius:.625rem;min-width:inherit;padding:.25rem}button:hover,li.dropdown-item{background-color:transparent}.user-menu{border:none;background:transparent;color:#fff;white-space:nowrap}img.rounded-5{object-fit:cover}.badge{background-color:#fff;color:#130044}.dropdown-notification-toggle{color:#130044}.notification-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:21rem}.notification-text-new{color:#130044}ul.dropdown-menu{min-width:15rem;max-height:10rem;overflow-y:auto}li:active{color:#130044}hr.dropdown-divider{margin:auto;margin-top:.125rem;margin-bottom:.125rem}.home{position:absolute;left:-800px;top:-5px;height:25px;width:25px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cube-header', template: "<p>works</p>", styles: ["div.container-fluid{background:#130044;box-shadow:0 10px 50px #13004440;border-radius:.625rem;margin:1.125rem 1.25rem 0rem;min-height:5.813rem;height:100px}.navbar-brand{position:relative;left:50%;transform:translate(-50%);display:block}li.list-group-item{background:transparent;border:none}.dropdown-menu{border-radius:.625rem;min-width:inherit;padding:.25rem}button:hover,li.dropdown-item{background-color:transparent}.user-menu{border:none;background:transparent;color:#fff;white-space:nowrap}img.rounded-5{object-fit:cover}.badge{background-color:#fff;color:#130044}.dropdown-notification-toggle{color:#130044}.notification-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:21rem}.notification-text-new{color:#130044}ul.dropdown-menu{min-width:15rem;max-height:10rem;overflow-y:auto}li:active{color:#130044}hr.dropdown-divider{margin:auto;margin-top:.125rem;margin-bottom:.125rem}.home{position:absolute;left:-800px;top:-5px;height:25px;width:25px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['SHARED_CONFIG']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2N1YmUvc2hhcmVkL3NyYy9saWIvY29tcG9uZW50L2hlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jdWJlL3NoYXJlZC9zcmMvbGliL2NvbXBvbmVudC9oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBUSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFjM0QsTUFBTSxPQUFPLGVBQWU7SUF1QjFCO0lBQ0UscUNBQXFDO0lBQzdCLGdCQUFrQztJQUMxQyw2QkFBNkI7SUFDN0IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNILE1BQW9CO1FBSjdDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFJVCxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBM0J2RCxXQUFNLEdBQVksMkJBQTJCLENBQUM7UUFDOUMsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLGNBQVMsR0FBZSxFQUFFLENBQUM7UUFDM0Isc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLDhDQUE4QztRQUU5QyxVQUFLLEdBQWE7WUFDaEI7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsUUFBUSxFQUFFLDBCQUEwQjthQUNyQztZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSx3QkFBd0I7YUFDbkM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsUUFBUSxFQUFFLDZCQUE2QjthQUN4QztTQUNGLENBQUM7UUFVQSxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDcEQsaUNBQWlDO1FBQ2pDLHdEQUF3RDtRQUN4RCxLQUFLO1FBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLGNBQWMsRUFBRSxPQUFPO2dCQUN2QixRQUFRLEVBQUUseUJBQXlCO2FBQ3BDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLGNBQWMsRUFBRSxPQUFPO2dCQUN2QixRQUFRLEVBQUUseUJBQXlCO2FBQ3BDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLGNBQWMsRUFBRSxPQUFPO2dCQUN2QixRQUFRLEVBQUUseUJBQXlCO2FBQ3BDO1NBQ0YsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFRCxRQUFRO1FBQ04sK0NBQStDO1FBQy9DLHNDQUFzQztRQUN0QyxzQ0FBc0M7UUFDdEMsMERBQTBEO1FBQzFELCtFQUErRTtRQUMvRSxRQUFRO1FBQ1IsT0FBTztRQUNQLE1BQU07SUFDUixDQUFDO0lBRUQsS0FBSztRQUNILGtEQUFrRDtJQUNwRCxDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxxREFBcUQ7SUFDckQsUUFBUTtJQUNSLElBQUk7SUFFSixjQUFjLENBQUMsSUFBWTtRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7K0dBN0VVLGVBQWUsa0RBNkJoQixlQUFlO21HQTdCZCxlQUFlLG1EQ2hCNUIsY0FBWTs7NEZEZ0JDLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0UsYUFBYTs7MEJBaUNwQixNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0LEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgZmFDdWJlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbi8vIGltcG9ydCB7IEtleWNsb2FrU2VydmljZSB9IGZyb20gJ2tleWNsb2FrLWFuZ3VsYXInO1xuLy8gaW1wb3J0IHsgS2V5Y2xvYWtMb2dpbk9wdGlvbnMgfSBmcm9tICdrZXljbG9hay1qcyc7XG5pbXBvcnQgeyBTaGFyZWRDb25maWcgfSBmcm9tICcuLi9zaGFyZWQuaW50ZXJmYWNlJztcbi8vIGltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBXZWJTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvd2Vic29ja2V0L3dlYnNvY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlLFN0YXR1cyxVc2VyRFRPIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWJlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1c2VyRFRPPzogVXNlckRUTztcbiAgaW1nU3JjPzogc3RyaW5nID0gJ2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS5qcGcnO1xuICBpY29uID0gZmFDdWJlO1xuICBsYW5ndWFnZXM6IExhbmd1YWdlW10gPSBbXTtcbiAgaXNOYXZiYXJDb2xsYXBzZWQgPSB0cnVlO1xuICAvLyBrZXljbG9ha0xvZ2luT3B0aW9uczogS2V5Y2xvYWtMb2dpbk9wdGlvbnM7XG5cbiAgc3RhdGk6IFN0YXR1c1tdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdvbmxpbmUnLFxuICAgICAgaWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL09OTElORS5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2J1c3knLFxuICAgICAgaWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL0JVU1kucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdpbnZpc2libGUnLFxuICAgICAgaWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL0lOVklTSUJMRS5wbmcnLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gcHJpdmF0ZSBrZXljbG9hazogS2V5Y2xvYWtTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICAvLyBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIC8vIHByaXZhdGUgd2ViU29ja2V0OiBXZWJTb2NrZXRTZXJ2aWNlLFxuICAgIC8vIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ1NIQVJFRF9DT05GSUcnKSBwcml2YXRlIGNvbmZpZzogU2hhcmVkQ29uZmlnXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCdIZWFkZXJDb21wb25lbnQgY29zdHJ1dHRvcmUgY2hpYW1hdG8nKTtcbiAgICAvLyB0aGlzLmtleWNsb2FrTG9naW5PcHRpb25zID0geyBcbiAgICAvLyAgIHJlZGlyZWN0VXJpOiB0aGlzLmNvbmZpZy5sb2dpblJlZGlyZWN0Q2hhdEhvbWVQYWdlLFxuICAgIC8vIH07XG4gICAgdGhpcy5sYW5ndWFnZXMgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdFbmdsaXNoJyxcbiAgICAgICAgbGFuZ0lkZW50aWZpZXI6ICdlbi1FTicsXG4gICAgICAgIGZsYWdQYXRoOiAnYXNzZXRzL2ltYWdlcy9lbi1FTi5wbmcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0l0YWxpYW5vJyxcbiAgICAgICAgbGFuZ0lkZW50aWZpZXI6ICdpdC1JVCcsXG4gICAgICAgIGZsYWdQYXRoOiAnYXNzZXRzL2ltYWdlcy9pdC1JVC5wbmcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0ZyYW7Dp2FpcycsXG4gICAgICAgIGxhbmdJZGVudGlmaWVyOiAnZnItRlInLFxuICAgICAgICBmbGFnUGF0aDogJ2Fzc2V0cy9pbWFnZXMvZnItRlIucG5nJyxcbiAgICAgIH1cbiAgICBdLnNvcnQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIHRoaXMuYXV0aC51c2VyRFRPQmVoYXZpb3JTdWJqZWN0LnN1YnNjcmliZSh7XG4gICAgLy8gICBuZXh0OiAocmVjZWl2ZWRVc2VyRFRPOiBhbnkpID0+IHtcbiAgICAvLyAgICAgdGhpcy51c2VyRFRPID0gcmVjZWl2ZWRVc2VyRFRPO1xuICAgIC8vICAgICBpZiAodGhpcy51c2VyRFRPPy5wcm9wZXJ0aWVzRFRPPy5kZWZhdWx0TGFuZ3VhZ2UpIHtcbiAgICAvLyAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKHRoaXMudXNlckRUTy5wcm9wZXJ0aWVzRFRPLmRlZmF1bHRMYW5ndWFnZSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0sXG4gICAgLy8gfSk7XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICAvLyB0aGlzLmtleWNsb2FrLmxvZ2luKHRoaXMua2V5Y2xvYWtMb2dpbk9wdGlvbnMpO1xuICB9XG5cbiAgLy8gbG9nb3V0KCk6IHZvaWQge1xuICAvLyAgIHRoaXMud2ViU29ja2V0LmRpc2Nvbm5lY3QoKS50aGVuKCgpID0+IHtcbiAgLy8gICAgIHRoaXMua2V5Y2xvYWsubG9nb3V0KHRoaXMuY29uZmlnLnJlZGlyZWN0VXJpKTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIGNoYW5nZUxhbmd1YWdlKGxhbmc6IHN0cmluZykge1xuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XG4gIH1cblxuICAvLyB1cGRhdGVTdGF0dXMoc3RhdHVzOiBzdHJpbmcpIHtcbiAgLy8gICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZVN0YXR1cyhzdGF0dXMpLnN1YnNjcmliZSh7XG4gIC8vICAgICBuZXh0OiAocmVzcG9uc2UpID0+IHtcbiAgLy8gICAgICAgaWYgKHJlc3BvbnNlICYmIHRoaXMudXNlckRUTykge1xuICAvLyAgICAgICAgIHRoaXMudXNlckRUTy5wcm9wZXJ0aWVzRFRPIS5zdGF0dXMgPSBzdGF0dXM7XG4gIC8vICAgICAgICAgdGhpcy5hdXRoLnVzZXJEVE9CZWhhdmlvclN1YmplY3QubmV4dCh0aGlzLnVzZXJEVE8pO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9LFxuICAvLyAgIH0pO1xuICAvLyB9XG59IiwiPHA+d29ya3M8L3A+Il19