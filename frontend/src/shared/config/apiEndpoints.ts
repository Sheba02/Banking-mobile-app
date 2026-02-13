export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        VERIFY_OTP: '/auth/verify-otp',
        ME: '/auth/me',
    },
    TRANSACTIONS: {
        HISTORY: '/transactions/history',
        DEPOSIT: '/transactions/deposit',
        WITHDRAW: '/transactions/withdraw',
        TRANSFER: '/transactions/transfer',
    },
    CARDS: {
        LIST: '/cards',
        CREATE: '/cards',
        DELETE: '/cards',
    },
    WALLET: {
        BALANCE: '/wallet/balance',
    },
    NOTIFICATIONS: {
        LIST: '/notifications',
    },
};
