import deepmerge from 'deepmerge';
import * as React from 'react';
// import {Text, Rect} from 'react-native-svg';

// import { ChartDataPoint, Label, XYValue, Shape } from './types'
import {ChartDataPoint, Label, XYValue, Shape,ChartDataPointString} from './types';
import {Dimensions, View, Text, StyleSheet} from 'react-native';

type Props = {
  theme?: {
    label?: Label;
    shape?: Shape;
    formatter?: (value: ChartDataPoint) => string;
    formatterX?: (value: ChartDataPoint) => string;
    lineName?: (value: ChartDataPoint) => string;
    formatterXString?: (value: ChartDataPointString) => string;
  };
  value?: ChartDataPoint;
  position?: XYValue;
};

const CustomTooltip: React.FC<Props> = props => {
  //   const { dimensions } = React.useContext(ChartContext)

  const {
    theme: {label, formatter, shape, formatterX, lineName,formatterXString},
    value,
    position,
  } = deepmerge(defaultProps, props);

  if (!Dimensions || !value || !position) {
    return null;
  }

  return (
    // <React.Fragment>
    //   <Rect
    //     x={position.x - shape.width / 2 + shape.dx}
    //     y={position.y - shape.height / 2 - shape.dy}
    //     rx={shape.rx}
    //     fill={shape.color}
    //     opacity={shape.opacity}
    //     height={shape.height}
    //     width={shape.width}
    //   />
    //   <Text
    //     x={position.x + label.dx}
    //     y={position.y - label.dy}
    //     fontSize={label.fontSize}
    //     fontWeight={label.fontWeight}
    //     fontFamily={label.fontFamily}
    //     fill={label.color}
    //     opacity={label.opacity}
    //     textAnchor={label.textAnchor}
    //   >
    //     {formatter(value)}
    //   </Text>
    // </React.Fragment>
    <View
      style={styles.container}>
      <View>
        <Text style={styles.text}>
          {/* {lineName(value)} {formatter(value)} : {formatterX(value)} */}
          {lineName(value)} {formatter(value)}
        </Text>
        
      </View>
      <View style={{}}>
        <Text style={{color: 'white'}}>
        {formatterXString && formatterXString(value as ChartDataPointString)}
        </Text>
      </View>
    </View>
  );
};

export {CustomTooltip};

const defaultProps = {
  theme: {
    label: {
      color: 'white',
      fontSize: 12,
      fontWeight: 700,
      textAnchor: 'middle',
      opacity: 1,
      dx: 0,
      dy: 16.5,
    },
    shape: {
      width: 10,
      height: 20,
      dx: 0,
      dy: 20,
      rx: 4,
      color: 'black',
    },
    formatter: (v: ChartDataPoint) => String(v.y),
    formatterX: (v: ChartDataPoint) => String(v.x),
    lineName: (v: ChartDataPoint) => String(v.meta),
    formatterXString: (v: ChartDataPointString) => String(v),
  },
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: 'black',
    // width:'30%'
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    
  },
});