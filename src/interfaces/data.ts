interface SeriesData {
  time: number;
  value: number;
}

interface ChartData {
  series: SeriesData[];
  priceChangePercentage: number;
  minValue: number;
  maxValue: number;
}

interface JsonData {
  [key: string]: ChartData;
}

interface ResultData {
  json: {
    [key: string]: ChartData;
  };
}

export interface ApiResponse {
  result: {
    data: {
      json: JsonData;
    };
  };
}

// Usage example:
//   const exampleData: ApiResponse = {
//     result: {
//       data: {
//         json: {
//           "untrn": {
//             series: [
//               { time: 1708489858, value: 1.63 },
//               // ... rest of the series data
//             ],
//             priceChangePercentage: 0.06748466257668718,
//             minValue: 1.49,
//             maxValue: 1.91,
//           },
//           "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9": {
//             series: [
//               { time: 1708489858, value: 10.19 },
//               // ... rest of the series data
//             ],
//             priceChangePercentage: 0.10009813542688925,
//             minValue: 9.75,
//             maxValue: 11.43,
//           },
//           // ... rest of the chart data
//         },
//       },
//     },
//   };
