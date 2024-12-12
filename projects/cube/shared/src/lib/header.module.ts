import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header.component';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { WebSocketService } from './services/websocket/websocket.service';
import { SharedConfig } from './shared.interface';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
  static forRoot(config: SharedConfig): ModuleWithProviders<HeaderModule> {
    return {
      ngModule: HeaderModule,
      providers: [
        AuthService,
        UserService,
        WebSocketService,
        {
          provide: 'SHARED_CONFIG',
          useValue: config
        }
      ]
    };
  }
}