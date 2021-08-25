import React from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import FiltersNavbar from '../components/FiltersNavbar';
import FilterSlider from '../components/FilterSlider';
import FilterColors from '../components/FilterColors';
import FilterSizes from '../components/FilterSizes';
import FilterBrand from '../components/FilterBrand';
import FilterApply from '../components/FilterApply';

const ApplyFilters = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FiltersNavbar />
        <FilterSlider />
        <FilterColors />
        <FilterSizes />
        <FilterBrand />
        <FilterApply />
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