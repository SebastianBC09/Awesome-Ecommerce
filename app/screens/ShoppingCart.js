import React from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import ShoppingCard from '../components/ShoppingCard';
import ShoppingBar from '../components/ShoppingBar';

import { Ionicons } from '@expo/vector-icons';

const ShoppingCart = () => {
  console.log(Dimensions.get('screen'))

  return (
    <ScrollView>
      <View>
        <ShoppingBar />
        <View style={styles.discountMessage}>
          <Text style={styles.message}>25% discount! Use the code "2018" at checkout.</Text>
        </View>
        <View style={styles.productContainer}>
          <ShoppingCard />
          <View style={styles.toolbar}>
            <Text style={styles.total}>Total: $1.488.00</Text>
            <Text style={styles.checkout}>
              Checkout <Ionicons name="ios-chevron-forward" size={16} color="#2B65F9" />
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  discountMessage: {
    width: '100%',
    height: 48,
    backgroundColor: '#F0F0F0'
  },
  message: {
    color: '#74747A',
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 12.5,
  },
  productContainer: {
    marginTop: 32,
    alignItems: 'center'
  },
  toolbar: {
    width: '100%',
    height: 49,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 64,
    borderTopWidth: 1,
    borderColor: '#D5D5E0',
  },
  total: {
    color: '#74747A',
    fontSize: 16,
    alignSelf: 'center',
  },
  checkout: {
    color: '#2B65F9',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
})

export default ShoppingCart;