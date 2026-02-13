import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

interface CardProps {
  cardTier?: string;
  cardType?: string;
  cardNumber: string;
  cardHolderName?: string;
  cardholderName?: string;
  expiryDate: string;
  network?: string;
  colors: [string, string, ...string[]];
  onPress?: () => void;
}

export const CardComponent = ({
  cardTier,
  cardType,
  cardNumber,
  cardHolderName,
  cardholderName,
  expiryDate,
  network,
  colors,
  onPress,
}: CardProps) => {
  const formatCardNumber = (number: string) => {
    return number.replace(/(\d{4})/g, '$1 ').trim().replace(/\d(?=\d{4})/g, '•');
  };

  const formatExpiryDate = (date: string) => {
    if (date.includes('/')) return date;
    const d = new Date(date);
    return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getFullYear()).slice(-2)}`;
  };

  return (
    <TouchableOpacity style={styles.cardSection} onPress={onPress}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardLabel}>{cardTier || cardType} Card</Text>
        <Ionicons name="arrow-forward" size={20} color="#000" />
      </View>
      <LinearGradient colors={colors} style={styles.card}>
        <View style={styles.cardTop}>
          <Text style={styles.cardBrand}>Nexpay</Text>
          <Text style={styles.visaLogo}>{network || 'VISA'}</Text>
        </View>
        <Text style={styles.cardNumber}>{formatCardNumber(cardNumber)}</Text>
        <View style={styles.cardBottom}>
          <View>
            <Text style={styles.cardLabel2}>Card holder name</Text>
            <Text style={styles.cardInfo}>{cardHolderName || cardholderName}</Text>
          </View>
          <View>
            <Text style={styles.cardLabel2}>Expiry date</Text>
            <Text style={styles.cardInfo}>{formatExpiryDate(expiryDate)}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardSection: {
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  card: {
    borderRadius: 16,
    padding: 20,
    height: 200,
    justifyContent: 'space-between',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBrand: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
  visaLogo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    fontStyle: 'italic',
  },
  cardNumber: {
    fontSize: 18,
    color: '#FFF',
    letterSpacing: 2,
    marginTop: 10,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardLabel2: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 4,
  },
  cardInfo: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFF',
  },
});
