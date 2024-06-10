import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const XAxisLabels = ({ width, dates }) => {
  const step = width / (dates.length - 1);
  const adjustedDates = dates.slice(0, 5); // Select a subset of dates to avoid clutter

  return (
    <View style={styles.xAxis}>
      {adjustedDates.map((date, index) => (
        <Text key={index} style={[styles.label, { left: index * step }]}>
          {new Date(date).toLocaleDateString()}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  xAxis: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
width: 100,
height: 20,
  },
  label: {
    position: 'absolute',
    color: 'white',
    transform: [{ translateX: -20 }],
  },
});

export default XAxisLabels;
