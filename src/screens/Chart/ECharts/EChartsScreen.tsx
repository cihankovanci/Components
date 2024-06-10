import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EChartComponent, {data} from '../../../components/Chart/EChartComponent';
import PriceData from '../../Wallet/priceData.json';
import {area, color} from 'd3';
const EChartsScreen = () => {
  console.log(PriceData.fundProcessReturnTwo[0]);
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

  const date1 = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ];

  const dates = PriceData.fundProcessReturnTwo.map(item => {
    const date = new Date(item.date);
    const formattedDate = `${date.getDate()} ${ayIsmi(
      date.getMonth(),
    )} ${date.getFullYear()}`;
    return formattedDate;
  });

  function ayIsmi(ay) {
    const aylar = [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
    ];
    return aylar[ay];
  }

  const dataa = {
    name: 'IHK',
    data: [0],
    type: 'line',
    smooth: true,
    color: 'red',
    areaStyle: {
      color: '#ff0000',
      
    },
    symbol: 'circle',
    symbolSize: 4,
    emphasis: {
      focus: 'series',
    },
    animationDelay: function (idx: number) {
      return idx * 100;
    },
    animationEasing: 'exponentialIn',
    animationDelayUpdate: function (idx: number) {
      return idx * 50;
    },
  };

  const dataa2 = {
    name: 'Line 2',
    data: [0],
    type: 'line',
    smooth: true,
    color: 'yellow',
    areaStyle: {
      color: '#ffff00',
    },
    symbol: 'circle',
    symbolSize: 4,
    emphasis: {
      focus: 'series',
    },
    animationDelay: function (idx: number) {
      return idx * 100;
    },
    animationEasing: 'exponentialIn',
    animationDelayUpdate: function (idx: number) {
      return idx * 50;
    },
  };

  const dataBar = {
    name: 'bar1',
    data: [0],
    type: 'bar',
    color: 'red',
  };

  const dataBar2 = {
    name: 'bar2',
    data: [0],
    type: 'line',
    color: 'red',
  };

  // data kısmına yeni tarihleri ekle
  const datas = PriceData.fundProcessReturnTwo.map(item => {
    return item.priceReturn;
  });

  const datas2 = PriceData.fundProcessReturnTwo.map(item => {
    return item.priceReturn * 1.7;
  });

  dataa.data = [...dataa.data, ...datas];

  dataa2.data = [...dataa2.data, ...datas2];

  // dataBar.data = [...dataBar.data, ...datas];

  // console.log(dataa)

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      {/* <View style={{backgroundColor:'#f9f9f9'}}> */}
      <View style={{height:'100%', }}>
      <EChartComponent data={[dataa, dataa2]} date={dates} />
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default EChartsScreen;

const styles = StyleSheet.create({});
