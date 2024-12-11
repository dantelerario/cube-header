export const USER_ENDPOINTS = {
    SAVE: '/user',
    GET_USER: '/user',       // /{userId} verrà aggiunto dinamicamente
    GET_FILTERED: '/user/all', // /{filterKey}/{page} verrà aggiunto dinamicamente
    UPDATE_PICTURE: '/properties/picture',
    UPDATE_ITEMS_PER_PAGE: '/properties/itemPerPage',
    UPDATE_LANGUAGE: '/properties/language',
    UPDATE_STATUS: '/properties/status',
    GET_PERMISSIONS: '/permission' // /{userId} verrà aggiunto dinamicamente
} as const;