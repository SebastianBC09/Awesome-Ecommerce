import React from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import ShoppingNavbar from '../components/ShoppingNavbar';
import ShoppingInfo from '../components/ShoppingInfo';
import ShoppingCard from '../components/ShoppingCard';
import ShoppingQuantity from '../components/ShoppingQuantity';
import ShoppingCheckout from '../components/ShoppingCheckout';

const ShoppingCart = () => {
  return (
    <ScrollView>
      <ShoppingNavbar />
      <ShoppingInfo />
      <View style={styles.productContainer}>
        <ShoppingCard />
      </View>
      <ShoppingQuantity />
      <ShoppingCheckout />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    marginTop: 32,
    alignItems: 'center'
  },
})

export default ShoppingCart;