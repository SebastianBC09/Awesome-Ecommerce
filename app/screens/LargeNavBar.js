import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Navbar from './NavigationBar'

const LargeNavBar = () => {
  return (
    <View style={styles.largeNav} >
      <Navbar />
      <Text style={styles.title} >Products</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  largeNav: {
    width: '100%',
    height: 92,
  },
  title: {
    position: 'absolute',
    top: 40,
    left: 6,
    fontSize: 32,
    fontWeight: 'bold',
  }
})

export default LargeNavBar;