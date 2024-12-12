import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedNotificationsDTO, Notification as CustomNotification } from '../../types/types';
import * as i0 from "@angular/core";
export declare class NotificationService {
    private http;
    private baseUrl;
    private basePort;
    private separator;
    constructor(http: HttpClient, baseUrl: string, basePort: string, separator: string);
    getNotifications(): Observable<CustomNotification[]>;
    getPaginatedNotifications(filterKeys: string[], page: number): Observable<PaginatedNotificationsDTO>;
    readAllNotifications(): Observable<void>;
    readOneNotification(id: number): Observable<void>;
    getTotalUnreadNotificationCount(): Observable<number>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationService>;
}
