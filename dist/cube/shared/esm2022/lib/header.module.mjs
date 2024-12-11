import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header.component';
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderModule, imports: [CommonModule,
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
                    // AuthService,
                    // UserService,
                    // WebSocketService,
                    // {
                    //   provide: 'SHARED_CONFIG',
                    //   useValue: {
                    //     // valori di default che possono essere sovrascritti dall'app
                    //     separator: ':',
                    //     baseUrl: 'http://localhost',
                    //     basePort: '8101',
                    //     basePortPortal: '8100',
                    //     redirectUri: 'http://localhost:4201',
                    //     loginRedirectChatHomePage: 'http://localhost:4201'
                    //   }
                    // }
                    ]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2N1YmUvc2hhcmVkL3NyYy9saWIvaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBaUMvRCxNQUFNLE9BQU8sWUFBWTtJQUN2QjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUMxQyxDQUFDOytHQUhVLFlBQVk7Z0hBQVosWUFBWSxpQkEzQlIsZUFBZSxhQUU1QixZQUFZO1lBQ1osZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixTQUFTO1lBQ1QsWUFBWSxhQUVKLGVBQWU7Z0hBbUJkLFlBQVksWUF6QnJCLFlBQVk7WUFDWixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLFNBQVM7WUFDVCxZQUFZOzs0RkFxQkgsWUFBWTtrQkE1QnhCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMvQixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsU0FBUzt3QkFDVCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDMUIsU0FBUyxFQUFFO29CQUNULGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLElBQUk7b0JBQ0osOEJBQThCO29CQUM5QixnQkFBZ0I7b0JBQ2hCLG9FQUFvRTtvQkFDcEUsc0JBQXNCO29CQUN0QixtQ0FBbUM7b0JBQ25DLHdCQUF3QjtvQkFDeEIsOEJBQThCO29CQUM5Qiw0Q0FBNEM7b0JBQzVDLHlEQUF5RDtvQkFDekQsTUFBTTtvQkFDTixJQUFJO3FCQUNMO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXZWJTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy93ZWJzb2NrZXQvd2Vic29ja2V0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtIZWFkZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBOZ2JNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtIZWFkZXJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBBdXRoU2VydmljZSxcbiAgICAvLyBVc2VyU2VydmljZSxcbiAgICAvLyBXZWJTb2NrZXRTZXJ2aWNlLFxuICAgIC8vIHtcbiAgICAvLyAgIHByb3ZpZGU6ICdTSEFSRURfQ09ORklHJyxcbiAgICAvLyAgIHVzZVZhbHVlOiB7XG4gICAgLy8gICAgIC8vIHZhbG9yaSBkaSBkZWZhdWx0IGNoZSBwb3Nzb25vIGVzc2VyZSBzb3ZyYXNjcml0dGkgZGFsbCdhcHBcbiAgICAvLyAgICAgc2VwYXJhdG9yOiAnOicsXG4gICAgLy8gICAgIGJhc2VVcmw6ICdodHRwOi8vbG9jYWxob3N0JyxcbiAgICAvLyAgICAgYmFzZVBvcnQ6ICc4MTAxJyxcbiAgICAvLyAgICAgYmFzZVBvcnRQb3J0YWw6ICc4MTAwJyxcbiAgICAvLyAgICAgcmVkaXJlY3RVcmk6ICdodHRwOi8vbG9jYWxob3N0OjQyMDEnLFxuICAgIC8vICAgICBsb2dpblJlZGlyZWN0Q2hhdEhvbWVQYWdlOiAnaHR0cDovL2xvY2FsaG9zdDo0MjAxJ1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnSGVhZGVyTW9kdWxlIGluaXRpYWxpemVkJyk7XG4gIH1cbn0iXX0=