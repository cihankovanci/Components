import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const YAxisLabels = ({ height, prices, styleHeight, styleWidth }) => {
  const step = height / (prices.length - 1);
  const adjustedPrices = prices.slice(0, 5); // Select a subset of prices to avoid clutter
    console.log('adjustedPrices', adjustedPrices)
  return (
    <View style={[styles.yAxis, {width: styleHeight, height:styleWidth}]}>
      {adjustedPrices.map((price, index) => (
        <Text key={index} style={[styles.label, { top: height - index * step }]}>
          {price.toFixed(2)}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  yAxis: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'space-between',
    
  },
  label: {
    position: 'absolute',
    color: 'white',
  },
});

export default YAxisLabels;
