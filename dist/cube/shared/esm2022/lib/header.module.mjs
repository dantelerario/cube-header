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
    constructor() {
        console.log('HeaderModule initialized');
    }
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
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2N1YmUvc2hhcmVkL3NyYy9saWIvaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUE4QjFFLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzFDLENBQUM7K0dBSFUsWUFBWTtnSEFBWixZQUFZLGlCQTNCUixlQUFlLGFBRTVCLFlBQVk7WUFDWixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLFNBQVM7WUFDVCxZQUFZLGFBRUosZUFBZTtnSEFtQmQsWUFBWSxhQWxCWjtZQUNULFdBQVc7WUFDWCxXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCO2dCQUNFLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixRQUFRLEVBQUU7b0JBQ1IsNkRBQTZEO29CQUM3RCxTQUFTLEVBQUUsR0FBRztvQkFDZCxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixRQUFRLEVBQUUsTUFBTTtvQkFDaEIsY0FBYyxFQUFFLE1BQU07b0JBQ3RCLFdBQVcsRUFBRSx1QkFBdUI7b0JBQ3BDLHlCQUF5QixFQUFFLHVCQUF1QjtpQkFDbkQ7YUFDRjtTQUNGLFlBdkJDLFlBQVk7WUFDWixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLFNBQVM7WUFDVCxZQUFZOzs0RkFxQkgsWUFBWTtrQkE1QnhCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMvQixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsU0FBUzt3QkFDVCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDMUIsU0FBUyxFQUFFO3dCQUNULFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixRQUFRLEVBQUU7Z0NBQ1IsNkRBQTZEO2dDQUM3RCxTQUFTLEVBQUUsR0FBRztnQ0FDZCxPQUFPLEVBQUUsa0JBQWtCO2dDQUMzQixRQUFRLEVBQUUsTUFBTTtnQ0FDaEIsY0FBYyxFQUFFLE1BQU07Z0NBQ3RCLFdBQVcsRUFBRSx1QkFBdUI7Z0NBQ3BDLHlCQUF5QixFQUFFLHVCQUF1Qjs2QkFDbkQ7eUJBQ0Y7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYlNvY2tldFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3dlYnNvY2tldC93ZWJzb2NrZXQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0hlYWRlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIE5nYk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0hlYWRlckNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEF1dGhTZXJ2aWNlLFxuICAgIFVzZXJTZXJ2aWNlLFxuICAgIFdlYlNvY2tldFNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogJ1NIQVJFRF9DT05GSUcnLFxuICAgICAgdXNlVmFsdWU6IHtcbiAgICAgICAgLy8gdmFsb3JpIGRpIGRlZmF1bHQgY2hlIHBvc3Nvbm8gZXNzZXJlIHNvdnJhc2NyaXR0aSBkYWxsJ2FwcFxuICAgICAgICBzZXBhcmF0b3I6ICc6JyxcbiAgICAgICAgYmFzZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3QnLFxuICAgICAgICBiYXNlUG9ydDogJzgxMDEnLFxuICAgICAgICBiYXNlUG9ydFBvcnRhbDogJzgxMDAnLFxuICAgICAgICByZWRpcmVjdFVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMScsXG4gICAgICAgIGxvZ2luUmVkaXJlY3RDaGF0SG9tZVBhZ2U6ICdodHRwOi8vbG9jYWxob3N0OjQyMDEnXG4gICAgICB9XG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlck1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdIZWFkZXJNb2R1bGUgaW5pdGlhbGl6ZWQnKTtcbiAgfVxufSJdfQ==