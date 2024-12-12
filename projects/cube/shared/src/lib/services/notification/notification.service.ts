import { HttpClient } from '@angular/common/http';
import { Inject,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedNotificationsDTO,Notification as CustomNotification } from '../../types/types';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string,
        @Inject('BASE_PORT') private basePort: string,
        @Inject('SEPARATOR') private separator: string
    ) { }

    getNotifications() {
        return this.http.get<CustomNotification[]>(`${this.baseUrl}${this.separator}${this.basePort}/notification`);
    }

    getPaginatedNotifications(filterKeys: string[],page: number): Observable<PaginatedNotificationsDTO> {
        return this.http.post<PaginatedNotificationsDTO>(
            `${this.baseUrl}${this.separator}${this.basePort}/notification/all/filter`,
            { filterKeys,page }
        );
    }

    readAllNotifications(): Observable<void> {
        return this.http.put<void>(`${this.baseUrl}${this.separator}${this.basePort}/notification`,{});
    }

    readOneNotification(id: number): Observable<void> {
        return this.http.put<void>(`${this.baseUrl}${this.separator}${this.basePort}/notification/${id}`,{});
    }

    getTotalUnreadNotificationCount(): Observable<number> {
        return this.http.get<number>(`${this.baseUrl}${this.separator}${this.basePort}/notification/unread-message-count`);
    }
}