import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header.component';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { SharedConfig } from './shared.interface';
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
    AuthService,
    UserService,
    WebSocketService
  ]
})
export class HeaderModule {
  static forRoot(config: SharedConfig): ModuleWithProviders<HeaderModule> {
    return {
      ngModule: HeaderModule,
      providers: [
        {
          provide: 'SHARED_CONFIG',
          useValue: config
        }
      ]
    };
  }
}