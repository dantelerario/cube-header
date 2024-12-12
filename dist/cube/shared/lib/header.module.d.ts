import { ModuleWithProviders } from '@angular/core';
import { SharedConfig } from './types/shared.interface';
import * as i0 from "@angular/core";
import * as i1 from "./component/header.component";
import * as i2 from "@angular/common";
import * as i3 from "@ngx-translate/core";
import * as i4 from "@fortawesome/angular-fontawesome";
import * as i5 from "@ng-bootstrap/ng-bootstrap";
import * as i6 from "@angular/router";
export declare class HeaderModule {
    static forRoot(config: SharedConfig): ModuleWithProviders<HeaderModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<HeaderModule, [typeof i1.HeaderComponent], [typeof i2.CommonModule, typeof i3.TranslateModule, typeof i4.FontAwesomeModule, typeof i5.NgbModule, typeof i6.RouterModule], [typeof i1.HeaderComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<HeaderModule>;
}
