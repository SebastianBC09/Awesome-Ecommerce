import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const image = require('../assets/Sony.png');

const ShoppingCard = () => {
  return (
    <View style={styles.productCard}>
      <Text style={styles.name}>Camera Lens</Text>
      <Text style={styles.info}>Only for Sony Cameras</Text>
      <Text style={styles.price}>$372</Text>
      <Image style={styles.productImage} source={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: 290,
    height: 405,
    justifyContent: 'center',
  },
  name: {
    alignSelf: 'center',
    color: '#131314',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2.5,
  },
  info: {
    alignSelf: 'center',
    width: 137,
    color: '#74747A',
    fontSize: 14,
    textAlign: 'center'
  },
  price: {
    alignSelf: 'center',
    color: '#2B65F9',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 31.5,
  },
  productImage: {
    borderRadius: 15,
  },
})

export default ShoppingCard;