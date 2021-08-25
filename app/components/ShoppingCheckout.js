import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const ShoppingCheckout = () => {
  return (
    <View style={styles.checkoutContainer}>
      <Text style={styles.amount}>Total: $1.488.00</Text>
      <Text style={styles.checkoutBtn}>
        Checkout <Ionicons name="ios-chevron-forward" size={16} color="#2B65F9" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkoutContainer: {
    width: '100%',
    height: 49,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#D5D5E0',
  },
  amount: {
    color: '#74747A',
    fontSize: 16,
    alignSelf: 'center',
  },
  checkoutBtn: {
    color: '#2B65F9',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
})

export default ShoppingCheckout;