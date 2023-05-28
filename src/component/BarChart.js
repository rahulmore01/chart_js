import React from "react";
import { Bar } from "react-chartjs-2";
// this import is a must
import { Chart as ChartJS } from "chart.js/auto";

// passing data.js as props to main Bar chart Component
const BarChart = ({ chartData }) => {
  return <Bar data={chartData} />;
};

export default BarChart;
