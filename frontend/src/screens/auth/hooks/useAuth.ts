import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as authService from '../../../services/authService';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (identifier: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.login(identifier, password);
      return response;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.register(userData);
      return response;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (userId: string, otp: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.verifyOTP(userId, otp);
      await AsyncStorage.setItem('token', response.token);
      return response;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, register, verifyOTP, loading, error };
};
