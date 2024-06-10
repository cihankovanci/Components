import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './src/screens/Home/Home';
import BottomSheet from './src/screens/BottomSheet/BottomSheet';
import DraggableNotificationCard from './src/screens/DraggableNotificationCard/DraggableNotificationCard';

import AccordionScreen from './src/screens/Accordion/Accordion';
import DropdownScreen from './src/screens/Dropdown/Dropdown';
import Toast from './src/screens/Toast/Toast';
import SwipeList from './src/screens/SwipeList/SwipeList';
import VictoryCharts from './src/screens/VictoryCharts/VictoryCharts';
import {createStackNavigator} from '@react-navigation/stack';
import {Wallet} from './src/screens/Wallet';
import Test from './src/screens/Test/Test';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ChartScreen from './src/screens/Chart/Chart';
import GiftedChartScreen from './src/screens/GiftedChartScreen/GiftedChartScreen';
import ChartKitScreen from './src/screens/GiftedChartScreen/ChartKitScreen';
import ChartKitScreenV2 from './src/screens/GiftedChartScreen/ChartKitScreenV2';
import Echarts from 'echarts';
import EChartComponent, { data } from './src/screens/Chart/ECharts/EChartsScreen';
import EChartsScreen from './src/screens/Chart/ECharts/EChartsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function Stackk() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GiftedCharts"
          component={VictoryCharts}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const App = () => {
  const {width, height} = useWindowDimensions();

  const data1 = [
    {
      name: 'line1',
      data: [
        150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260,
      ],
      type: 'line',
    },
    {
      name: 'line2',
      data: [50, 30, 24, 18, 35, 47, 60],
      type: 'line',
    },
    {
      name: 'line3',
      data: [5, 3, 2, 1, 3, 7, 6],
      type: 'line',
    },
  ];

  const date1 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        {/* <Wallet /> */}
        {/* <ChartScreen /> */}
        {/* <GiftedChartScreen /> */}

          <EChartsScreen />

      </NavigationContainer>
    </GestureHandlerRootView>
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="D3" screenOptions={{headerShown: true}}>
    //     <Drawer.Screen name="Home" component={Home} />
    //     <Drawer.Screen name="Bottom Sheet" component={BottomSheet} />
    //     <Drawer.Screen
    //       name="Draggable Notification Card"
    //       component={DraggableNotificationCard}
    //     />
    //     <Drawer.Screen name="Accordion" component={AccordionScreen} />

    //     <Drawer.Screen name="Dropdown" component={DropdownScreen} />
    //     <Drawer.Screen name="Toast" component={Toast} />
    //     <Drawer.Screen name="Swipe List" component={SwipeList} />
    //     <Drawer.Screen name="Victory Charts" component={Wallet} />
    //     <Drawer.Screen name="D3" component={Wallet} />

    //   </Drawer.Navigator>
    // </NavigationContainer>
    // // <Stackk />
  );
};

export default App;

const styles = StyleSheet.create({});
