import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./linechart.css";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ rowData }) {
  return (
    <div className="expLineChart">
      <Line className="lineChart" data={rowData} />
    </div>
  );
}
export default LineChart;
