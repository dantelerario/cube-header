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

@NgModule({
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
})
export class HeaderModule {
  constructor() {
    console.log('HeaderModule initialized');
  }
}