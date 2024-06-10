import {StyleSheet, View, Dimensions, SafeAreaView} from 'react-native';
import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import Svg, {Rect, Text} from 'react-native-svg';
const ChartKitScreen = () => {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const lineChartData = {
    labels: [],
    datasets: [
      {
        data: [13.8, 13.8, 13.8, 13.8, 13.8, 13.8, 13, 13.8, 13.8, 13.8, 13.8],
        strokeWidth: 1,
        labels: [
          1566201802, 1566288253, 1566374595, 1566460963, 1566547429,
          1566806673, 1566892961, 1566892961, 1566979498, 1567065874,
          1567152215,
        ],
      },
    ],
  };

  let [tooltipPos, setTooltipPos] = React.useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  return (
    <SafeAreaView>
      <Text>Bezier Line Chart</Text>
      <Text>Bezier Line Chart</Text>
      <LineChart
        //    withHorizontalLabels={false}
        //    withVerticalLabels={false}
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
              strokeWidth: 2, // optional
              // withDots: false,
            },
            {
              data: [30, 40, 45, 50, 60, 70],
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              strokeWidth: 2, // optional
              // withDots: false // optional
            },
          ],
          legend: ['Rainy Days', 'Bike'], // optional
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1}
        decorator={() => {
            return tooltipPos.visible ? <View>
             <Svg>
                <Rect x={tooltipPos.x -15} y={tooltipPos.y + 10} width="40"  
                 height="30" fill="black" />
                <Text
                   x={tooltipPos.x + 5}
                   y={tooltipPos.y + 30}
                   fill="white"
                   fontSize="16"
                   fontWeight="bold"
                   textAnchor="middle">
                   {tooltipPos.value}
                </Text>
             </Svg>
         </View> : null
         }}
        //   tooltipProps={{
        //     tooltipComponent: ({ value, index, dataset }) => {
        //         console.log(value, index, dataset)
        //       return (
        //         <View
        //           style={{
        //             backgroundColor: 'white',
        //             padding: 10,
        //             borderRadius: 5,
        //           }}>
        //           <Text>{value}</Text>
        //         </View>
        //       );
        //     },
        //   }}

        //   decorator={(value) => {
        //     console.log('decorator' + JSON.stringify(value));
        //     return (
        //         <View style={{ position: 'absolute', backgroundColor: 'red', top: value.y, left: value.x, height: 100, width: 100, zIndex: 1000 }}></View>
        //     )
        //   }}
        onDataPointClick={
            (data) => {
               // check if we have clicked on the same point again
               let isSamePoint = (tooltipPos.x === data.x 
                                   && tooltipPos.y ===  data.y)
             
               // if clicked on the same point again toggle visibility
               // else,render tooltip to new position and update its value
               isSamePoint ? setTooltipPos((previousState)=> {
                                  return {
                                       ...previousState, 
                                       value: data.value,
                                       visible: !previousState.visible}
                                  })
                            : 
                          setTooltipPos({x: data.x, 
                             value: data.value, y: data.y,
                             visible: true
                          });
             } // end function
          }
          
        // optional, defaults to 1
        //   chartConfig={chartConfig}
        // onDataPointClick={({value, dataset, getColor}) => console.log(value, dataset, getColor)}
        //   chartConfig={{
        //     backgroundColor: "#e26a00",
        //     backgroundGradientFrom: "#fb8c00",
        //     backgroundGradientTo: "#ffa726",
        //     decimalPlaces: 2, // optional, defaults to 2dp
        //     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        //     labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        //     style: {
        //       borderRadius: 16
        //     },
        //     propsForDots: {
        //       r: "6",
        //       strokeWidth: "2",
        //       stroke: "#ffa726"
        //     }
        //   }}
        // renderDotContent={({x, y, index}) => <Text key={index} style={{position: 'absolute', top: y, left: x, backgroundColor: 'red', padding: 5, borderRadius: 5}}>{index}</Text>}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier={false}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </SafeAreaView>
  );
};

export default ChartKitScreen;

const styles = StyleSheet.create({});
