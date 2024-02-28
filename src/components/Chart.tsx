import React from "react";
import LineChart from "./LineChart";
import { ApiResponse } from "@/interfaces/data";
import { ChartProps } from "@/interfaces/chartData";

const Chart = ({ chartData }: ChartProps) => {
  return (
    <div className="flex border-2 rounded-md shadow-sm p-4 mt-10 overflow-x-auto overflow-y-auto ">
      <LineChart chartData={chartData as ApiResponse} />
    </div>
  );
};

export default Chart;
