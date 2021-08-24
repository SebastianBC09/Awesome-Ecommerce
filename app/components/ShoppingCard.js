import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const image = require('../assets/Sony.png');

const ShoppingCard = () => {
  return (
    <View style={styles.productCard}>
      <Text style={styles.name}>Camera Lens</Text>
      <Text style={styles.info}>Only for Sony Cameras</Text>
      <Text style={styles.price}>$372</Text>
      <Image style={styles.productImage} source={image} />
      <View style={styles.buttons}>
        <View style={styles.remove}>
          <Ionicons name="ios-remove" size={24} color="black" />
        </View>
        <Text style={styles.quantity}>4</Text>
        <View style={styles.add}>
          <Ionicons name="ios-add" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: 290,
    height: 497,
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 36,
  },
  remove: {
    width: 60,
    height: 60,
    backgroundColor: '#F0F0F0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quantity: {
    color: '#131314',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  add: {
    width: 60,
    height: 60,
    backgroundColor: '#F0F0F0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ShoppingCard;