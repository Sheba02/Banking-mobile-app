import { useState } from 'react';
import * as transactionService from '../../../services/transactionService';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await transactionService.getHistory();
      setTransactions(data);
      return data;
    } catch (err: any) {
      setError(err.message);
      setTransactions([]);
      return [];
    } finally {
      setLoading(false);
    }
  };

  return { transactions, fetchTransactions, loading, error };
};
