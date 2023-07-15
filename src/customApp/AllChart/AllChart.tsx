import React from 'react';
import ReactChart2 from "@iso/containers/Charts/ReactChart2";
import FrappeChart from "@iso/containers/Charts/FrappeChart/FrappeCharts";
import GoogleChart from "@iso/containers/Charts/GoogleChart/GoogleChart";
import ReactTrend from "@iso/containers/Charts/ReactTrend/ReactTrend";
import Recharts from "@iso/containers/Charts/Recharts/Recharts";

const AllChart = () => {
  return <>
    <ReactChart2/>
    <FrappeChart/>
    <GoogleChart/>
    <ReactTrend/>
    <Recharts/>
  </>
}

export default AllChart;