import { FontWeight, TextAnchor } from "react-native-responsive-linechart/lib/types";

export type XYValue = { x: number; y: number }

export type StringValue= { date: string }


export type ChartDataPoint = XYValue & { meta?: any }

export type ChartDataPointString = StringValue & { meta?: any }

export type Label = {
    color?: string
    fontSize?: number
    fontFamily?: string
    opacity?: number
    dy?: number
    dx?: number
    fontWeight?: FontWeight
    textAnchor?: TextAnchor
    rotation?: number
  }

  export type Shape = {
    color?: string
    width?: number
    height?: number
    dx?: number
    dy?: number
    rx?: number
    opacity?: number
    radius?: number
    border?: Stroke
  }
  
  export type Stroke = { color?: string; width?: number; opacity?: number; dashArray?: number[] }
