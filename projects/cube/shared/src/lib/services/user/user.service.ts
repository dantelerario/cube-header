import { HttpClient } from '@angular/common/http';
import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionDto,PaginatedUsersDTO,UserDTO } from '../../types/types';
import { SharedConfig } from '../../types/shared.interface';
import { USER_ENDPOINTS } from '../../types/user.constants';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient,
        @Inject('SHARED_CONFIG') private config: SharedConfig
    ) { }

    private getPortalUrl(endpoint: string): string {
        return `${this.config.baseUrl}${this.config.separator}${this.config.basePortPortal}${endpoint}`;
    }

    private getBaseUrl(endpoint: string): string {
        return `${this.config.baseUrl}${this.config.separator}${this.config.basePort}${endpoint}`;
    }

    save(): Observable<void> {
        return this.http.post<void>(this.getPortalUrl(USER_ENDPOINTS.SAVE),{});
    }

    getUser(userId: string): Observable<UserDTO> {
        return this.http.get<UserDTO>(`${this.getPortalUrl(USER_ENDPOINTS.GET_USER)}/${userId}`);
    }

    getUserListFiltered(filterKey: string,page: number,excludeIdChat?: string): Observable<PaginatedUsersDTO> {
        return this.http.get<PaginatedUsersDTO>(
            `${this.getPortalUrl(USER_ENDPOINTS.GET_FILTERED)}/${filterKey}/${page}`
        );
    }

    updateProfilePic(picture: string | ArrayBuffer | null): Observable<boolean> {
        return this.http.put<boolean>(
            this.getPortalUrl(USER_ENDPOINTS.UPDATE_PICTURE),
            picture
        );
    }

    updateItemPerPage(itemPerPage: string): Observable<boolean> {
        return this.http.put<boolean>(
            this.getPortalUrl(USER_ENDPOINTS.UPDATE_ITEMS_PER_PAGE),
            itemPerPage
        );
    }

    updateLanguage(lang: string): Observable<boolean> {
        return this.http.put<boolean>(
            this.getPortalUrl(USER_ENDPOINTS.UPDATE_LANGUAGE),
            lang
        );
    }

    updateStatus(status: string): Observable<boolean> {
        return this.http.put<boolean>(
            this.getPortalUrl(USER_ENDPOINTS.UPDATE_STATUS),
            status
        );
    }

    getUserPermissions(userId: string): Observable<PermissionDto[]> {
        return this.http.get<PermissionDto[]>(
            `${this.getBaseUrl(USER_ENDPOINTS.GET_PERMISSIONS)}/${userId}`
        );
    }
}