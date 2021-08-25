import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShoppingInfo = () => {
  return (
    <View style={styles.discountMessage}>
      <Text style={styles.message}>25% discount! Use the code "2018" at checkout.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  discountMessage: {
    width: '100%',
    height: 48,
    backgroundColor: '#F0F0F0',
    borderColor: '#979797',
    borderTopWidth: 1,
  },
  message: {
    width: 295,
    color: '#74747A',
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 5,
  },
})

export default ShoppingInfo;