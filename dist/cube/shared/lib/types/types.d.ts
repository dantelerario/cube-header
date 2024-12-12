import { BehaviorSubject, Observable } from 'rxjs';
export type UserDTO = {
    id?: string;
    name?: string;
    surname?: string;
    email?: string;
    enabled?: boolean;
    validate?: boolean;
    registrationDate?: string;
    lastOnline?: string;
    propertiesDTO?: propertiesDTO;
    applications?: ApplicationDTO;
    admin: boolean;
};
export type propertiesDTO = {
    id?: string;
    profilePicture: string;
    itemPage: string;
    defaultLanguage: string;
    status: string;
};
export type ApplicationDTO = {
    id: number;
    name: string;
    code: string;
};
export type Language = {
    name: string;
    langIdentifier: string;
    flagPath: string;
};
export type Status = {
    name: string;
    iconPath: string;
};
export interface WebSocketService {
    disconnect(): Promise<void>;
}
export interface AuthService {
    userDTOBehaviorSubject: BehaviorSubject<UserDTO>;
}
export interface UserService {
    updateStatus(status: string): Observable<any>;
}
export type PermissionDto = {
    id: number;
    description: string;
    code: string;
    isSelected: string;
};
export type PaginatedUsersDTO = {
    usersDTO: UserDTO[];
    usersTotalCount: number;
};
export type IsWritingDto = {
    chatId: string;
    userId: string;
    isWriting: boolean;
};
export type MessageTriggerDTO = {
    chatId: number;
    message: string;
    receiverId?: string;
    senderId?: string;
    receiverIdGroup?: string[];
};
export type Notification = {
    id: number;
    message: string;
    sentAt: string | null;
    read: boolean;
    app: string;
};
export type PaginatedNotificationsDTO = {
    notificationDTO: Notification[];
    notificationTotalCount: number;
};
