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
import * as i0 from "@angular/core";
export class HeaderModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, declarations: [HeaderComponent], imports: [CommonModule,
            TranslateModule,
            FontAwesomeModule,
            NgbModule,
            RouterModule], exports: [HeaderComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, providers: [
            AuthService,
            UserService,
            WebSocketService,
            {
                provide: 'SHARED_CONFIG',
                useValue: {
                    // valori di default che possono essere sovrascritti dall'app
                    separator: ':',
                    baseUrl: 'http://localhost',
                    basePort: '8101',
                    basePortPortal: '8100',
                    redirectUri: 'http://localhost:4201',
                    loginRedirectChatHomePage: 'http://localhost:4201'
                }
            }
        ], imports: [CommonModule,
            TranslateModule,
            FontAwesomeModule,
            NgbModule,
            RouterModule] }); }
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
                        RouterModule
                    ],
                    exports: [HeaderComponent],
                    providers: [
                        AuthService,
                        UserService,
                        WebSocketService,
                        {
                            provide: 'SHARED_CONFIG',
                            useValue: {
                                // valori di default che possono essere sovrascritti dall'app
                                separator: ':',
                                baseUrl: 'http://localhost',
                                basePort: '8101',
                                basePortPortal: '8100',
                                redirectUri: 'http://localhost:4201',
                                loginRedirectChatHomePage: 'http://localhost:4201'
                            }
                        }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2N1YmUvc2hhcmVkL3NyYy9saWIvaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUE4QjFFLE1BQU0sT0FBTyxZQUFZOytHQUFaLFlBQVk7Z0hBQVosWUFBWSxpQkEzQlIsZUFBZSxhQUU1QixZQUFZO1lBQ1osZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixTQUFTO1lBQ1QsWUFBWSxhQUVKLGVBQWU7Z0hBbUJkLFlBQVksYUFsQlo7WUFDVCxXQUFXO1lBQ1gsV0FBVztZQUNYLGdCQUFnQjtZQUNoQjtnQkFDRSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsUUFBUSxFQUFFO29CQUNSLDZEQUE2RDtvQkFDN0QsU0FBUyxFQUFFLEdBQUc7b0JBQ2QsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLGNBQWMsRUFBRSxNQUFNO29CQUN0QixXQUFXLEVBQUUsdUJBQXVCO29CQUNwQyx5QkFBeUIsRUFBRSx1QkFBdUI7aUJBQ25EO2FBQ0Y7U0FDRixZQXZCQyxZQUFZO1lBQ1osZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixTQUFTO1lBQ1QsWUFBWTs7NEZBcUJILFlBQVk7a0JBNUJ4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDL0IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLFNBQVM7d0JBQ1QsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQzFCLFNBQVMsRUFBRTt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQjs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsUUFBUSxFQUFFO2dDQUNSLDZEQUE2RDtnQ0FDN0QsU0FBUyxFQUFFLEdBQUc7Z0NBQ2QsT0FBTyxFQUFFLGtCQUFrQjtnQ0FDM0IsUUFBUSxFQUFFLE1BQU07Z0NBQ2hCLGNBQWMsRUFBRSxNQUFNO2dDQUN0QixXQUFXLEVBQUUsdUJBQXVCO2dDQUNwQyx5QkFBeUIsRUFBRSx1QkFBdUI7NkJBQ25EO3lCQUNGO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXZWJTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy93ZWJzb2NrZXQvd2Vic29ja2V0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtIZWFkZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBOZ2JNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtIZWFkZXJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBdXRoU2VydmljZSxcbiAgICBVc2VyU2VydmljZSxcbiAgICBXZWJTb2NrZXRTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6ICdTSEFSRURfQ09ORklHJyxcbiAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgIC8vIHZhbG9yaSBkaSBkZWZhdWx0IGNoZSBwb3Nzb25vIGVzc2VyZSBzb3ZyYXNjcml0dGkgZGFsbCdhcHBcbiAgICAgICAgc2VwYXJhdG9yOiAnOicsXG4gICAgICAgIGJhc2VVcmw6ICdodHRwOi8vbG9jYWxob3N0JyxcbiAgICAgICAgYmFzZVBvcnQ6ICc4MTAxJyxcbiAgICAgICAgYmFzZVBvcnRQb3J0YWw6ICc4MTAwJyxcbiAgICAgICAgcmVkaXJlY3RVcmk6ICdodHRwOi8vbG9jYWxob3N0OjQyMDEnLFxuICAgICAgICBsb2dpblJlZGlyZWN0Q2hhdEhvbWVQYWdlOiAnaHR0cDovL2xvY2FsaG9zdDo0MjAxJ1xuICAgICAgfVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNb2R1bGUgeyB9Il19