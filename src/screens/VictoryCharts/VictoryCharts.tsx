import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useEffect, useRef } from 'react'

import { CartesianChart, Line, useChartPressState} from 'victory-native';
import { Circle, useFont } from '@shopify/react-native-skia';
import type { SharedValue } from "react-native-reanimated";

const VictoryCharts = () => {
const num = useRef(0);
  const DATA = Array.from({ length: 31 }, (_, i) => ({
    day: i,
    highTmp: 40 + 30 * Math.random(),
  }));
  
  function ToolTip({ x, y, c }: { x: SharedValue<number>; y: SharedValue<number>; c: SharedValue<number>  }) {
    console.log('c',c) 

 
    return (<><Circle cx={x} cy={y} r={8} color="black" /></>)
  }

  function MyChart() {
    const font = useFont(require('../../../assets/SF-Mono-Medium.otf'), 12);

    const { state, isActive } = useChartPressState({ x: 0, y: { highTmp: 0 } });
    console.log('state',state.x.value,state.y.highTmp.value)

    const INIT_STATE = { x: 0, y: { highTmp: 0 } } as const;
    const { state: firstPress, isActive: isFirstPressActive } =
    useChartPressState(INIT_STATE);
  const { state: secondPress, isActive: isSecondPressActive } =
    useChartPressState(INIT_STATE);

  

    return (
      <View style={{ height: 300, width:'100%' }}>

           <CartesianChart  chartPressState={state} data={DATA} xKey="day" yKeys={["highTmp"]} axisOptions={{font,}}>
     

        {({ points }) => (<><Line points={points.highTmp} color="red" strokeWidth={3} animate={true} style="stroke" />
        {/* <ToolTip x={state.x.position} y={state.y.highTmp.position} c={state.y.highTmp.value.value} /> */}
        {isActive ? (<ToolTip x={state.x.position} y={state.y.highTmp.position} c={state.y.highTmp.value}/>) : null}
        </>)}
          
          
      </CartesianChart>

      </View>
    );
  }
  return (

    <SafeAreaView style={{flex:1}}>
      <MyChart />
    <Text>{num.current}</Text>
    </SafeAreaView>
  )
}

export default VictoryCharts

const styles = StyleSheet.create({})