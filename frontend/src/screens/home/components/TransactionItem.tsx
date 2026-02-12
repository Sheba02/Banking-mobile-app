import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TransactionItemProps {
  name: string;
  type: 'income' | 'expense';
  amount: number;
  date: string;
  icon: string;
  color: string;
}

export const TransactionItem = ({ name, type, amount, date, icon, color }: TransactionItemProps) => (
  <View style={styles.transactionRow}>
    <View style={[styles.transIcon, { backgroundColor: color }]}>
      <Ionicons name={icon as any} size={22} color="black" />
    </View>
    <View style={{ flex: 1, marginLeft: 15 }}>
      <Text style={styles.transName}>{name}</Text>
      <Text style={styles.transDate}>{date}</Text>
    </View>
    <Text style={[styles.transAmount, { color: type === 'income' ? '#4CAF50' : '#FF5252' }]}>
      {type === 'income' ? '+' : '-'}${Math.abs(amount).toLocaleString()}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  transIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  transDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  transAmount: {
    fontSize: 16,
    fontWeight: '700',
  },
});
