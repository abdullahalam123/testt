// CustomHook.js
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { ApiResponse } from "@/interfaces/data";

const useChartData = () => {
  const [chartData, setChartData] = useState<ApiResponse>();

  const fetchData = useCallback(async () => {
    const data = {
      json: {
        tokens: [
          "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
          "untrn",
        ],
        chainId: "neutron-1",
        dateRange: "D7",
      },
    };

    const jsonString = encodeURIComponent(JSON.stringify(data));

    try {
      const response = await axios.get(
        `https://app.astroport.fi/api/trpc/charts.prices?input=${jsonString}`
      );
      setChartData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { chartData };
};

export default useChartData;
