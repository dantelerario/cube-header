import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedConfig } from '../shared.interface';
import { Language, Status, UserDTO } from '../types/types';
import * as i0 from "@angular/core";
export declare class HeaderComponent implements OnInit {
    private translateService;
    private config;
    userDTO?: UserDTO;
    imgSrc?: string;
    icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
    languages: Language[];
    isNavbarCollapsed: boolean;
    stati: Status[];
    constructor(translateService: TranslateService, config: SharedConfig);
    ngOnInit(): void;
    login(): void;
    changeLanguage(lang: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "cube-header", never, {}, {}, never, never, false, never>;
}
