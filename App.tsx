import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/screens/Home/Home';
import BottomSheet from './src/screens/BottomSheet/BottomSheet';
import DraggableNotificationCard from './src/screens/DraggableNotificationCard/DraggableNotificationCard';

import AccordionScreen from './src/screens/Accordion/Accordion';
import DropdownScreen from './src/screens/Dropdown/Dropdown';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Bottom Sheet" component={BottomSheet} />
        <Drawer.Screen
          name="Draggable Notification Card"
          component={DraggableNotificationCard}
        />
        <Drawer.Screen name="Accordion" component={AccordionScreen} />

        <Drawer.Screen name="Dropdown" component={DropdownScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
