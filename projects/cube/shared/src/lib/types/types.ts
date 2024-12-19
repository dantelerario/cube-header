import { BehaviorSubject,Observable } from 'rxjs';

export type UserDTO = {
    id?: string;                     // Identificativo univoco dell'utente
    name?: string;                   // Nome dell'utente
    surname?: string;                // Cognome dell'utente
    email?: string;                  // Indirizzo email dell'utente
    enabled?: boolean;               // Indica se l'utente è abilitato
    validate?: boolean;              // Indica se l'utente è stato convalidato
    registrationDate?: string;        // Data di registrazione dell'utente (in formato stringa)
    lastOnline?: string;             // Data dell'ultima connessione dell'utente (in formato stringa)
    propertiesDTO?: propertiesDTO;   // Oggetto contenente proprietà specifiche dell'utente
    applications?: ApplicationDTO;
    admin: boolean;                  // Indica se l'utente ha il ruolo di amministratore
};

export type propertiesDTO = {
    id?: string,
    profilePicture: string;
    itemPage: string;
    defaultLanguage: string,
    status: string
};

export type ApplicationDTO = {
    id: number,
    name: string,
    code: string;
}

export type Language = {
    name: string;
    langIdentifier: string;
    flagPath: string;
};

export type Status = {
    name: string,
    iconPath: string
}

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
    id: number
    description: string
    code: string
    isSelected: string
}

export type PaginatedUsersDTO = {
    usersDTO: UserDTO[];
    usersTotalCount: number;
};

export type IsWritingDto = {
    chatId: string,
    userId: string,
    isWriting: boolean
}

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

export type AlertMessage = {
    message: string,
    params?: string
}