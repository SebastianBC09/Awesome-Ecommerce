import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProductsBar = () => {
  return (
    <View style={styles.largeNav} >
      <Text style={styles.title} >Products</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  largeNav: {
    width: '100%',
    height: 53,
  },
  title: {
    position: 'absolute',
    top: 6.5,
    left: 18,
    fontSize: 32,
    fontWeight: 'bold',
  }
})

export default ProductsBar;