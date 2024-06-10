import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import ChartComponent from '../../components/Chart/ChartComponent';
import data from '../Accordion/data';

const GiftedChartScreen = () => {
  const {height, width} = useWindowDimensions();
  const [data, setData] = React.useState(false);

  const ptData = [
    {value: 0, date: '1 Apr 2022', color: 'red'},
    {value: 1, date: '2 Apr 2022', color: 'red'},
    {value: 2, date: '3 Apr 2022', color: 'red'},
    {value: 3, date: '4 Apr 2022', color: 'red'},
    {value: 4, date: '5 Apr 2022', color: 'red'},
    {value: 5, date: '6 Apr 2022', color: 'red'},
    {value: 6, date: '7 Apr 2022', color: 'red'},
    {value: 7, date: '8 Apr 2022', color: 'red'},
    {value: 8, date: '9 Apr 2022', color: 'red'},
    {value: 9, date: '10 Apr 2022', color: 'red'},
    {value: 10, date: '11 Apr 2022', color: 'red'},
    {value: 36, date: '12 Apr 2022', color: 'red'},
    {value: 34, date: '13 Apr 2022', color: 'red'},
    {value: 38, date: '14 Apr 2022', color: 'red'},
    {value: 38, date: '15 Apr 2022', color: 'red'},
    {value: 39, date: '16 Apr 2022', color: 'red'},
    {value: 47, date: '17 Apr 2022', color: 'red'},
    {value: 48, date: '18 Apr 2022', color: 'red'},
    {value: 49, date: '19 Apr 2022', color: 'red'},
    {value: 40, date: '20 Apr 2022', color: 'red'},
    {value: 58, date: '21 Apr 2022', color: 'red'},
    {value: 59, date: '22 Apr 2022', color: 'red'},
    {value: 56, date: '23 Apr 2022', color: 'red'},
    {value: 55, date: '24 Apr 2022', color: 'red'},
    {value: 59, date: '25 Apr 2022', color: 'red'},
    {value: 52, date: '26 Apr 2022', color: 'red'},
    {value: 50, date: '27 Apr 2022', color: 'red'},
    {value: 53, date: '28 Apr 2022', color: 'red'},
    {value: 51, date: '29 Apr 2022', color: 'red'},
    {value: 55, date: '30 Apr 2022', color: 'red'},
    {value: 64, date: '1 May 2022', color: 'red'},
    {value: 65, date: '2 May 2022', color: 'red'},
    {value: 68, date: '3 May 2022', color: 'red'},
    {value: 65, date: '4 May 2022', color: 'red'},
    {value: 61, date: '5 May 2022', color: 'red'},
    {value: 64, date: '6 May 2022', color: 'red'},
    {value: 63, date: '7 May 2022', color: 'red'},
    {value: 62, date: '8 May 2022', color: 'red'},
    {value: 60, date: '9 May 2022', color: 'red'},
    {value: 61, date: '10 May 2022', color: 'red'},
    {value: 62, date: '11 May 2022', color: 'red'},
    {value: 63, date: '12 May 2022', color: 'red'},
    {value: 64, date: '13 May 2022', color: 'red'},
    {value: 65, date: '14 May 2022', color: 'red'},
  ];
  const ptData2 = [
    {value: 32, date: '1 Apr 2022', color: 'green'},
    {value: 32, date: '2 Apr 2022', color: 'green'},
    {value: 32, date: '3 Apr 2022', color: 'green'},
    {value: 32, date: '4 Apr 2022', color: 'green'},
    {value: 32, date: '5 Apr 2022', color: 'green'},
    {value: 33, date: '6 Apr 2022', color: 'green'},
    {value: 34, date: '7 Apr 2022', color: 'green'},
    {value: 30, date: '8 Apr 2022', color: 'green'},
    {value: 32, date: '9 Apr 2022', color: 'green'},
    {value: 24, date: '10 Apr 2022', color: 'green'},
    {value: 38, date: '11 Apr 2022', color: 'green'},
    {value: 36, date: '12 Apr 2022', color: 'green'},
    {value: 34, date: '13 Apr 2022', color: 'green'},
    {value: 38, date: '14 Apr 2022', color: 'green'},
    {value: 38, date: '15 Apr 2022', color: 'green'},
    {value: 39, date: '16 Apr 2022', color: 'green'},
    {value: 37, date: '17 Apr 2022', color: 'green'},
    {value: 38, date: '18 Apr 2022', color: 'green'},
    {value: 39, date: '19 Apr 2022', color: 'green'},
    {value: 30, date: '20 Apr 2022', color: 'green'},
    {value: 38, date: '21 Apr 2022', color: 'green'},
    {value: 39, date: '22 Apr 2022', color: 'green'},
    {value: 36, date: '23 Apr 2022', color: 'green'},
    {value: 35, date: '24 Apr 2022', color: 'green'},
    {value: 49, date: '25 Apr 2022', color: 'green'},
    {value: 42, date: '26 Apr 2022', color: 'green'},
    {value: 40, date: '27 Apr 2022', color: 'green'},
    {value: 43, date: '28 Apr 2022', color: 'green'},
    {value: 41, date: '29 Apr 2022', color: 'green'},
    {value: 45, date: '30 Apr 2022', color: 'green'},
    {value: 44, date: '1 May 2022', color: 'green'},
    {value: 45, date: '2 May 2022', color: 'green'},
    {value: 48, date: '3 May 2022', color: 'green'},
    {value: 45, date: '4 May 2022', color: 'green'},
    {value: 41, date: '5 May 2022', color: 'green'},
    {value: 44, date: '6 May 2022', color: 'green'},
    {value: 43, date: '7 May 2022', color: 'green'},
    {value: 42, date: '8 May 2022', color: 'green'},
    {value: 40, date: '9 May 2022', color: 'green'},
    {value: 51, date: '10 May 2022', color: 'green'},
    {value: 52, date: '11 May 2022', color: 'green'},
    {value: 53, date: '12 May 2022', color: 'green'},
    {value: 54, date: '13 May 2022', color: 'green'},
    {value: 55, date: '14 May 2022', color: 'green'},
  ];

  const ptData3 = [
    {value: 72, date: '1 Apr 2022', color: 'blue', },
    {value: 72, date: '2 Apr 2022', color: 'blue', },
    {value: 72, date: '3 Apr 2022', color: 'blue', },
    {value: 72, date: '4 Apr 2022', color: 'blue', },
    {value: 72, date: '5 Apr 2022', color: 'blue', },
    {value: 73, date: '6 Apr 2022', color: 'blue', },
    {value: 74, date: '7 Apr 2022', color: 'blue', },
    {value: 70, date: '8 Apr 2022', color: 'blue', },
    {value: 72, date: '9 Apr 2022', color: 'blue', },
    {value: 74, date: '10 Apr 2022', color: 'blue', },
    {value: 78, date: '11 Apr 2022', color: 'blue', },
    {value: 76, date: '12 Apr 2022', color: 'blue', },
    {value: 74, date: '13 Apr 2022', color: 'blue', },
    {value: 78, date: '14 Apr 2022', color: 'blue', },
    {value: 78, date: '15 Apr 2022', color: 'blue', },
    {value: 79, date: '16 Apr 2022', color: 'blue', },
    {value: 77, date: '17 Apr 2022', color: 'blue', },
    {value: 78, date: '18 Apr 2022', color: 'blue', },
    {value: 79, date: '19 Apr 2022', color: 'blue', },
    {value: 70, date: '20 Apr 2022', color: 'blue', },
    {value: 78, date: '21 Apr 2022', color: 'blue', },
    {value: 79, date: '22 Apr 2022', color: 'blue', },
    {value: 76, date: '23 Apr 2022', color: 'blue', },
    {value: 75, date: '24 Apr 2022', color: 'blue', },
    {value: 79, date: '25 Apr 2022', color: 'blue', },
    {value: 72, date: '26 Apr 2022', color: 'blue', },
    {value: 70, date: '27 Apr 2022', color: 'blue', },
    {value: 73, date: '28 Apr 2022', color: 'blue', },
    {value: 71, date: '29 Apr 2022', color: 'blue', },
    {value: 75, date: '30 Apr 2022', color: 'blue', },
    {value: 74, date: '1 May 2022', color: 'blue', },
    {value: 75, date: '2 May 2022', color: 'blue', },
    {value: 78, date: '3 May 2022', color: 'blue', },
    {value: 75, date: '4 May 2022', color: 'blue', },
    {value: 71, date: '5 May 2022', color: 'blue', },
    {value: 74, date: '6 May 2022', color: 'blue', },
    {value: 73, date: '7 May 2022', color: 'blue', },
    {value: 72, date: '8 May 2022', color: 'blue', },
    {value: 70, date: '9 May 2022', color: 'blue', },
    {value: 71, date: '10 May 2022', color: 'blue', },
    {value: 72, date: '11 May 2022', color: 'blue', },
    {value: 73, date: '12 May 2022', color: 'blue', },
    {value: 74, date: '13 May 2022', color: 'blue', },
    {value: 75, date: '14 May 2022', color: 'blue', },
    {value: 75, date: '4 May 2022', color: 'blue', },
    {value: 71, date: '5 May 2022', color: 'blue', },
    {value: 74, date: '6 May 2022', color: 'blue', },
    {value: 73, date: '7 May 2022', color: 'blue', },
    {value: 72, date: '8 May 2022', color: 'blue', },
    {value: 70, date: '9 May 2022', color: 'blue', },
    {value: 71, date: '10 May 2022', color: 'blue', },
    {value: 72, date: '11 May 2022', color: 'blue', },
    {value: 73, date: '12 May 2022', color: 'blue', },
    {value: 74, date: '13 May 2022', color: 'blue', },
    {value: 75, date: '14 May 2022', color: 'blue', },
    
  ];
  //   const ptData2 = [
  //     {value: 2, date: '1 Apr 2022'},
  //     {value: 2, date: '2 Apr 2022'},
  //     {value: 2, date: '3 Apr 2022'},
  //     {value: 2, date: '4 Apr 2022'},
  //     {value: 2, date: '5 Apr 2022'},
  //     {value: 3, date: '6 Apr 2022'},
  //     {value: 4, date: '7 Apr 2022'},
  //     {value: 20, date: '8 Apr 2022'},
  //     {value: 22, date: '9 Apr 2022'},
  //     {value: 20, date: '10 Apr 2022'},
  //     {value: 28, date: '11 Apr 2022'},
  //     {value: 26, date: '12 Apr 2022'},
  //     {value: 34, date: '13 Apr 2022'},
  //     {value: 38, date: '14 Apr 2022'},
  //     {value: 28, date: '15 Apr 2022'},
  //     {value: 39, date: '16 Apr 2022'},
  //     {value: 37, date: '17 Apr 2022'},
  //     {value: 28, date: '18 Apr 2022'},
  //     {value: 29, date: '19 Apr 2022'},
  //     {value: 30, date: '20 Apr 2022'},
  //     {value: 28, date: '21 Apr 2022'},
  //     {value: 29, date: '22 Apr 2022'},
  //     {value: 26, date: '23 Apr 2022'},
  //     {value: 25, date: '24 Apr 2022'},
  //     {value: 19, date: '25 Apr 2022'},
  //     {value: 22, date: '26 Apr 2022'},
  //     {value: 20, date: '27 Apr 2022'},
  //     {value: 23, date: '28 Apr 2022'},
  //     {value: 21, date: '29 Apr 2022'},
  //     {value: 20, date: '30 Apr 2022'},
  //     {value: 24, date: '1 May 2022'},
  //     {value: 25, date: '2 May 2022'},
  //     {value: 28, date: '3 May 2022'},
  //     {value: 25, date: '4 May 2022'},
  //     {value: 21, date: '5 May 2022'},
  //     {value: 24, date: '6 May 2022'},
  //     {value: 23, date: '7 May 2022'},
  //     {value: 22, date: '8 May 2022'},
  //     {value: 20, date: '9 May 2022'},
  //     {value: 21, date: '10 May 2022'},
  //     {value: 22, date: '11 May 2022'},
  //     {value: 23, date: '12 May 2022'},
  //     {value: 24, date: '13 May 2022'},
  //     {value: 25, date: '14 May 2022'},
  //   ];
  //   const ptData3 = [
  //     {value: 21, date: '1 Apr 2022'},
  //     {value: 21, date: '2 Apr 2022'},
  //     {value: 21, date: '3 Apr 2022'},
  //     {value: 21, date: '4 Apr 2022'},
  //     {value: 21, date: '5 Apr 2022'},
  //     {value: 31, date: '6 Apr 2022'},
  //     {value: 41, date: '7 Apr 2022'},
  //     {value: 31, date: '8 Apr 2022'},
  //     {value: 32, date: '9 Apr 2022'},
  //     {value: 24, date: '10 Apr 2022'},
  //     {value: 28, date: '11 Apr 2022'},
  //     {value: 26, date: '12 Apr 2022'},
  //     {value: 24, date: '13 Apr 2022'},
  //     {value: 28, date: '14 Apr 2022'},
  //     {value: 28, date: '15 Apr 2022'},
  //     {value: 29, date: '16 Apr 2022'},
  //     {value: 37, date: '17 Apr 2022'},
  //     {value: 38, date: '18 Apr 2022'},
  //     {value: 39, date: '19 Apr 2022'},
  //     {value: 40, date: '20 Apr 2022'},
  //     {value: 48, date: '21 Apr 2022'},
  //     {value: 49, date: '22 Apr 2022'},
  //     {value: 46, date: '23 Apr 2022'},
  //     {value: 45, date: '24 Apr 2022'},
  //     {value: 49, date: '25 Apr 2022'},
  //     {value: 42, date: '26 Apr 2022'},
  //     {value: 40, date: '27 Apr 2022'},
  //     {value: 43, date: '28 Apr 2022'},
  //     {value: 41, date: '29 Apr 2022'},
  //     {value: 45, date: '30 Apr 2022'},
  //     {value: 54, date: '1 May 2022'},
  //     {value: 55, date: '2 May 2022'},
  //     {value: 58, date: '3 May 2022'},
  //     {value: 55, date: '4 May 2022'},
  //     {value: 51, date: '5 May 2022'},
  //     {value: 54, date: '6 May 2022'},
  //     {value: 53, date: '7 May 2022'},
  //     {value: 52, date: '8 May 2022'},
  //     {value: 50, date: '9 May 2022'},
  //     {value: 51, date: '10 May 2022'},
  //     {value: 52, date: '11 May 2022'},
  //     {value: 53, date: '12 May 2022'},
  //     {value: 54, date: '13 May 2022'},
  //     {value: 55, date: '14 May 2022'},
  //   ];

  const data1 = {
    data: ptData,
    color: 'red',
  };
  const data2 = {
    data: ptData2,
    color: 'green',
  };
  const data3 = {
    data: ptData3,
    color: 'blue',
  };

  const allArray = ptData.concat(ptData2).concat(ptData3);

  const dataSet = [data1, data2, data3];
  console.log(dataSet);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '##545A5F'}}>
      <View style={{backgroundColor: '#FFFFF'}}>
        <ChartComponent
          width={width}
          height={height / 4}
          data1={ptData}
            color1={ptData[0].color}
          data2={ptData2}
            color2={ptData2[0].color}
          data3={ptData3}
             color3={ptData3[0].color}
        />
            <TouchableOpacity
            style={{backgroundColor: 'red', padding: 10}}
            onPress={() => {
                console.log('data', setData(!data));
                }
            }>
            <Text>Click</Text>
        </TouchableOpacity>
        <ChartComponent width={width} height={height / 4} data1={data ? ptData2 : ptData3} />

        {/* <ChartComponent width={width} height={height/4}/>
        <ChartComponent width={width} height={height/4}/> */}
      </View>
    </SafeAreaView>
  );
};

export default GiftedChartScreen;

const styles = StyleSheet.create({});
