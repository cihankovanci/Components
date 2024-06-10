import React from 'react';
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
  matchFont,
} from '@shopify/react-native-skia';
import { Graphs } from '../Model';
import { SharedValue } from 'react-native-reanimated';
import { GraphState } from './Selection';
import Svg from 'react-native-svg';
import { color } from 'd3';
interface YAxisProps {
    graphs: Graphs,
    state: SharedValue<GraphState>;
    width: number;
    height: number;
}

const YAxis = ({graphs, state, width,height}: YAxisProps) => {
// const font = useFont(require('../../../../assets/SF-Mono-Medium.otf'));
const fontStyle = {
    fontSize: 10,
    lineHeight: 20,
    color: 'white',
  } as const;

  const fontt = matchFont(fontStyle)
    console.log('Cihan', graphs[state.value.current].data.prices)
    console.log('state', state.value.current)
    const prices = graphs[state.value.current].data.prices
    console.log('width', width, 'height', height, prices.length)
   

  return (
    <>
        {prices.map((price, index) => index % 5 ? <Text x={0} y={20*index} text={`${price.toFixed(2)}`}font={fontt} color={'white'}  /> : null)}

    </>
  );
};

export default YAxis;
