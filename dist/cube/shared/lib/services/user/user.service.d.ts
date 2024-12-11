import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PermissionDto, PaginatedUsersDTO, UserDTO } from '../../types/types';
import { SharedConfig } from '../../shared.interface';
import * as i0 from "@angular/core";
export declare class UserService {
    private http;
    private config;
    constructor(http: HttpClient, config: SharedConfig);
    private getPortalUrl;
    private getBaseUrl;
    save(): Observable<void>;
    getUser(userId: string): Observable<UserDTO>;
    getUserListFiltered(filterKey: string, page: number, excludeIdChat?: string): Observable<PaginatedUsersDTO>;
    updateProfilePic(picture: string | ArrayBuffer | null): Observable<boolean>;
    updateItemPerPage(itemPerPage: string): Observable<boolean>;
    updateLanguage(lang: string): Observable<boolean>;
    updateStatus(status: string): Observable<boolean>;
    getUserPermissions(userId: string): Observable<PermissionDto[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserService>;
}
