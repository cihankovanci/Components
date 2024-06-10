import React, {useMemo} from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {
  Canvas,
  Path,
  Group,
  LinearGradient,
  vec,
  useTouchHandler,
  Text,
  useFont,
  Fill,
} from '@shopify/react-native-skia';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {GestureDetector, ScrollView} from 'react-native-gesture-handler';

import {PADDING, COLORS, getGraph, getGraph2, getGraph4} from './Model';
import {getYForX} from './Math';
// import { Cursor } from "./components/Cursor";
// import { Selection } from "./components/Selection";
import {List} from './components/List';
import {Header} from './components/Header';
import {Label} from './components/Label';
import {useGraphTouchHandler} from './components/useGraphTouchHandler';

import {Cursor} from './components/Cursor';
import {Selection} from './components/Selection';

import YAxisLabels from './components/YAxisLabels';
import XAxisLabels from './components/XAxisLabels';
import YAxis from './components/YAxis';

const touchableCursorSize = 80;

const date = new Date("2023-06-22T00:00:00");
const timestamp = date.getTime();


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1D2B',
    paddingTop: 40,
  },
});

export const Wallet = () => {
  const window = useWindowDimensions();
  const {width} = window;
  const height = Math.min(window.width, window.height) / 2;
  const translateY = height + PADDING;
  const graphs = useMemo(() => getGraph(width, height), [width, height]);
  const graphs2 = useMemo(()=> getGraph2(width, height), [width, height]);
  // const graphs4 = useMemo(() => getGraph4(width, height), [width, height]);

// console.log('graphs', graphs[0].data.prices )
// console.log('graphs4', graphs4 )




  // animation value to transition from one graph to the next
  const transition = useSharedValue(0);
  // indicices of the current and next graphs
  const state = useSharedValue({
    next: 0,
    current: 0,
  });
  // path to display
  const path = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = graphs[current].data.path;
    const end = graphs[next].data.path;
    return end.interpolate(start, transition.value)!;
  });

  const path2 = useDerivedValue(() => {
    const {current, next} = state.value;
    const start = graphs2[current].data.path;
    const end = graphs2[next].data.path;
    return end.interpolate(start, transition.value)!;
  });

  // const path4 = useDerivedValue(() => {
  //   const {current, next} = state.value;
  //   const start = graphs4[current].data.path;
  //   const end = graphs4[next].data.path;
  //   return end.interpolate(start, transition.value)!;
  // });

// console.log('path', path4.value.toCmds())
  // x and y values of the cursor
  const x = useSharedValue(0);
  const y = useDerivedValue(() => getYForX(path.value.toCmds(), x.value));
  // const y4 = useDerivedValue(() => getYForX(path4.value.toCmds(), x.value));
  // const y2 = useDerivedValue(() => getYForX(path2.value.toCmds(), x.value));
  // const y3 = useDerivedValue(() => getYForX(path3.value.toCmds(), x.value));
  const gesture = useGraphTouchHandler(x, width);
  const style = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      width: touchableCursorSize,
      height: touchableCursorSize,
      left: x.value - touchableCursorSize / 2,
      top: translateY + y.value - touchableCursorSize / 2,
    };
  });
  const font = useFont(require('../../../assets/SF-Mono-Medium.otf'));
  // const yLabels = graphs3[0].data.prices; // Example: Use prices from the first graph for Y labels
  // const xLabels = graphs[0].data.dates;

  // const sortedY = [...yLabels].sort((a, b) => a - b);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View>
        {/* <YAxisLabels styleHeight={height} styleWidth={width} height={height} prices={yLabels} /> */}

        <Canvas style={{width: width , height: 2 * height + 30}}>
          <Label
            state={state}
            y={y}
            graphs={graphs}
            width={width}
            height={height}
          />

          <Group transform={[{translateY}]}>
            {/* <Fill color="red" /> */}
            {/* <Text
        x={0}
        y={0}
        text="02"
        font={font}
        color={'white'}
      /> */}
            {/* <YAxis
              graphs={graphs}
              state={state}
              width={width}
              height={height}
            /> */}
            {/*  <Text
        x={0}
        y={20}
        text="20"
        font={font}
        color={'white'}
      />
       <Text
        x={0}
        y={40}
        text="40"
        font={font}
        color={'white'}
      />
       <Text
        x={0}
        y={60}
        text="60"
        font={font}
        color={'white'}
      />
       <Text
        x={0}
        y={80}
        text="80"
        font={font}
        color={'white'}
      />
     <Text
        x={0}
        y={100}
        text="80"
        font={font}color={'white'}
      />
       <Text
        x={0}
        y={120}
        text="120"
        font={font}color={'white'}
      />
       <Text
        x={0}
        y={140}
        text="140"
        font={font}color={'white'}
      /> */}

            <Path
              style="stroke"
              path={path}
              strokeWidth={4}
              strokeJoin="round"
              strokeCap="round">
              <LinearGradient
                start={vec(0, 0)}
                end={vec(width, 0)}
                colors={COLORS}
              />
            </Path>
            {/* <Path
              style="stroke"
              path={path2}
              strokeWidth={2}
              strokeJoin="round"
              strokeCap="round">
              
            </Path> */}

            {/* <Cursor x={x} y={y} width={width} />
            <Cursor x={x} y={y2} width={width} /> */}
            <Cursor x={x} y={y} width={width} />
          </Group>
        </Canvas>
        {/* <XAxisLabels width={width}  styleWidth={width} style  dates={xLabels} /> */}
        <GestureDetector gesture={gesture}>
          <Animated.View style={style} />
        </GestureDetector>
      </View>
      <Selection state={state} transition={transition} graphs={graphs} />
      <List />
    </ScrollView>
  );
};
