import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './src/screens/Home/Home';
import BottomSheet from './src/screens/BottomSheet/BottomSheet';
import DraggableNotificationCard from './src/screens/DraggableNotificationCard/DraggableNotificationCard';

import AccordionScreen from './src/screens/Accordion/Accordion';

function HomeScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const Drawer = createDrawerNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Bottom Sheet" component={BottomSheet} />
        <Drawer.Screen name="Draggable Notification Card" component={DraggableNotificationCard} />
        <Drawer.Screen name="Accordion" component={AccordionScreen} />
    </Drawer.Navigator>
  </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})