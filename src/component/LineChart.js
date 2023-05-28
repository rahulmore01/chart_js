import React from "react";
import { Line } from "react-chartjs-2";
// this import is a must
import { Chart as ChartJS } from "chart.js/auto";

// passing data.js as props to main Bar chart Component
const LineChart = ({ chartData }) => {
  return <Line data={chartData} />;
};

export default LineChart;
