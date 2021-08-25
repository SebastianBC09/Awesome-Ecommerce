import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProductsNavbar from '../components/ProductsNavbar';
import ProductsBar from '../components/ProductsBar';
import ProductFilters from '../components/ProductFilters';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  return (
    <ScrollView>
      <View style={styles.itemsContainer}>
        <ProductsNavbar />
        <ProductsBar />
        <ProductFilters />
        <ProductCard name='Hoodie' price="$34.98" source={require('../assets/Hoodie.jpg')} />
        <ProductCard name='Nike Shoes' price="$99.95" source={require('../assets/Nike.png')} />
        <ProductCard name='Adidas Shoes' price="$102.95" source={require('../assets/Adidas.png')} />
        <ProductCard name='Jacket Autumn' price="$127.98" source={require('../assets/Jacket.png')} />
        <ProductCard name='White Shirt' price="$18.95" source={require('../assets/Shirt.png')} />
        <ProductCard name='Handbag' price="$28.95" source={require('../assets/Purse.png')} />
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