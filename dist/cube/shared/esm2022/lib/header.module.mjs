import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { WebSocketService } from './services/websocket/websocket.service';
import { NotificationService } from './services/notification/notification.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
export class HeaderModule {
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
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, declarations: [HeaderComponent, ProfileComponent], imports: [CommonModule,
            TranslateModule,
            FontAwesomeModule,
            NgbModule,
            RouterModule,
            HttpClientModule,
            FormsModule], exports: [HeaderComponent, ProfileComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, imports: [CommonModule,
            TranslateModule,
            FontAwesomeModule,
            NgbModule,
            RouterModule,
            HttpClientModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [HeaderComponent, ProfileComponent],
                    imports: [
                        CommonModule,
                        TranslateModule,
                        FontAwesomeModule,
                        NgbModule,
                        RouterModule,
                        HttpClientModule,
                        FormsModule
                    ],
                    exports: [HeaderComponent, ProfileComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2N1YmUvc2hhcmVkL3NyYy9saWIvaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQWU3QyxNQUFNLE9BQU8sWUFBWTtJQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQW9CO1FBQ2pDLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1QsbUJBQW1CO2dCQUNuQixXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsZ0JBQWdCO2dCQUNoQjtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxVQUFVO29CQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU87aUJBQ3pCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxXQUFXO29CQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7aUJBQzFCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxXQUFXO29CQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLFNBQVM7aUJBQzNCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzsrR0EzQlUsWUFBWTtnSEFBWixZQUFZLGlCQVpSLGVBQWUsRUFBQyxnQkFBZ0IsYUFFN0MsWUFBWTtZQUNaLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsU0FBUztZQUNULFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsV0FBVyxhQUVILGVBQWUsRUFBQyxnQkFBZ0I7Z0hBRS9CLFlBQVksWUFWckIsWUFBWTtZQUNaLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsU0FBUztZQUNULFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsV0FBVzs7NEZBSUYsWUFBWTtrQkFieEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUMsZ0JBQWdCLENBQUM7b0JBQ2hELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixTQUFTO3dCQUNULFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixXQUFXO3FCQUNaO29CQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBQyxnQkFBZ0IsQ0FBQztpQkFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXZWJTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy93ZWJzb2NrZXQvd2Vic29ja2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2hhcmVkQ29uZmlnIH0gZnJvbSAnLi90eXBlcy9zaGFyZWQuaW50ZXJmYWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtIZWFkZXJDb21wb25lbnQsUHJvZmlsZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIE5nYk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbSGVhZGVyQ29tcG9uZW50LFByb2ZpbGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogU2hhcmVkQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxIZWFkZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEhlYWRlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgICAgICBBdXRoU2VydmljZSxcbiAgICAgICAgVXNlclNlcnZpY2UsXG4gICAgICAgIFdlYlNvY2tldFNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiAnU0hBUkVEX0NPTkZJRycsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogJ0JBU0VfVVJMJyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLmJhc2VVcmxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdCQVNFX1BPUlQnLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcuYmFzZVBvcnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdTRVBBUkFUT1InLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcuc2VwYXJhdG9yXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59Il19