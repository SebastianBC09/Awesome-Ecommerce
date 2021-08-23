import React from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import PriceRange from '../components/PriceRange';
import FiltersBar from '../components/FiltersBar';
import Colors from '../components/Colors';
import Sizes from '../components/Sizes';
import Brand from '../components/Brand';
import CheckButton from '../components/CheckButton';

const ApplyFilters = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FiltersBar />
        <PriceRange />
        <Colors />
        <Sizes />
        <Brand />
        <CheckButton />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#212121',
  }
})

export default ApplyFilters;