import { ModuleWithProviders,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { WebSocketService } from './services/websocket/websocket.service';
import { SharedConfig } from './types/shared.interface';
import { NotificationService } from './services/notification/notification.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent,ProfileComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [HeaderComponent,ProfileComponent]
})
export class HeaderModule {
  static forRoot(config: SharedConfig): ModuleWithProviders<HeaderModule> {
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
}