import type { SkPath } from "@shopify/react-native-skia";

import data from "./data.json";
import dataa from "./datacopy.json"
import priceData from './priceData.json'
import { curveLines } from "./Math";

export const PADDING = 16;

export const COLORS = ["#F69D69", "#FFC37D", "#61E0A1", "#31CBD1"];

interface Amount {
  amount: string;
  currency: string;
  scale: string;
}

interface PercentChange {
  hour: number;
  day: number;
  week: number;
  month: number;
  year: number;
}

interface LatestPrice {
  amount: Amount;
  timestamp: string;
  percent_change: PercentChange;
}

type PriceList = [string, number][];

interface DataPoints {
  percent_change: number;
  prices: PriceList;
}

interface Prices {
  latest: string;
  latest_price: LatestPrice;
  hour: DataPoints;
  day: DataPoints;
  week: DataPoints;
  month: DataPoints;
  year: DataPoints;
  all: DataPoints;
}

interface FundPrice {
  date: string;
  priceReturn: number;
}

interface FundPrices {
  fundProcessReturnTwo: [FundPrice];
  evenDate: [string, number];
}

interface Amount {
  amount: string;
  currency: string;
  scale: string;
}

interface Price {
  amount: Amount;
  timestamp: string;
  percent_change: {
      hour: number;
      day: number;
      week: number;
      month: number;
      year: number;
  };
}

interface Pricess {
  latest: string;
  latest_price: Price;
  hour: {
      percent_change: number;
      prices: [string, number][];
  };
  day: {
      percent_change: number;
      prices: [string, number][];
  };
  week: {
      percent_change: number;
      prices: [string, number][];
  };
  month: {
      percent_change: number;
      prices: [string, number][];
  };
  year: {
      percent_change: number;
      prices: [string, number][];
  };
  all: {
      percent_change: number;
      prices: [string, number][];
  };
}

interface Data {
  base: string;
  base_id: string;
  unit_price_scale: number;
  currency: string;
  prices: Prices;
}

interface Root {
  data: Data;
}

const rawData = [
  { date: "2023-05-30T00:00:00", priceReturn: 4.025293 },
  { date: "2023-05-31T00:00:00", priceReturn: 3.98669 },
  { date: "2023-06-01T00:00:00", priceReturn: 4.044388 },
  { date: "2023-06-02T00:00:00", priceReturn: 4.142301 },
  { date: "2023-06-05T00:00:00", priceReturn: 4.355214 },
  { date: "2023-06-06T00:00:00", priceReturn: 4.367973 },
  { date: "2023-06-07T00:00:00", priceReturn: 4.480882 },
  { date: "2023-06-08T00:00:00", priceReturn: 4.483018 }
];

const convertToTimestamp = (dateStr: string): number => {
  return new Date(dateStr).getTime(); // Convert to seconds
};

const formattedPrices = priceData.fundProcessReturnTwo.map(item => [item.priceReturn.toString(), convertToTimestamp(item.date)] as [string, number]);

const filterDataByDateRange = (data: typeof priceData.fundProcessReturnTwo, days: number): typeof priceData.fundProcessReturnTwo => {
  const now = new Date().getTime();
  const pastDate = now - days * 24 * 60 * 60 * 1000;
  console.log('pastDate', pastDate, days* 24 * 60 * 60 * 1000)
  console.log('passDate', now, days* 24 * 60 * 60 * 1000)
  return data.filter(item => convertToTimestamp(item.date) >= pastDate);
};

const formatPrices = (data: typeof priceData.fundProcessReturnTwo): [string, number][] => {
  return data.map(item => [item.priceReturn.toString(), convertToTimestamp(item.date)] as [string, number]);
};
console.log('rawData', formatPrices(filterDataByDateRange(priceData.fundProcessReturnTwo, 30)))

const getFormattedPrices = () => {
  const oneDayData = filterDataByDateRange(priceData.fundProcessReturnTwo, 2);
  const oneMonthData = filterDataByDateRange(priceData.fundProcessReturnTwo, 30);
  const oneYearData = filterDataByDateRange(priceData.fundProcessReturnTwo, 365);
  const allData = rawData;
  console.log('oneDayData', oneDayData)
  return {
    oneDay: formatPrices(oneDayData),
    oneMonth: formatPrices(oneMonthData),
    oneYear: formatPrices(oneYearData),
    all: formatPrices(allData),
  };
};
 const formattedPricesByTime = getFormattedPrices();
//  console.log('formattedPricesByTime',priceData.fundProcessReturnTwo)

const formattedPriceAsTime = priceData.fundProcessReturnTwo

console.log('cihannn',formattedPricesByTime.oneMonth)
// console.log('formattedPrices', formattedPrices)
const result: Root = {
  data: {
      base: "BTC",
      base_id: "5b71fc48-3dd3-540c-809b-f8c94d0e68b5",
      unit_price_scale: 2,
      currency: "CHF",
      prices: {
          latest: "10404.19502652",
          latest_price: {
              amount: {
                  amount: "10404.19502652",
                  currency: "CHF",
                  scale: "2"
              },
              timestamp: "2020-09-03T07:54:24+00:00",
              percent_change: {
                  hour: 0.008619466515323599,
                  day: -0.036829332796034134,
                  week: -0.006295281193811376,
                  month: 0.019727500038499168,
                  year: -0.006590892810039769
              }
          },
          hour: {
              percent_change: 0.008619466515323599,
              prices: formattedPricesByTime.oneMonth
          },
          day: {
              percent_change: 0.008619466515323599,
              prices: formattedPricesByTime.oneMonth
          },
          week: {
              percent_change: 0.008619466515323599,
              prices: formattedPricesByTime.oneDay
          },
          month: {
              percent_change: 0.008619466515323599,
              prices: formattedPricesByTime.oneMonth
          },
          year: {
              percent_change: 0.008619466515323599,
              prices: formattedPricesByTime.oneYear
          },
          all: {
              percent_change: 0.008619466515323599,
              prices: formattedPricesByTime.all
          }
      }
  }
};

console.log('first', )
// console.log('formattedPrices', formattedPrices.oneDay)

// console.log('JSON BABBA',JSON.stringify(result, null, 2));


const values = data.data.prices as Prices;
const values2 = dataa.dataa.prices as Prices;
const values3 = priceData.fundProcessReturnTwo as [FundPrice];
const values4 = result.data.prices as Prices;
//  console.log('value34', values)
//   console.log('value35', values4)
const POINTS = 250;

  // console.log('mahmut bilo',values4.all.prices[0][0])
const buildGraph = (
  datapoints: DataPoints,
  label: string,
  WIDTH: number,
  HEIGHT: number
) => {
  const AJUSTED_SIZE = HEIGHT - PADDING * 2;
  const priceList = datapoints.prices.slice(0, POINTS);
 
  const formattedValues = priceList
  .map((price) => [parseFloat(price[0]), price[1]] as [number, number])
    // .reverse();
  const prices = formattedValues.map((value) => value[0]).sort((a, b) => b-a);
  const dates = formattedValues.map((value) => value[1]).sort((a, b) => b-a);
  //  console.log(datapoints.prices.length)
  const minDate = Math.min(...dates);
  const maxDate = Math.max(...dates);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  console.log( 'minDate', new Date(minDate), 'maxDate', new Date(maxDate), 'minPrice', minPrice, 'maxPrice', maxPrice)

  const points = formattedValues.map(([price, date]) => {
    const x = ((date - minDate) / (maxDate - minDate)) * WIDTH;
    const y = ((price - minPrice) / (maxPrice - minPrice)) * AJUSTED_SIZE;
    return { x, y };
  });



  points.push({ x: WIDTH + 10, y: points[points.length - 1].y });

  const path = curveLines(points, 0.1, "complex");


  return {
    label,
    minPrice,
    maxPrice,
    percentChange: datapoints.percent_change,
    path,
    prices,
    dates
  };
};

export interface Graph {
  label: string;
  value: number;
  data: {
    label: string;
    minPrice: number;
    maxPrice: number;
    percentChange: number;
    path: SkPath;
    prices: number[];
    dates: number[];
  };
}

export type Graphs = Graph[];

export const getGraph = (width: number, height: number) => [
  {
    label: "1H",
    value: 0,
    data: buildGraph(values4.hour, "Last Hour", width, height),
  },
  {
    label: "1D",
    value: 1,
    data: buildGraph(values4.day, "Today", width, height),
  },
  {
    label: "1M",
    value: 2,
    data: buildGraph(values4.month, "Last Month", width, height),
  },
  {
    label: "1Y",
    value: 3,
    data: buildGraph(values4.year, "This Year", width, height),
  },
  {
    label: "All",
    value: 4,
    data: buildGraph(values4.all, "All time", width, height),
  },
];

export const getGraph2 = (width: number, height: number) => [
  {
    label: "1H",
    value: 0,
    data: buildGraph(values2.hour, "Last Hour", width, height),
  },
  {
    label: "1D",
    value: 1,
    data: buildGraph(values2.day, "Today", width, height),
  },
  {
    label: "1M",
    value: 2,
    data: buildGraph(values2.month, "Last Month", width, height),
  },
  {
    label: "1Y",
    value: 3,
    data: buildGraph(values2.year, "This Year", width, height),
  },
  {
    label: "All",
    value: 4,
    data: buildGraph(values2.all, "All time", width, height),
  },
];

export const getGraph4 = (width: number, height: number) => [
  {
    label: "1H",
    value: 0,
    data: buildGraph(values4.hour, "Last Hour", width, height),
  },
  {
    label: "1D",
    value: 1,
    data: buildGraph(values4.day, "Today", width, height),
  },
  {
    label: "1M",
    value: 2,
    data: buildGraph(values4.month, "Last Month", width, height),
  },
  {
    label: "1Y",
    value: 3,
    data: buildGraph(values4.year, "This Year", width, height),
  },
  {
    label: "All",
    value: 4,
    data: buildGraph(values4.all, "All time", width, height),
  },
];



export type GraphIndex = 0 | 1 | 2 | 3 | 4;