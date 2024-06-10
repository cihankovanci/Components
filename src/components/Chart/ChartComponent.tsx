import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';

interface lineDataItem {
  value: number;
  label?: string;
  labelComponent?: Function;
  labelTextStyle?: any;
  dataPointText?: string;
  textShiftX?: number;
  textShiftY?: number;
  textColor?: string;
  textFontSize?: number;
  color?: string;
  hideDataPoint?: boolean;
  dataPointHeight?: number;
  dataPointWidth?: number;
  dataPointRadius?: number;
  dataPointColor?: string;
  dataPointShape?: string;
  customDataPoint?: Function;

  stripHeight?: number;
  stripWidth?: number;
  stripColor?: string | any;
  stripOpacity?: number;

  focusedDataPointShape?: string;
  focusedDataPointWidth?: number;
  focusedDataPointHeight?: number;
  focusedDataPointColor?: string | any;
  focusedDataPointRadius?: number;
  focusedCustomDataPoint?: Function;

  dataPointLabelComponent?: Function;
  focusedDataPointLabelComponent?: Function;
  dataPointLabelWidth?: number;
  dataPointLabelShiftX?: number;
  dataPointLabelShiftY?: number;
  showStrip?: boolean;

  showVerticalLine?: boolean;
  verticalLineUptoDataPoint?: boolean;
  verticalLineColor?: string;
  verticalLineThickness?: number;
  verticalLineStrokeDashArray?: number[];
  pointerShiftX?: number;
  pointerShiftY?: number;
  onPress?: Function;
  showXAxisIndex?: boolean;
}

export interface DataSet {
  data: lineDataItem[];
  zIndex?: number;
  thickness?: number;
  strokeDashArray?: number[];
  areaChart?: boolean;
  stepChart?: boolean;
  startIndex?: number;
  endIndex?: number;
  color?: string;
  hideDataPoints?: boolean;
  dataPointsHeight?: number;
  dataPointsWidth?: number;
  dataPointsRadius?: number;
  dataPointsColor?: string;
  dataPointsShape?: string;
  startFillColor?: string;
  endFillColor?: string;
  startOpacity?: number;
  endOpacity?: number;
  textFontSize?: number;
  textColor?: string;
  showArrow?: boolean;
  // arrowConfig?: arrowConfigType
  curved?: boolean;
  curvature?: number;
  // curveType?: Type
  lineSegments?: LineSegment[];
  isSecondary?: boolean;
}

type lineDataCustomItem = {
  value: number;
  date: string;
  color?: string;
  label: string;
}[];

type LineSegment = {
  startIndex: number;
  endIndex: number;
  color: string;
  thickness: number;
  strokeDashArray: Array<number>;
};
type ChartData = {
  date: string;
  value: number;
  color?: string;
  label: string;
  //   thickness?: number;
  //   strokeDashArray?: Array<number>;
  //   areaChart?: boolean;
  //   stepChart?: boolean;
  //   startIndex?: number;
  //   endIndex?: number;
  //   hideDataPoints?: boolean;
  //   dataPointsHeight?: number;
  //   dataPointsWidth?: number;
  //   dataPointsRadius?: number;
  //   dataPointsColor?: string;
  //   dataPointsShape?: string;
  //   startFillColor?: string;
  //   endFillColor?: string;
};
// type DataSet = {
//   data: Array<ChartData>;
//   color: string;
//   label: string;
// };
// type DataSet = {
//   data: Array<ChartData>;
//   color?: string;
//   label?: string;
// //   zIndex?: number;
// //   thickness?: number;
// //   strokeDashArray?: Array<number>;
// //   areaChart?: boolean;
// //   stepChart?: boolean;
// //   startIndex?: number;
// //   endIndex?: number;
// //   color?: string;
// //   hideDataPoints?: boolean;
// //   dataPointsHeight?: number;
// //   dataPointsWidth?: number;
// //   dataPointsRadius?: number;
// //   dataPointsColor?: string;
// //   dataPointsShape?: string;
// //   startFillColor?: string;
// //   endFillColor?: string;
// //   startOpacity?: number;
// //   endOpacity?: number;
// //   textFontSize?: number;
// //   textColor?: string;
// //   showArrow?: boolean;
// //   //  arrowConfig?: arrowConfigType;
// //   curved?: boolean;
// //   curvature?: number;
// //   // curveType?: Type;
// //   lineSegments?: Array<LineSegment>;
// //   isSecondary?: boolean;
// };

type Props = {
  height: number;
  width: number;
  data1?: lineDataItem[];
  data2?: lineDataItem[];
  data3?: lineDataItem[];
  data4?: lineDataItem[];
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  dataset?: DataSet[];
};

const ChartComponent = (props: Props) => {
  // const {height, width} = useWindowDimensions();

  const chartHeight = props.height > props.width ? props.width : props.height;

  const chartWidth = props.height > props.width ? props.height : props.width;

  const stripeHeight = chartHeight;

  const [toggle, setToggle] = React.useState(false);

  console.log('dawjkndwjkadn', props.dataset);

  function analyzeDataSets(...dataSets: Array<Array<lineDataItem>>) {
    let maxElementCount = 0;
    let maxValue = -Infinity;

    dataSets.forEach(dataSet => {
      if (dataSet.length > maxElementCount) {
        maxElementCount = dataSet.length;
      }

      dataSet.forEach(data => {
        if (data.value > maxValue) {
          maxValue = data.value;
        }
      });
    });

    return {
      maxElementCount,
      maxValue,
    };
  }

  console.log(
    'analyzeDataSets',
    analyzeDataSets(props.data1, props.data2 || [], props.data3 || []),
  );
  const {maxElementCount, maxValue} = analyzeDataSets(
    props.data1,
    props.data2 || [],
    props.data3 || [],
  );
  console.log('spacing', chartWidth / maxElementCount);
  return (
    <LineChart
      //   areaChart



      isAnimated
      curved={true}
      curvature={0.1}
      data={props.data1}
      //  data={props.data1}
      data2={!!props.data2 ? props.data2 : []}
      data3={!!props.data3 ? props.data3 : []}
      //   color1={props.data1.color ? props.data1.color : 'red'}
      //   color2={props.data2 ? props.data2.color : 'blue'}
      //   color3={props.data3 ? props.data3.color : 'green'}
      color1={props.color1}
      color2={props.color2}
      color3={props.color3}
      
      rotateLabel
      width={props.width}
      hideDataPoints
      adjustToWidth
      endSpacing={100}
      color="#9CA6B5"
      thickness={2}
      startOpacity={0.9}
      endOpacity={0.2}
      initialSpacing={0}
      maxValue={(maxValue * 4) / 3}
      yAxisColor="white"
      yAxisThickness={0}
      disableScroll
      hideYAxisText
      hideAxesAndRules
      height={chartHeight}
      hideRules
      hideDataPoints1={true}
      hideDataPoints2
      hideDataPoints3
      hideDataPoints4
      hideDataPoints5
      
      yAxisIndicesColor={'white'}
      interpolateMissingValues={false}
      dataPointsHeight={10}
      dataPointsWidth={10}
   
    

      pointerConfig={{
        pointerStripHeight: stripeHeight,
        activatePointersOnLongPress: true,
        activatePointersDelay: 150,
        pointerStripColor: 'lightgray',
        pointerStripWidth: 2,
        pointerColor: 'lightgray',
        showPointerStrip: false,
        pointerEvents: 'box-none',
        
    
        pointerComponent: () => {
          return (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: '#ffffff55',
              }}
            />
          );
        },
        stripBehindBars: true,
        pointerLabelComponent: (items: any) => {
          return (
            <View
              style={{
                height: 90,
                width: 100,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  marginBottom: 6,
                  textAlign: 'center',
                }}>
                {items[0].date}
              </Text>
              <View
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 6,
                  borderRadius: 16,
                  backgroundColor: '#ffffff55',
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: props.color1,
                  }}>
                  {items[0].label} {items[0].value}
                </Text>
                {props.data2 && (
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: props.color2,
                    }}>
                    {items[1].label} {items[1].value}
                  </Text>
                )}
                {props.data3 && (
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: props.color3,
                    }}>
                    {items[2].label} {items[2].value}
                  </Text>
                )}
              </View>
            </View>
          );
        },
      }}
    />
  );
};

export default ChartComponent;

const styles = StyleSheet.create({});
