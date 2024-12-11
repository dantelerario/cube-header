import { Injectable, Inject } from '@angular/core';
import { USER_ENDPOINTS } from './user.constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class UserService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    getPortalUrl(endpoint) {
        return `${this.config.baseUrl}${this.config.separator}${this.config.basePortPortal}${endpoint}`;
    }
    getBaseUrl(endpoint) {
        return `${this.config.baseUrl}${this.config.separator}${this.config.basePort}${endpoint}`;
    }
    save() {
        return this.http.post(this.getPortalUrl(USER_ENDPOINTS.SAVE), {});
    }
    getUser(userId) {
        return this.http.get(`${this.getPortalUrl(USER_ENDPOINTS.GET_USER)}/${userId}`);
    }
    getUserListFiltered(filterKey, page, excludeIdChat) {
        return this.http.get(`${this.getPortalUrl(USER_ENDPOINTS.GET_FILTERED)}/${filterKey}/${page}`);
    }
    updateProfilePic(picture) {
        return this.http.put(this.getPortalUrl(USER_ENDPOINTS.UPDATE_PICTURE), picture);
    }
    updateItemPerPage(itemPerPage) {
        return this.http.put(this.getPortalUrl(USER_ENDPOINTS.UPDATE_ITEMS_PER_PAGE), itemPerPage);
    }
    updateLanguage(lang) {
        return this.http.put(this.getPortalUrl(USER_ENDPOINTS.UPDATE_LANGUAGE), lang);
    }
    updateStatus(status) {
        return this.http.put(this.getPortalUrl(USER_ENDPOINTS.UPDATE_STATUS), status);
    }
    getUserPermissions(userId) {
        return this.http.get(`${this.getBaseUrl(USER_ENDPOINTS.GET_PERMISSIONS)}/${userId}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UserService, deps: [{ token: i1.HttpClient }, { token: 'SHARED_CONFIG' }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UserService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['SHARED_CONFIG']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY3ViZS9zaGFyZWQvc3JjL2xpYi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFDLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUtsRCxNQUFNLE9BQU8sV0FBVztJQUNwQixZQUNZLElBQWdCLEVBQ1MsTUFBb0I7UUFEN0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNTLFdBQU0sR0FBTixNQUFNLENBQWM7SUFDckQsQ0FBQztJQUVHLFlBQVksQ0FBQyxRQUFnQjtRQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDcEcsQ0FBQztJQUVPLFVBQVUsQ0FBQyxRQUFnQjtRQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDOUYsQ0FBQztJQUVELElBQUk7UUFDQSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxPQUFPLENBQUMsTUFBYztRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQsbUJBQW1CLENBQUMsU0FBaUIsRUFBQyxJQUFZLEVBQUMsYUFBc0I7UUFDckUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFLENBQzNFLENBQUM7SUFDTixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsT0FBb0M7UUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQ2hELE9BQU8sQ0FDVixDQUFDO0lBQ04sQ0FBQztJQUVELGlCQUFpQixDQUFDLFdBQW1CO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLEVBQ3ZELFdBQVcsQ0FDZCxDQUFDO0lBQ04sQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFZO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUNqRCxJQUFJLENBQ1AsQ0FBQztJQUNOLENBQUM7SUFFRCxZQUFZLENBQUMsTUFBYztRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFDL0MsTUFBTSxDQUNULENBQUM7SUFDTixDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBYztRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUNqRSxDQUFDO0lBQ04sQ0FBQzsrR0E1RFEsV0FBVyw0Q0FHUixlQUFlO21IQUhsQixXQUFXLGNBRlIsTUFBTTs7NEZBRVQsV0FBVztrQkFIdkIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQUlRLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbkR0byxQYWdpbmF0ZWRVc2Vyc0RUTyxVc2VyRFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBTaGFyZWRDb25maWcgfSBmcm9tICcuLi8uLi9zaGFyZWQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVVNFUl9FTkRQT0lOVFMgfSBmcm9tICcuL3VzZXIuY29uc3RhbnRzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIEBJbmplY3QoJ1NIQVJFRF9DT05GSUcnKSBwcml2YXRlIGNvbmZpZzogU2hhcmVkQ29uZmlnXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UG9ydGFsVXJsKGVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5iYXNlVXJsfSR7dGhpcy5jb25maWcuc2VwYXJhdG9yfSR7dGhpcy5jb25maWcuYmFzZVBvcnRQb3J0YWx9JHtlbmRwb2ludH1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QmFzZVVybChlbmRwb2ludDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuYmFzZVVybH0ke3RoaXMuY29uZmlnLnNlcGFyYXRvcn0ke3RoaXMuY29uZmlnLmJhc2VQb3J0fSR7ZW5kcG9pbnR9YDtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDx2b2lkPih0aGlzLmdldFBvcnRhbFVybChVU0VSX0VORFBPSU5UUy5TQVZFKSx7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcih1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlckRUTz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXJEVE8+KGAke3RoaXMuZ2V0UG9ydGFsVXJsKFVTRVJfRU5EUE9JTlRTLkdFVF9VU0VSKX0vJHt1c2VySWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckxpc3RGaWx0ZXJlZChmaWx0ZXJLZXk6IHN0cmluZyxwYWdlOiBudW1iZXIsZXhjbHVkZUlkQ2hhdD86IHN0cmluZyk6IE9ic2VydmFibGU8UGFnaW5hdGVkVXNlcnNEVE8+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQYWdpbmF0ZWRVc2Vyc0RUTz4oXHJcbiAgICAgICAgICAgIGAke3RoaXMuZ2V0UG9ydGFsVXJsKFVTRVJfRU5EUE9JTlRTLkdFVF9GSUxURVJFRCl9LyR7ZmlsdGVyS2V5fS8ke3BhZ2V9YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUHJvZmlsZVBpYyhwaWN0dXJlOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IG51bGwpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxib29sZWFuPihcclxuICAgICAgICAgICAgdGhpcy5nZXRQb3J0YWxVcmwoVVNFUl9FTkRQT0lOVFMuVVBEQVRFX1BJQ1RVUkUpLFxyXG4gICAgICAgICAgICBwaWN0dXJlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtUGVyUGFnZShpdGVtUGVyUGFnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8Ym9vbGVhbj4oXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9ydGFsVXJsKFVTRVJfRU5EUE9JTlRTLlVQREFURV9JVEVNU19QRVJfUEFHRSksXHJcbiAgICAgICAgICAgIGl0ZW1QZXJQYWdlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMYW5ndWFnZShsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxib29sZWFuPihcclxuICAgICAgICAgICAgdGhpcy5nZXRQb3J0YWxVcmwoVVNFUl9FTkRQT0lOVFMuVVBEQVRFX0xBTkdVQUdFKSxcclxuICAgICAgICAgICAgbGFuZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdHVzKHN0YXR1czogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8Ym9vbGVhbj4oXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9ydGFsVXJsKFVTRVJfRU5EUE9JTlRTLlVQREFURV9TVEFUVVMpLFxyXG4gICAgICAgICAgICBzdGF0dXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJQZXJtaXNzaW9ucyh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGVybWlzc2lvbkR0b1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UGVybWlzc2lvbkR0b1tdPihcclxuICAgICAgICAgICAgYCR7dGhpcy5nZXRCYXNlVXJsKFVTRVJfRU5EUE9JTlRTLkdFVF9QRVJNSVNTSU9OUyl9LyR7dXNlcklkfWBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il19