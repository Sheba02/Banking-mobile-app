import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../../../shared/utils/constants';

export const useCards = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCards = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = await AsyncStorage.getItem('token');
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(`${API_URL}/cards`, {
        headers: { Authorization: `Bearer ${token}` },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        setCards(data);
        return data;
      } else {
        setCards([]);
        return [];
      }
    } catch (err: any) {
      setError(err.message);
      setCards([]);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const addCard = async (cardData: any) => {
    setLoading(true);
    setError(null);
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch(`${API_URL}/cards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cardData),
      });

      if (response.ok) {
        const newCard = await response.json();
        setCards([...cards, newCard]);
        return newCard;
      } else {
        throw new Error('Failed to add card');
      }
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { cards, fetchCards, addCard, loading, error };
};
