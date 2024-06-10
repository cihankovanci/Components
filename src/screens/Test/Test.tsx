import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { LineGraph } from 'react-native-graph'
import data from '../../screens/Wallet/data.json'
const Test = () => {
  // create dummy data for price history


  return (
    <View>
      <LineGraph
        points={data}
        animated={true}
        color="#4484B2"
      />
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})