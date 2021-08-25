import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const ShoppingQuantity = () => {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.removeBtn}>
        <Ionicons name="ios-remove" size={24} color="black" />
      </View>
      <Text style={styles.quantity}>4</Text>
      <View style={styles.addBtn}>
        <Ionicons name="ios-add" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 36,
    marginHorizontal: 42,
    marginBottom: 64,
  },
  removeBtn: {
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
  addBtn: {
    width: 60,
    height: 60,
    backgroundColor: '#F0F0F0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ShoppingQuantity;