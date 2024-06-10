import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import data from './data'
import {LineChart} from 'react-native-chart-kit';
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
  ChartDataPoint,
  Tooltip,
} from 'react-native-responsive-linechart';
import {format} from 'd3';
// import {Tooltip} from './Tooltip';
import {CustomTooltip} from './CustomTooltip';

const ChartScreen = () => {
  const data = {
    fundProcessReturnTwo: [
      {
        date: '2023-05-30T00:00:00',
        priceReturn: 4.025293,
      },
      {
        date: '2023-05-31T00:00:00',
        priceReturn: 3.98669,
      },
      {
        date: '2023-06-01T00:00:00',
        priceReturn: 4.044388,
      },
      {
        date: '2023-06-02T00:00:00',
        priceReturn: 4.142301,
      },
      {
        date: '2023-06-05T00:00:00',
        priceReturn: 4.355214,
      },
      {
        date: '2023-06-06T00:00:00',
        priceReturn: 4.367973,
      },
      {
        date: '2023-06-07T00:00:00',
        priceReturn: 4.480882,
      },
      {
        date: '2023-06-08T00:00:00',
        priceReturn: 4.483018,
      },
      {
        date: '2023-06-09T00:00:00',
        priceReturn: 4.567904,
      },
      {
        date: '2023-06-12T00:00:00',
        priceReturn: 4.586907,
      },
      {
        date: '2023-06-13T00:00:00',
        priceReturn: 4.496698,
      },
      {
        date: '2023-06-14T00:00:00',
        priceReturn: 4.456347,
      },
      {
        date: '2023-06-15T00:00:00',
        priceReturn: 4.535375,
      },
      {
        date: '2023-06-16T00:00:00',
        priceReturn: 4.53736,
      },
      {
        date: '2023-06-19T00:00:00',
        priceReturn: 4.408208,
      },
      {
        date: '2023-06-20T00:00:00',
        priceReturn: 4.408058,
      },
      {
        date: '2023-06-21T00:00:00',
        priceReturn: 4.364452,
      },
      {
        date: '2023-06-22T00:00:00',
        priceReturn: 4.574118,
      },
      {
        date: '2023-06-23T00:00:00',
        priceReturn: 4.664043,
      },
      {
        date: '2023-06-26T00:00:00',
        priceReturn: 4.776669,
      },
      {
        date: '2023-06-27T00:00:00',
        priceReturn: 4.809627,
      },
      {
        date: '2023-07-03T00:00:00',
        priceReturn: 4.996504,
      },
      {
        date: '2023-07-04T00:00:00',
        priceReturn: 4.979548,
      },
      {
        date: '2023-07-05T00:00:00',
        priceReturn: 5.092074,
      },
      {
        date: '2023-07-06T00:00:00',
        priceReturn: 5.129321,
      },
      {
        date: '2023-07-07T00:00:00',
        priceReturn: 5.1584,
      },
      {
        date: '2023-07-10T00:00:00',
        priceReturn: 5.211678,
      },
      {
        date: '2023-07-11T00:00:00',
        priceReturn: 5.268737,
      },
      {
        date: '2023-07-12T00:00:00',
        priceReturn: 5.274844,
      },
      {
        date: '2023-07-13T00:00:00',
        priceReturn: 5.319939,
      },
      {
        date: '2023-07-14T00:00:00',
        priceReturn: 5.396807,
      },
      {
        date: '2023-07-17T00:00:00',
        priceReturn: 5.545884,
      },
      {
        date: '2023-07-18T00:00:00',
        priceReturn: 5.373007,
      },
      {
        date: '2023-07-19T00:00:00',
        priceReturn: 5.553064,
      },
      {
        date: '2023-07-20T00:00:00',
        priceReturn: 5.661907,
      },
      {
        date: '2023-07-21T00:00:00',
        priceReturn: 5.687057,
      },
      {
        date: '2023-07-24T00:00:00',
        priceReturn: 5.661392,
      },
      {
        date: '2023-07-25T00:00:00',
        priceReturn: 5.608314,
      },
      {
        date: '2023-07-26T00:00:00',
        priceReturn: 5.714374,
      },
      {
        date: '2023-07-27T00:00:00',
        priceReturn: 5.849533,
      },
      {
        date: '2023-07-28T00:00:00',
        priceReturn: 6.047063,
      },
      {
        date: '2023-07-31T00:00:00',
        priceReturn: 6.122508,
      },
      {
        date: '2023-08-01T00:00:00',
        priceReturn: 6.145664,
      },
      {
        date: '2023-08-02T00:00:00',
        priceReturn: 6.198468,
      },
      {
        date: '2023-08-03T00:00:00',
        priceReturn: 6.246847,
      },
      {
        date: '2023-08-04T00:00:00',
        priceReturn: 6.438684,
      },
      {
        date: '2023-08-07T00:00:00',
        priceReturn: 6.598039,
      },
      {
        date: '2023-08-08T00:00:00',
        priceReturn: 6.59797,
      },
      {
        date: '2023-08-09T00:00:00',
        priceReturn: 6.754832,
      },
      {
        date: '2023-08-10T00:00:00',
        priceReturn: 6.649044,
      },
      {
        date: '2023-08-11T00:00:00',
        priceReturn: 6.921798,
      },
      {
        date: '2023-08-14T00:00:00',
        priceReturn: 6.963202,
      },
      {
        date: '2023-08-15T00:00:00',
        priceReturn: 6.885401,
      },
      {
        date: '2023-08-16T00:00:00',
        priceReturn: 6.913361,
      },
      {
        date: '2023-08-17T00:00:00',
        priceReturn: 7.020858,
      },
      {
        date: '2023-08-18T00:00:00',
        priceReturn: 6.855101,
      },
      {
        date: '2023-08-21T00:00:00',
        priceReturn: 7.127072,
      },
      {
        date: '2023-08-22T00:00:00',
        priceReturn: 7.121941,
      },
      {
        date: '2023-08-23T00:00:00',
        priceReturn: 6.968039,
      },
      {
        date: '2023-08-24T00:00:00',
        priceReturn: 6.899432,
      },
      {
        date: '2023-08-25T00:00:00',
        priceReturn: 7.062341,
      },
      {
        date: '2023-08-28T00:00:00',
        priceReturn: 7.252741,
      },
      {
        date: '2023-08-29T00:00:00',
        priceReturn: 7.192953,
      },
      {
        date: '2023-08-31T00:00:00',
        priceReturn: 7.214474,
      },
      {
        date: '2023-09-01T00:00:00',
        priceReturn: 7.34014,
      },
      {
        date: '2023-09-04T00:00:00',
        priceReturn: 7.459892,
      },
      {
        date: '2023-09-05T00:00:00',
        priceReturn: 7.537893,
      },
      {
        date: '2023-09-06T00:00:00',
        priceReturn: 7.467711,
      },
      {
        date: '2023-09-07T00:00:00',
        priceReturn: 7.661552,
      },
      {
        date: '2023-09-08T00:00:00',
        priceReturn: 7.710559,
      },
      {
        date: '2023-09-11T00:00:00',
        priceReturn: 7.586475,
      },
      {
        date: '2023-09-12T00:00:00',
        priceReturn: 7.628678,
      },
      {
        date: '2023-09-13T00:00:00',
        priceReturn: 7.522651,
      },
      {
        date: '2023-09-14T00:00:00',
        priceReturn: 7.563851,
      },
      {
        date: '2023-09-15T00:00:00',
        priceReturn: 7.365668,
      },
      {
        date: '2023-09-18T00:00:00',
        priceReturn: 7.127868,
      },
      {
        date: '2023-09-19T00:00:00',
        priceReturn: 7.204563,
      },
      {
        date: '2023-09-20T00:00:00',
        priceReturn: 7.248944,
      },
      {
        date: '2023-09-21T00:00:00',
        priceReturn: 7.517318,
      },
      {
        date: '2023-09-22T00:00:00',
        priceReturn: 7.553642,
      },
      {
        date: '2023-09-25T00:00:00',
        priceReturn: 7.807589,
      },
      {
        date: '2023-09-26T00:00:00',
        priceReturn: 7.748008,
      },
      {
        date: '2023-09-27T00:00:00',
        priceReturn: 7.795011,
      },
      {
        date: '2023-09-28T00:00:00',
        priceReturn: 7.800055,
      },
      {
        date: '2023-09-29T00:00:00',
        priceReturn: 7.907768,
      },
      {
        date: '2023-10-02T00:00:00',
        priceReturn: 8.054967,
      },
      {
        date: '2023-10-03T00:00:00',
        priceReturn: 8.08856,
      },
      {
        date: '2023-10-04T00:00:00',
        priceReturn: 7.951754,
      },
      {
        date: '2023-10-05T00:00:00',
        priceReturn: 8.098701,
      },
      {
        date: '2023-10-06T00:00:00',
        priceReturn: 8.107677,
      },
      {
        date: '2023-10-09T00:00:00',
        priceReturn: 7.805193,
      },
      {
        date: '2023-10-10T00:00:00',
        priceReturn: 8.004172,
      },
      {
        date: '2023-10-11T00:00:00',
        priceReturn: 7.848945,
      },
      {
        date: '2023-10-12T00:00:00',
        priceReturn: 7.774984,
      },
      {
        date: '2023-10-13T00:00:00',
        priceReturn: 7.626743,
      },
      {
        date: '2023-10-16T00:00:00',
        priceReturn: 7.517138,
      },
      {
        date: '2023-10-17T00:00:00',
        priceReturn: 7.693731,
      },
      {
        date: '2023-10-18T00:00:00',
        priceReturn: 7.442403,
      },
      {
        date: '2023-10-19T00:00:00',
        priceReturn: 7.435076,
      },
      {
        date: '2023-10-20T00:00:00',
        priceReturn: 7.16857,
      },
      {
        date: '2023-10-23T00:00:00',
        priceReturn: 7.400379,
      },
      {
        date: '2023-10-24T00:00:00',
        priceReturn: 7.664526,
      },
      {
        date: '2023-10-25T00:00:00',
        priceReturn: 7.173501,
      },
      {
        date: '2023-10-26T00:00:00',
        priceReturn: 7.415948,
      },
      {
        date: '2023-10-27T00:00:00',
        priceReturn: 7.427679,
      },
      {
        date: '2023-10-30T00:00:00',
        priceReturn: 7.406713,
      },
      {
        date: '2023-10-31T00:00:00',
        priceReturn: 7.198921,
      },
      {
        date: '2023-11-01T00:00:00',
        priceReturn: 7.227618,
      },
      {
        date: '2023-11-02T00:00:00',
        priceReturn: 7.35506,
      },
      {
        date: '2023-11-03T00:00:00',
        priceReturn: 7.384647,
      },
      {
        date: '2023-11-06T00:00:00',
        priceReturn: 7.515515,
      },
      {
        date: '2023-11-07T00:00:00',
        priceReturn: 7.499202,
      },
      {
        date: '2023-11-08T00:00:00',
        priceReturn: 7.554742,
      },
      {
        date: '2023-11-09T00:00:00',
        priceReturn: 7.544533,
      },
      {
        date: '2023-11-10T00:00:00',
        priceReturn: 7.443271,
      },
      {
        date: '2023-11-13T00:00:00',
        priceReturn: 7.235744,
      },
      {
        date: '2023-11-14T00:00:00',
        priceReturn: 7.325999,
      },
      {
        date: '2023-11-15T00:00:00',
        priceReturn: 7.297771,
      },
      {
        date: '2023-11-16T00:00:00',
        priceReturn: 7.444278,
      },
      {
        date: '2023-11-17T00:00:00',
        priceReturn: 7.53772,
      },
      {
        date: '2023-11-20T00:00:00',
        priceReturn: 7.599688,
      },
      {
        date: '2023-11-21T00:00:00',
        priceReturn: 7.683009,
      },
      {
        date: '2023-11-22T00:00:00',
        priceReturn: 7.658215,
      },
      {
        date: '2023-11-23T00:00:00',
        priceReturn: 7.696723,
      },
      {
        date: '2023-11-24T00:00:00',
        priceReturn: 7.762083,
      },
      {
        date: '2023-11-27T00:00:00',
        priceReturn: 7.940714,
      },
      {
        date: '2023-11-28T00:00:00',
        priceReturn: 7.902828,
      },
      {
        date: '2023-11-29T00:00:00',
        priceReturn: 7.790351,
      },
      {
        date: '2023-11-30T00:00:00',
        priceReturn: 7.759601,
      },
      {
        date: '2023-12-01T00:00:00',
        priceReturn: 7.812569,
      },
      {
        date: '2023-12-04T00:00:00',
        priceReturn: 7.874218,
      },
      {
        date: '2023-12-05T00:00:00',
        priceReturn: 7.912293,
      },
      {
        date: '2023-12-06T00:00:00',
        priceReturn: 7.787995,
      },
      {
        date: '2023-12-07T00:00:00',
        priceReturn: 7.816782,
      },
      {
        date: '2023-12-08T00:00:00',
        priceReturn: 7.816556,
      },
      {
        date: '2023-12-11T00:00:00',
        priceReturn: 7.657206,
      },
      {
        date: '2023-12-12T00:00:00',
        priceReturn: 7.650964,
      },
      {
        date: '2023-12-13T00:00:00',
        priceReturn: 7.453902,
      },
      {
        date: '2023-12-14T00:00:00',
        priceReturn: 7.784892,
      },
      {
        date: '2023-12-15T00:00:00',
        priceReturn: 7.947165,
      },
      {
        date: '2023-12-18T00:00:00',
        priceReturn: 7.800558,
      },
      {
        date: '2023-12-19T00:00:00',
        priceReturn: 7.814382,
      },
      {
        date: '2023-12-20T00:00:00',
        priceReturn: 7.819875,
      },
      {
        date: '2023-12-21T00:00:00',
        priceReturn: 7.898539,
      },
      {
        date: '2023-12-22T00:00:00',
        priceReturn: 7.816597,
      },
      {
        date: '2023-12-25T00:00:00',
        priceReturn: 7.574725,
      },
      {
        date: '2023-12-26T00:00:00',
        priceReturn: 7.595884,
      },
      {
        date: '2023-12-27T00:00:00',
        priceReturn: 7.570891,
      },
      {
        date: '2023-12-28T00:00:00',
        priceReturn: 7.729857,
      },
      {
        date: '2023-12-29T00:00:00',
        priceReturn: 7.837214,
      },
      {
        date: '2024-01-02T00:00:00',
        priceReturn: 7.988702,
      },
      {
        date: '2024-01-03T00:00:00',
        priceReturn: 7.797346,
      },
      {
        date: '2024-01-04T00:00:00',
        priceReturn: 7.941061,
      },
      {
        date: '2024-01-05T00:00:00',
        priceReturn: 8.027392,
      },
      {
        date: '2024-01-08T00:00:00',
        priceReturn: 8.267359,
      },
      {
        date: '2024-01-09T00:00:00',
        priceReturn: 8.213324,
      },
      {
        date: '2024-01-10T00:00:00',
        priceReturn: 8.373608,
      },
      {
        date: '2024-01-11T00:00:00',
        priceReturn: 8.431959,
      },
      {
        date: '2024-01-12T00:00:00',
        priceReturn: 8.551819,
      },
      {
        date: '2024-01-15T00:00:00',
        priceReturn: 8.591398,
      },
      {
        date: '2024-01-16T00:00:00',
        priceReturn: 8.576572,
      },
      {
        date: '2024-01-17T00:00:00',
        priceReturn: 8.604714,
      },
      {
        date: '2024-01-18T00:00:00',
        priceReturn: 8.591176,
      },
      {
        date: '2024-01-19T00:00:00',
        priceReturn: 8.569673,
      },
      {
        date: '2024-01-22T00:00:00',
        priceReturn: 8.614235,
      },
      {
        date: '2024-01-23T00:00:00',
        priceReturn: 8.560968,
      },
      {
        date: '2024-01-24T00:00:00',
        priceReturn: 8.729497,
      },
      {
        date: '2024-01-25T00:00:00',
        priceReturn: 8.746863,
      },
      {
        date: '2024-01-26T00:00:00',
        priceReturn: 8.915531,
      },
      {
        date: '2024-01-29T00:00:00',
        priceReturn: 8.990187,
      },
      {
        date: '2024-01-30T00:00:00',
        priceReturn: 9.027345,
      },
      {
        date: '2024-01-31T00:00:00',
        priceReturn: 9.016628,
      },
      {
        date: '2024-02-01T00:00:00',
        priceReturn: 9.189676,
      },
      {
        date: '2024-02-02T00:00:00',
        priceReturn: 9.196333,
      },
      {
        date: '2024-02-05T00:00:00',
        priceReturn: 9.336256,
      },
      {
        date: '2024-02-06T00:00:00',
        priceReturn: 9.388904,
      },
      {
        date: '2024-02-07T00:00:00',
        priceReturn: 9.373936,
      },
      {
        date: '2024-02-08T00:00:00',
        priceReturn: 9.429728,
      },
      {
        date: '2024-02-09T00:00:00',
        priceReturn: 9.492025,
      },
      {
        date: '2024-02-12T00:00:00',
        priceReturn: 9.623896,
      },
      {
        date: '2024-02-13T00:00:00',
        priceReturn: 9.440344,
      },
      {
        date: '2024-02-14T00:00:00',
        priceReturn: 9.515688,
      },
      {
        date: '2024-02-15T00:00:00',
        priceReturn: 9.678049,
      },
      {
        date: '2024-02-16T00:00:00',
        priceReturn: 9.656377,
      },
      {
        date: '2024-02-19T00:00:00',
        priceReturn: 9.572832,
      },
      {
        date: '2024-02-20T00:00:00',
        priceReturn: 9.716291,
      },
      {
        date: '2024-02-21T00:00:00',
        priceReturn: 9.691976,
      },
      {
        date: '2024-02-22T00:00:00',
        priceReturn: 9.664835,
      },
      {
        date: '2024-02-23T00:00:00',
        priceReturn: 9.696695,
      },
      {
        date: '2024-02-26T00:00:00',
        priceReturn: 9.663144,
      },
      {
        date: '2024-02-27T00:00:00',
        priceReturn: 9.482261,
      },
      {
        date: '2024-02-28T00:00:00',
        priceReturn: 9.392726,
      },
      {
        date: '2024-02-29T00:00:00',
        priceReturn: 9.577114,
      },
      {
        date: '2024-03-01T00:00:00',
        priceReturn: 9.443942,
      },
      {
        date: '2024-03-04T00:00:00',
        priceReturn: 9.245202,
      },
      {
        date: '2024-03-05T00:00:00',
        priceReturn: 9.197305,
      },
      {
        date: '2024-03-06T00:00:00',
        priceReturn: 9.092524,
      },
      {
        date: '2024-03-07T00:00:00',
        priceReturn: 9.438721,
      },
      {
        date: '2024-03-08T00:00:00',
        priceReturn: 9.576979,
      },
      {
        date: '2024-03-11T00:00:00',
        priceReturn: 9.568985,
      },
      {
        date: '2024-03-12T00:00:00',
        priceReturn: 9.534527,
      },
      {
        date: '2024-03-13T00:00:00',
        priceReturn: 9.379028,
      },
      {
        date: '2024-03-14T00:00:00',
        priceReturn: 9.268469,
      },
      {
        date: '2024-03-15T00:00:00',
        priceReturn: 9.305836,
      },
      {
        date: '2024-03-18T00:00:00',
        priceReturn: 9.242132,
      },
      {
        date: '2024-03-19T00:00:00',
        priceReturn: 9.421245,
      },
      {
        date: '2024-03-20T00:00:00',
        priceReturn: 9.424088,
      },
      {
        date: '2024-03-21T00:00:00',
        priceReturn: 9.742464,
      },
      {
        date: '2024-03-22T00:00:00',
        priceReturn: 9.725961,
      },
      {
        date: '2024-03-25T00:00:00',
        priceReturn: 9.640311,
      },
      {
        date: '2024-03-26T00:00:00',
        priceReturn: 9.414823,
      },
      {
        date: '2024-03-27T00:00:00',
        priceReturn: 9.407946,
      },
      {
        date: '2024-03-28T00:00:00',
        priceReturn: 9.644261,
      },
      {
        date: '2024-03-29T00:00:00',
        priceReturn: 9.708257,
      },
      {
        date: '2024-04-01T00:00:00',
        priceReturn: 9.812565,
      },
      {
        date: '2024-04-02T00:00:00',
        priceReturn: 9.779485,
      },
      {
        date: '2024-04-03T00:00:00',
        priceReturn: 9.788439,
      },
      {
        date: '2024-04-04T00:00:00',
        priceReturn: 10.128477,
      },
      {
        date: '2024-04-05T00:00:00',
        priceReturn: 10.580729,
      },
      {
        date: '2024-04-08T00:00:00',
        priceReturn: 10.75436,
      },
      {
        date: '2024-04-09T00:00:00',
        priceReturn: 10.796198,
      },
      {
        date: '2024-04-15T00:00:00',
        priceReturn: 10.639198,
      },
      {
        date: '2024-04-16T00:00:00',
        priceReturn: 10.456688,
      },
      {
        date: '2024-04-17T00:00:00',
        priceReturn: 10.573355,
      },
      {
        date: '2024-04-18T00:00:00',
        priceReturn: 10.549236,
      },
      {
        date: '2024-04-19T00:00:00',
        priceReturn: 10.815037,
      },
      {
        date: '2024-04-22T00:00:00',
        priceReturn: 10.806675,
      },
      {
        date: '2024-04-24T00:00:00',
        priceReturn: 11.023958,
      },
      {
        date: '2024-04-25T00:00:00',
        priceReturn: 11.029396,
      },
      {
        date: '2024-04-26T00:00:00',
        priceReturn: 11.247793,
      },
      {
        date: '2024-04-29T00:00:00',
        priceReturn: 11.464326,
      },
      {
        date: '2024-04-30T00:00:00',
        priceReturn: 11.444176,
      },
      {
        date: '2024-05-02T00:00:00',
        priceReturn: 11.593165,
      },
      {
        date: '2024-05-03T00:00:00',
        priceReturn: 11.718511,
      },
      {
        date: '2024-05-06T00:00:00',
        priceReturn: 11.698638,
      },
      {
        date: '2024-05-07T00:00:00',
        priceReturn: 11.851398,
      },
      {
        date: '2024-05-08T00:00:00',
        priceReturn: 11.792888,
      },
      {
        date: '2024-05-09T00:00:00',
        priceReturn: 11.934448,
      },
      {
        date: '2024-05-10T00:00:00',
        priceReturn: 11.949573,
      },
      {
        date: '2024-05-13T00:00:00',
        priceReturn: 11.827143,
      },
      {
        date: '2024-05-14T00:00:00',
        priceReturn: 11.956977,
      },
      {
        date: '2024-05-15T00:00:00',
        priceReturn: 11.995975,
      },
      {
        date: '2024-05-16T00:00:00',
        priceReturn: 12.243513,
      },
      {
        date: '2024-05-17T00:00:00',
        priceReturn: 12.648787,
      },
      {
        date: '2024-05-20T00:00:00',
        priceReturn: 12.753261,
      },
      {
        date: '2024-05-21T00:00:00',
        priceReturn: 12.946622,
      },
      {
        date: '2024-05-22T00:00:00',
        priceReturn: 12.969529,
      },
      {
        date: '2024-05-23T00:00:00',
        priceReturn: 12.934091,
      },
      {
        date: '2024-05-24T00:00:00',
        priceReturn: 12.849226,
      },
      {
        date: '2024-05-27T00:00:00',
        priceReturn: 12.864262,
      },
      {
        date: '2024-05-28T00:00:00',
        priceReturn: 12.957055,
      },
      {
        date: '2024-05-29T00:00:00',
        priceReturn: 12.804662,
      },
    ],
    evenDate: [],
  };

  const data11 = {
    fundProcessReturnTwo: [
      {
        date: '2024-02-01T00:00:00',
        priceReturn: 9.189676,
      },
      {
        date: '2024-02-02T00:00:00',
        priceReturn: 9.196333,
      },
      {
        date: '2024-02-05T00:00:00',
        priceReturn: 9.336256,
      },
      {
        date: '2024-02-06T00:00:00',
        priceReturn: 9.388904,
      },
      {
        date: '2024-02-07T00:00:00',
        priceReturn: 9.373936,
      },
      {
        date: '2024-02-08T00:00:00',
        priceReturn: 9.429728,
      },
      {
        date: '2024-02-09T00:00:00',
        priceReturn: 9.492025,
      },
      {
        date: '2024-02-12T00:00:00',
        priceReturn: 9.623896,
      },
      {
        date: '2024-02-13T00:00:00',
        priceReturn: 9.440344,
      },
      {
        date: '2024-02-14T00:00:00',
        priceReturn: 9.515688,
      },
      {
        date: '2024-02-15T00:00:00',
        priceReturn: 9.678049,
      },
      {
        date: '2024-02-16T00:00:00',
        priceReturn: 9.656377,
      },
      {
        date: '2024-02-19T00:00:00',
        priceReturn: 9.572832,
      },
      {
        date: '2024-02-20T00:00:00',
        priceReturn: 9.716291,
      },
      {
        date: '2024-02-21T00:00:00',
        priceReturn: 9.691976,
      },
      {
        date: '2024-02-22T00:00:00',
        priceReturn: 9.664835,
      },
      {
        date: '2024-02-23T00:00:00',
        priceReturn: 9.696695,
      },
      {
        date: '2024-02-26T00:00:00',
        priceReturn: 9.663144,
      },
      {
        date: '2024-02-27T00:00:00',
        priceReturn: 9.482261,
      },
      {
        date: '2024-02-28T00:00:00',
        priceReturn: 9.392726,
      },
      {
        date: '2024-02-29T00:00:00',
        priceReturn: 9.577114,
      },
      {
        date: '2024-03-01T00:00:00',
        priceReturn: 9.443942,
      },
      {
        date: '2024-03-04T00:00:00',
        priceReturn: 9.245202,
      },
      {
        date: '2024-03-05T00:00:00',
        priceReturn: 9.197305,
      },
      {
        date: '2024-03-06T00:00:00',
        priceReturn: 9.092524,
      },
      {
        date: '2024-03-07T00:00:00',
        priceReturn: 9.438721,
      },
      {
        date: '2024-03-08T00:00:00',
        priceReturn: 9.576979,
      },
      {
        date: '2024-03-11T00:00:00',
        priceReturn: 9.568985,
      },
      {
        date: '2024-03-12T00:00:00',
        priceReturn: 9.534527,
      },
      {
        date: '2024-03-13T00:00:00',
        priceReturn: 9.379028,
      },
      {
        date: '2024-03-14T00:00:00',
        priceReturn: 9.268469,
      },
      {
        date: '2024-03-15T00:00:00',
        priceReturn: 9.305836,
      },
      {
        date: '2024-03-18T00:00:00',
        priceReturn: 9.242132,
      },
      {
        date: '2024-03-19T00:00:00',
        priceReturn: 9.421245,
      },
      {
        date: '2024-03-20T00:00:00',
        priceReturn: 9.424088,
      },
      {
        date: '2024-03-21T00:00:00',
        priceReturn: 9.742464,
      },
      {
        date: '2024-03-22T00:00:00',
        priceReturn: 9.725961,
      },
      {
        date: '2024-03-25T00:00:00',
        priceReturn: 9.640311,
      },
      {
        date: '2024-03-26T00:00:00',
        priceReturn: 9.414823,
      },
      {
        date: '2024-03-27T00:00:00',
        priceReturn: 9.407946,
      },
      {
        date: '2024-03-28T00:00:00',
        priceReturn: 9.644261,
      },
      {
        date: '2024-03-29T00:00:00',
        priceReturn: 9.708257,
      },
      {
        date: '2024-04-01T00:00:00',
        priceReturn: 9.812565,
      },
      {
        date: '2024-04-02T00:00:00',
        priceReturn: 9.779485,
      },
      {
        date: '2024-04-03T00:00:00',
        priceReturn: 9.788439,
      },
      {
        date: '2024-04-04T00:00:00',
        priceReturn: 10.128477,
      },
      {
        date: '2024-04-05T00:00:00',
        priceReturn: 10.580729,
      },
      {
        date: '2024-04-08T00:00:00',
        priceReturn: 10.75436,
      },
      {
        date: '2024-04-09T00:00:00',
        priceReturn: 10.796198,
      },
      {
        date: '2024-04-15T00:00:00',
        priceReturn: 10.639198,
      },
      {
        date: '2024-04-16T00:00:00',
        priceReturn: 10.456688,
      },
      {
        date: '2024-04-17T00:00:00',
        priceReturn: 10.573355,
      },
      {
        date: '2024-04-18T00:00:00',
        priceReturn: 10.549236,
      },
      {
        date: '2024-04-19T00:00:00',
        priceReturn: 10.815037,
      },
      {
        date: '2024-04-22T00:00:00',
        priceReturn: 10.806675,
      },
      {
        date: '2024-04-24T00:00:00',
        priceReturn: 11.023958,
      },
      {
        date: '2024-04-25T00:00:00',
        priceReturn: 11.029396,
      },
      {
        date: '2024-04-26T00:00:00',
        priceReturn: 11.247793,
      },
      {
        date: '2024-04-29T00:00:00',
        priceReturn: 11.464326,
      },
      {
        date: '2024-04-30T00:00:00',
        priceReturn: 11.444176,
      },
      {
        date: '2024-05-02T00:00:00',
        priceReturn: 11.593165,
      },
      {
        date: '2024-05-03T00:00:00',
        priceReturn: 11.718511,
      },
      {
        date: '2024-05-06T00:00:00',
        priceReturn: 11.698638,
      },
      {
        date: '2024-05-07T00:00:00',
        priceReturn: 11.851398,
      },
      {
        date: '2024-05-08T00:00:00',
        priceReturn: 11.792888,
      },
      {
        date: '2024-05-09T00:00:00',
        priceReturn: 11.934448,
      },
      {
        date: '2024-05-10T00:00:00',
        priceReturn: 11.949573,
      },
      {
        date: '2024-05-13T00:00:00',
        priceReturn: 11.827143,
      },
      {
        date: '2024-05-14T00:00:00',
        priceReturn: 11.956977,
      },
      {
        date: '2024-05-15T00:00:00',
        priceReturn: 11.995975,
      },
      {
        date: '2024-05-16T00:00:00',
        priceReturn: 12.243513,
      },
      {
        date: '2024-05-17T00:00:00',
        priceReturn: 12.648787,
      },
      {
        date: '2024-05-20T00:00:00',
        priceReturn: 12.753261,
      },
      {
        date: '2024-05-21T00:00:00',
        priceReturn: 12.946622,
      },
      {
        date: '2024-05-22T00:00:00',
        priceReturn: 12.969529,
      },
      {
        date: '2024-05-23T00:00:00',
        priceReturn: 12.934091,
      },
      {
        date: '2024-05-24T00:00:00',
        priceReturn: 12.849226,
      },
      {
        date: '2024-05-27T00:00:00',
        priceReturn: 12.864262,
      },
      {
        date: '2024-05-28T00:00:00',
        priceReturn: 12.957055,
      },
      {
        date: '2024-05-29T00:00:00',
        priceReturn: 12.804662,
      },
    ],
    evenDate: [],
  };
  const data22 = {
    fundProcessReturnTwo: [
      {
        date: '2024-02-01T00:00:00',
        priceReturn: 19.189676,
      },
      {
        date: '2024-02-02T00:00:00',
        priceReturn: 19.196333,
      },
      {
        date: '2024-02-05T00:00:00',
        priceReturn: 19.336256,
      },
      {
        date: '2024-02-06T00:00:00',
        priceReturn: 19.388904,
      },
      {
        date: '2024-02-07T00:00:00',
        priceReturn: 19.373936,
      },
      {
        date: '2024-02-08T00:00:00',
        priceReturn: 19.429728,
      },
      {
        date: '2024-02-09T00:00:00',
        priceReturn: 19.492025,
      },
      {
        date: '2024-02-12T00:00:00',
        priceReturn: 19.623896,
      },
      {
        date: '2024-02-13T00:00:00',
        priceReturn: 19.440344,
      },
      {
        date: '2024-02-14T00:00:00',
        priceReturn: 19.515688,
      },
      {
        date: '2024-02-15T00:00:00',
        priceReturn: 19.678049,
      },
      {
        date: '2024-02-16T00:00:00',
        priceReturn: 19.656377,
      },
      {
        date: '2024-02-19T00:00:00',
        priceReturn: 19.572832,
      },
      {
        date: '2024-02-20T00:00:00',
        priceReturn: 19.716291,
      },
      {
        date: '2024-02-21T00:00:00',
        priceReturn: 19.691976,
      },
      {
        date: '2024-02-22T00:00:00',
        priceReturn: 19.664835,
      },
      {
        date: '2024-02-23T00:00:00',
        priceReturn: 19.696695,
      },
      {
        date: '2024-02-26T00:00:00',
        priceReturn: 19.663144,
      },
      {
        date: '2024-02-27T00:00:00',
        priceReturn: 19.482261,
      },
      {
        date: '2024-02-28T00:00:00',
        priceReturn: 19.392726,
      },
      {
        date: '2024-02-29T00:00:00',
        priceReturn: 19.577114,
      },
      {
        date: '2024-03-01T00:00:00',
        priceReturn: 19.443942,
      },
      {
        date: '2024-03-04T00:00:00',
        priceReturn: 19.245202,
      },
      {
        date: '2024-03-05T00:00:00',
        priceReturn: 19.197305,
      },
      {
        date: '2024-03-06T00:00:00',
        priceReturn: 19.092524,
      },
      {
        date: '2024-03-07T00:00:00',
        priceReturn: 19.438721,
      },
      {
        date: '2024-03-08T00:00:00',
        priceReturn: 19.576979,
      },
      {
        date: '2024-03-11T00:00:00',
        priceReturn: 19.568985,
      },
      {
        date: '2024-03-12T00:00:00',
        priceReturn: 19.534527,
      },
      {
        date: '2024-03-13T00:00:00',
        priceReturn: 19.379028,
      },
      {
        date: '2024-03-14T00:00:00',
        priceReturn: 19.268469,
      },
      {
        date: '2024-03-15T00:00:00',
        priceReturn: 19.305836,
      },
      {
        date: '2024-03-18T00:00:00',
        priceReturn: 19.242132,
      },
      {
        date: '2024-03-19T00:00:00',
        priceReturn: 19.421245,
      },
      {
        date: '2024-03-20T00:00:00',
        priceReturn: 19.424088,
      },
      {
        date: '2024-03-21T00:00:00',
        priceReturn: 19.742464,
      },
      {
        date: '2024-03-22T00:00:00',
        priceReturn: 19.725961,
      },
      {
        date: '2024-03-25T00:00:00',
        priceReturn: 19.640311,
      },
      {
        date: '2024-03-26T00:00:00',
        priceReturn: 19.414823,
      },
      {
        date: '2024-03-27T00:00:00',
        priceReturn: 19.407946,
      },
      {
        date: '2024-03-28T00:00:00',
        priceReturn: 19.644261,
      },
      {
        date: '2024-03-29T00:00:00',
        priceReturn: 19.708257,
      },
      {
        date: '2024-04-01T00:00:00',
        priceReturn: 19.812565,
      },
      {
        date: '2024-04-02T00:00:00',
        priceReturn: 19.779485,
      },
      {
        date: '2024-04-03T00:00:00',
        priceReturn: 19.788439,
      },
      {
        date: '2024-04-04T00:00:00',
        priceReturn: 20.128477,
      },
      {
        date: '2024-04-05T00:00:00',
        priceReturn: 20.580729,
      },
      {
        date: '2024-04-08T00:00:00',
        priceReturn: 20.75436,
      },
      {
        date: '2024-04-09T00:00:00',
        priceReturn: 20.796198,
      },
      {
        date: '2024-04-15T00:00:00',
        priceReturn: 20.639198,
      },
      {
        date: '2024-04-16T00:00:00',
        priceReturn: 20.456688,
      },
      {
        date: '2024-04-17T00:00:00',
        priceReturn: 20.573355,
      },
      {
        date: '2024-04-18T00:00:00',
        priceReturn: 20.549236,
      },
      {
        date: '2024-04-19T00:00:00',
        priceReturn: 20.815037,
      },
      {
        date: '2024-04-22T00:00:00',
        priceReturn: 20.806675,
      },
      {
        date: '2024-04-24T00:00:00',
        priceReturn: 21.023958,
      },
      {
        date: '2024-04-25T00:00:00',
        priceReturn: 21.029396,
      },
      {
        date: '2024-04-26T00:00:00',
        priceReturn: 21.247793,
      },
      {
        date: '2024-04-29T00:00:00',
        priceReturn: 21.464326,
      },
      {
        date: '2024-04-30T00:00:00',
        priceReturn: 21.444176,
      },
      {
        date: '2024-05-02T00:00:00',
        priceReturn: 21.593165,
      },
      {
        date: '2024-05-03T00:00:00',
        priceReturn: 21.718511,
      },
      {
        date: '2024-05-06T00:00:00',
        priceReturn: 21.698638,
      },
      {
        date: '2024-05-07T00:00:00',
        priceReturn: 21.851398,
      },
      {
        date: '2024-05-08T00:00:00',
        priceReturn: 21.792888,
      },
      {
        date: '2024-05-09T00:00:00',
        priceReturn: 21.934448,
      },
      {
        date: '2024-05-10T00:00:00',
        priceReturn: 21.949573,
      },
      {
        date: '2024-05-13T00:00:00',
        priceReturn: 21.827143,
      },
      {
        date: '2024-05-14T00:00:00',
        priceReturn: 21.956977,
      },
      {
        date: '2024-05-15T00:00:00',
        priceReturn: 21.995975,
      },
      {
        date: '2024-05-16T00:00:00',
        priceReturn: 22.243513,
      },
      {
        date: '2024-05-17T00:00:00',
        priceReturn: 22.648787,
      },
      {
        date: '2024-05-20T00:00:00',
        priceReturn: 22.753261,
      },
      {
        date: '2024-05-21T00:00:00',
        priceReturn: 22.946622,
      },
      {
        date: '2024-05-22T00:00:00',
        priceReturn: 22.969529,
      },
      {
        date: '2024-05-23T00:00:00',
        priceReturn: 22.934091,
      },
      {
        date: '2024-05-24T00:00:00',
        priceReturn: 22.849226,
      },
      {
        date: '2024-05-27T00:00:00',
        priceReturn: 22.864262,
      },
      {
        date: '2024-05-28T00:00:00',
        priceReturn: 22.957055,
      },
      {
        date: '2024-05-29T00:00:00',
        priceReturn: 22.804662,
      },
    ],
    evenDate: [],
  };

  const config = {
    line: {
      visible: true,
      strokeWidth: 1,
      strokeColor: '#54a0ff',
    },
    area: {
      visible: false,
    },
    tooltip: {
      visible: true,
      labelFontSize: 10,
    },
    grid: {
      stepSize: 10000,
    },
    yAxis: {
      labelColor: '#54a0ff',
    },
    insetY: 10,
    insetX: 10,
  };

  const data1 = data.fundProcessReturnTwo.map((item, index) => {
    let date = new Date(item.date);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
    return {x: index, y: item.priceReturn, date: formattedDate, date2: item.date};
  });
  const data2 = data22.fundProcessReturnTwo.map((item, index) => {
    let date = new Date(item.date);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
    return {x: index, y: item.priceReturn, date: formattedDate, date2: item.date};
  });

//   console.log(data2[0].date);

  const DateTickValues = data2.map(item => item.date2);
  console.log('date', DateTickValues);

  return (
    <SafeAreaView style={{backgroundColor: 'lightgray', flex: 1}}>
      {/* <Text>Chart{data.fundProcessReturnTwo[1].priceReturn}</Text> */}

      {/* <LineChart
  data={{
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2,
      },
    ],
  }}
  width={Dimensions.get('window').width - 16}
  height={220}
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
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
/> */}

      <View style={{width: '100%', height: '40%'}}>
        <Chart
          style={{flex: 1, borderRadius: 4, margin: 20}}
          // data={data1}
          config={config}
          padding={{left: 40, bottom: 20, right: 20, top: 20}}
          xDomain={{min: 0, max: data1.length}}
          yDomain={{min: 0, max: 40}}
          // xDomain={{ min: -2, max: 10 }}
          // yDomain={{ min: -2, max: 20 }}
          tooltipComponent={
            <Tooltip theme={{formatter: ({y}) => y.toFixed(3)}} />
          }>
          {/* <VerticalAxis includeOriginTick tickValues={[0, 4, 8, 12, 16, 20]} /> */}
          {/* <HorizontalAxis theme={{stringLabels: {formatter: (v) => v}}} tickCount={2} stringTickValues={DateTickValues}/> */}
          {/* <Area /> */}

          {/* <Line
        data={data2}
        //   theme={{stroke: {color: '#1877F2', width: 2},}}
        theme={{ stroke: { color: '#85929E', width: 1 }, scatter: {  selected: { color: 'darkgreen', dx: 0, dy: 1, width:4,height:4 } } }}


          tooltipComponent={
            <CustomTooltip
              theme={{
                formatter: ({y}) => y.toFixed(3),
                formatterX: ({x}) => x.toString(),
                formatterXString: ({date}) => date,
                lineName(value) {
                  return `Line1`;
                },
                label: {    color: 'white',
                fontSize: 12,
                fontWeight: 700,
                opacity: 1,
                dx: 0,
                dy: 16.5,
            },
            shape: {
                width: 30,
                height: 20,
                dx: 0,
                dy: 20,
                rx: 4,
                color: 'black',
              },
            
                
              }}
            />
          }
        />
 <Area 
    theme={{ gradient: { from: { color: '#44bd32' }, to: { color: '#44bd32', opacity: 0.2 } }  }} 
    smoothing="bezier"
    data={data2}
  /> */}

          <Area
            theme={{
              gradient: {
                from: {color: '#0087FD'},
                to: {color: '#FFFFFF', opacity: 0.1},
              },
            }}
            smoothing="cubic-spline"
            data={data1}
          />
          <Line
            data={data1}
            theme={{
              stroke: {color: '#0087FD', width: 1},
              scatter: {
                selected: {color: 'red', dx: 0, dy: 0, width: 2, height: 2},
              },
             

            }}
            smoothing="cubic-spline"
            tooltipComponent={
              <CustomTooltip
                theme={{
                  formatter: ({y}) => y.toFixed(3),
                  formatterX: ({x}) => x.toString(),
                  formatterXString: ({date}) => date,
                  lineName(value) {
                    return `Line2`;
                  },
                }}
              />
            }
          />
          {/* <Area 
    theme={{ gradient: { from : { color: '#1abc9c', opacity: 0.4 }, to : { color: '#1abc9c' , opacity: 0.4 } } }} 
    smoothing="cubic-spline"
    data={data2}
  /> */}
          {/* 
  <Line theme={{ stroke: { color:ƒ 'yellow', width: 2 } }} tooltipComponent={<CustomToolTip tooltipData={({ y }) => y.toFixed(10)} />} /> */}
          <HorizontalAxis
            theme={{labels: {formatterString: ({v}) => v.toString()}}}
            // stringTickValues={DateTickValues}
            tickCount={4}
            includeOriginTick={true}
            stringTickValues={DateTickValues}
          />
        </Chart>
      </View>
    </SafeAreaView>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({});
