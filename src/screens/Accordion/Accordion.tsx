import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import data from './data'
import Accordion from '../../components/Accordion/Accordion'


const AccordionScreen = () => {
  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {data.map((value, index) => {
                return <Accordion value={value} key={index} />;
                })}
      <Text>Accordion</Text>
      </ScrollView>
    </View>
  )
}

export default AccordionScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    }
})