import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Filter from '../components/Filters'
import Card from '../components/ItemCard';

const ProductList = () => {
  return (
    <ScrollView>
      <View style={styles.itemsContainer}>
        <Filter />
        <Card name='Hoodie' price="$34.98" source={require('../assets/Hoodie.jpg')} />
        <Card name='Nike Shoes' price="$99.95" source={require('../assets/Nike.png')} />
        <Card name='Adidas Shoes' price="$102.95" source={require('../assets/Adidas.png')} />
        <Card name='Jacket Autumn' price="$127.98" source={require('../assets/Jacket.png')} />
        <Card name='White Shirt' price="$18.95" source={require('../assets/Shirt.png')} />
        <Card name='Handbag' price="$28.95" source={require('../assets/Purse.png')} />
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  }
})

export default ProductList;