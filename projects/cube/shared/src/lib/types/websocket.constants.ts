export const WEBSOCKET_ENDPOINTS = {
    // Endpoint base per la connessione WebSocket
    BASE_ENDPOINT: '/cube-chat-web-socket',

    // Endpoint per invio messaggi
    REGISTER: '/register',
    DISCONNECT: '/disconnect',
    SEND_TO_ONE: '/send-to-one',
    SEND_TO_GROUP: '/send-to-group',
    READ_MESSAGE: '/readMessage',
    AM_I_WRITING: '/am-i-writing',

    // Endpoint per sottoscrizioni
    PRIVATE_SUBSCRIPTION: '/private',
    STATUS_SUBSCRIPTION: '/status',
    IS_WRITING_SUBSCRIPTION: '/is-writing',
    CHECK_SUBSCRIPTION: '/check',
    NOTIFICATION_SUBSCRIPTION: '/notification'
} as const;