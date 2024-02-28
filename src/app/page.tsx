"use client";

import Chart from "@/components/Chart";
import Navbar from "@/components/Navbar";
import TokenList from "@/components/TokenList";
import useChartData from "@/hooks/useChartData";
import { ApiResponse } from "@/interfaces/data";

export default function Home() {
  const { chartData } = useChartData();

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col">
      <Navbar />
      <Chart chartData={chartData as ApiResponse} />
      <TokenList chartData={chartData as ApiResponse} />
    </div>
  );
}
