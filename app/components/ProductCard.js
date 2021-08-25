import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const ProductCard = (props) => {
  return (
    <View style={styles.card}>
      <Image source={props.source} />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 163,
    height: 240,
    marginTop: 17,
  },
  name: {
    fontSize: 15,
    color: '#131314',
    marginTop: 16,
    alignSelf: 'center'
  },
  price: {
    fontSize: 16,
    color: '#131314',
    fontWeight: 'bold',
    marginTop: 6,
    alignSelf: 'center'
  }
})

export default ProductCard;