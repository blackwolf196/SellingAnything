import React from 'react';
import ReactChart2 from "../../containers/Charts/ReactChart2";
import FrappeChart from "../../containers/Charts/FrappeChart/FrappeCharts";
import GoogleChart from "../../containers/Charts/GoogleChart/GoogleChart";
import ReactTrend from "../../containers/Charts/ReactTrend/ReactTrend";
import Recharts from "../../containers/Charts/Recharts/Recharts";

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