"use client";

import { LineChartProps } from "@/interfaces/lineChart";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  registerables,
} from "chart.js";

import { Chart } from "react-chartjs-2";
ChartJS.register(
  ...registerables,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export default function LineChart({ chartData }: LineChartProps) {
  const labels = chartData?.result.data.json[
    "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9"
  ].series.map((point) => {
    const date = new Date(point.time * 1000);

    const monthAbbreviation = date.toLocaleString("en-US", { month: "short" });
    const dayOfMonth = date.getDate();

    return `${monthAbbreviation} ${dayOfMonth} `;
  });

  const atomValues = chartData?.result.data.json[
    "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9"
  ].series.map((point) => point.value);

  const ntrnValues = chartData?.result.data.json["untrn"].series.map(
    (point) => point.value
  );

  return (
    <div className="min-w-[1000px] min-h-[18.75rem] py-10">
      <Chart
        type="line"
        options={{
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            y: {
              ticks: {
                crossAlign: "far",
                padding: 10,
                maxTicksLimit: 6,
                color: "#82858D",
                callback: (value) => {
                  return "$" + value;
                },
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                maxTicksLimit: 7,
              },
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              label: "ATOM Price",
              data: atomValues,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
            {
              label: "NTRN Price",
              data: ntrnValues,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
}
