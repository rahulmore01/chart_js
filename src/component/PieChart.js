import React from "react";
import { Pie } from "react-chartjs-2";
// this import is a must
import { Chart as ChartJS } from "chart.js/auto";

// passing data.js as props to main Bar chart Component
const PieChart = ({ chartData }) => {
  return <Pie data={chartData} />;
};

export default PieChart;
