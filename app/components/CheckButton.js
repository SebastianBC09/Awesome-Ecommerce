import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const CheckButton = () => {
  return (
    <View style={styles.checkButton}>
      <Ionicons name="ios-checkmark" size={24} color="#FFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  checkButton: {
    width: 44,
    height: 44,
    backgroundColor: '#333333',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2.5,
  }
})

export default CheckButton;