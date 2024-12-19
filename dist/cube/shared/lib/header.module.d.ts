import { ModuleWithProviders } from '@angular/core';
import { SharedConfig } from './types/shared.interface';
import * as i0 from "@angular/core";
import * as i1 from "./components/header/header.component";
import * as i2 from "./components/profile/profile.component";
import * as i3 from "@angular/common";
import * as i4 from "@ngx-translate/core";
import * as i5 from "@fortawesome/angular-fontawesome";
import * as i6 from "@ng-bootstrap/ng-bootstrap";
import * as i7 from "@angular/router";
import * as i8 from "@angular/common/http";
import * as i9 from "@angular/forms";
export declare class HeaderModule {
    static forRoot(config: SharedConfig): ModuleWithProviders<HeaderModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<HeaderModule, [typeof i1.HeaderComponent, typeof i2.ProfileComponent], [typeof i3.CommonModule, typeof i4.TranslateModule, typeof i5.FontAwesomeModule, typeof i6.NgbModule, typeof i7.RouterModule, typeof i8.HttpClientModule, typeof i9.FormsModule], [typeof i1.HeaderComponent, typeof i2.ProfileComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<HeaderModule>;
}
