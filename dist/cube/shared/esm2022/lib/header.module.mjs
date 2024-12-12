import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header.component';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { WebSocketService } from './services/websocket/websocket.service';
import { NotificationService } from './services/notification/notification.service';
import { HttpClientModule } from '@angular/common/http';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2N1YmUvc2hhcmVkL3NyYy9saWIvaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBY3hELE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBb0I7UUFDakMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxtQkFBbUI7Z0JBQ25CLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxnQkFBZ0I7Z0JBQ2hCO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixRQUFRLEVBQUUsTUFBTTtpQkFDakI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTztpQkFDekI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtpQkFDMUI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsU0FBUztpQkFDM0I7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOytHQTNCVSxZQUFZO2dIQUFaLFlBQVksaUJBWFIsZUFBZSxhQUU1QixZQUFZO1lBQ1osZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixTQUFTO1lBQ1QsWUFBWTtZQUNaLGdCQUFnQixhQUVSLGVBQWU7Z0hBRWQsWUFBWSxZQVRyQixZQUFZO1lBQ1osZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixTQUFTO1lBQ1QsWUFBWTtZQUNaLGdCQUFnQjs7NEZBSVAsWUFBWTtrQkFaeEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQy9CLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixTQUFTO3dCQUNULFlBQVk7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyxOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYlNvY2tldFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3dlYnNvY2tldC93ZWJzb2NrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBTaGFyZWRDb25maWcgfSBmcm9tICcuL3R5cGVzL3NoYXJlZC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0hlYWRlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIE5nYk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbSGVhZGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IFNoYXJlZENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SGVhZGVyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBIZWFkZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgICAgICAgQXV0aFNlcnZpY2UsXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxuICAgICAgICBXZWJTb2NrZXRTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogJ1NIQVJFRF9DT05GSUcnLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdCQVNFX1VSTCcsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZy5iYXNlVXJsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiAnQkFTRV9QT1JUJyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLmJhc2VQb3J0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiAnU0VQQVJBVE9SJyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLnNlcGFyYXRvclxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufSJdfQ==