import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NotificationService {
    constructor(http, baseUrl, basePort, separator) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.basePort = basePort;
        this.separator = separator;
    }
    getNotifications() {
        return this.http.get(`${this.baseUrl}${this.separator}${this.basePort}/notification`);
    }
    getPaginatedNotifications(filterKeys, page) {
        return this.http.post(`${this.baseUrl}${this.separator}${this.basePort}/notification/all/filter`, { filterKeys, page });
    }
    readAllNotifications() {
        return this.http.put(`${this.baseUrl}${this.separator}${this.basePort}/notification`, {});
    }
    readOneNotification(id) {
        return this.http.put(`${this.baseUrl}${this.separator}${this.basePort}/notification/${id}`, {});
    }
    getTotalUnreadNotificationCount() {
        return this.http.get(`${this.baseUrl}${this.separator}${this.basePort}/notification/unread-message-count`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NotificationService, deps: [{ token: i1.HttpClient }, { token: 'BASE_URL' }, { token: 'BASE_PORT' }, { token: 'SEPARATOR' }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NotificationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['BASE_URL']
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['BASE_PORT']
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['SEPARATOR']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jdWJlL3NoYXJlZC9zcmMvbGliL3NlcnZpY2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFDLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBT2xELE1BQU0sT0FBTyxtQkFBbUI7SUFDNUIsWUFDWSxJQUFnQixFQUNJLE9BQWUsRUFDZCxRQUFnQixFQUNoQixTQUFpQjtRQUh0QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ0ksWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtJQUM5QyxDQUFDO0lBRUwsZ0JBQWdCO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBdUIsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsZUFBZSxDQUFDLENBQUM7SUFDaEgsQ0FBQztJQUVELHlCQUF5QixDQUFDLFVBQW9CLEVBQUMsSUFBWTtRQUN2RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSwwQkFBMEIsRUFDMUUsRUFBRSxVQUFVLEVBQUMsSUFBSSxFQUFFLENBQ3RCLENBQUM7SUFDTixDQUFDO0lBRUQsb0JBQW9CO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsZUFBZSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxFQUFVO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsaUJBQWlCLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFFRCwrQkFBK0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxvQ0FBb0MsQ0FBQyxDQUFDO0lBQ3ZILENBQUM7K0dBN0JRLG1CQUFtQiw0Q0FHaEIsVUFBVSxhQUNWLFdBQVcsYUFDWCxXQUFXO21IQUxkLG1CQUFtQixjQUZoQixNQUFNOzs0RkFFVCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzswQkFJUSxNQUFNOzJCQUFDLFVBQVU7OzBCQUNqQixNQUFNOzJCQUFDLFdBQVc7OzBCQUNsQixNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBhZ2luYXRlZE5vdGlmaWNhdGlvbnNEVE8sTm90aWZpY2F0aW9uIGFzIEN1c3RvbU5vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgQEluamVjdCgnQkFTRV9VUkwnKSBwcml2YXRlIGJhc2VVcmw6IHN0cmluZyxcclxuICAgICAgICBASW5qZWN0KCdCQVNFX1BPUlQnKSBwcml2YXRlIGJhc2VQb3J0OiBzdHJpbmcsXHJcbiAgICAgICAgQEluamVjdCgnU0VQQVJBVE9SJykgcHJpdmF0ZSBzZXBhcmF0b3I6IHN0cmluZ1xyXG4gICAgKSB7IH1cclxuXHJcbiAgICBnZXROb3RpZmljYXRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEN1c3RvbU5vdGlmaWNhdGlvbltdPihgJHt0aGlzLmJhc2VVcmx9JHt0aGlzLnNlcGFyYXRvcn0ke3RoaXMuYmFzZVBvcnR9L25vdGlmaWNhdGlvbmApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhZ2luYXRlZE5vdGlmaWNhdGlvbnMoZmlsdGVyS2V5czogc3RyaW5nW10scGFnZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxQYWdpbmF0ZWROb3RpZmljYXRpb25zRFRPPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFBhZ2luYXRlZE5vdGlmaWNhdGlvbnNEVE8+KFxyXG4gICAgICAgICAgICBgJHt0aGlzLmJhc2VVcmx9JHt0aGlzLnNlcGFyYXRvcn0ke3RoaXMuYmFzZVBvcnR9L25vdGlmaWNhdGlvbi9hbGwvZmlsdGVyYCxcclxuICAgICAgICAgICAgeyBmaWx0ZXJLZXlzLHBhZ2UgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZEFsbE5vdGlmaWNhdGlvbnMoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8dm9pZD4oYCR7dGhpcy5iYXNlVXJsfSR7dGhpcy5zZXBhcmF0b3J9JHt0aGlzLmJhc2VQb3J0fS9ub3RpZmljYXRpb25gLHt9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkT25lTm90aWZpY2F0aW9uKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDx2b2lkPihgJHt0aGlzLmJhc2VVcmx9JHt0aGlzLnNlcGFyYXRvcn0ke3RoaXMuYmFzZVBvcnR9L25vdGlmaWNhdGlvbi8ke2lkfWAse30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvdGFsVW5yZWFkTm90aWZpY2F0aW9uQ291bnQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxudW1iZXI+KGAke3RoaXMuYmFzZVVybH0ke3RoaXMuc2VwYXJhdG9yfSR7dGhpcy5iYXNlUG9ydH0vbm90aWZpY2F0aW9uL3VucmVhZC1tZXNzYWdlLWNvdW50YCk7XHJcbiAgICB9XHJcbn0iXX0=