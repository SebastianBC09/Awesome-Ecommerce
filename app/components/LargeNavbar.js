import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavigationBar from './NavigationBar'

const LargeNavbar = () => {
  return (
    <View style={styles.largeNav} >
      <NavigationBar />
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
    left: 18,
    fontSize: 32,
    fontWeight: 'bold',
  }
})

export default LargeNavbar;