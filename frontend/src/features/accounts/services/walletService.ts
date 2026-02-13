import api from '../../../shared/services/api';

export const getWalletMe = async () => {
    const response = await api.get('/wallet/me');
    return response.data;
};

export const walletService = { getWalletMe };

export default walletService;
