import React from 'react';
import { View } from 'react-native';
import ProductList from './app/screens/ProductsList';
import ShoppingCart from './app/screens/ShoppingCart';
import ApplyFilters from './app/screens/ApplyFilters';

export default function App() {
  return (
    <View>
      <ApplyFilters />
    </View>
  );
};

