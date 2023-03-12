import React from "react";
import { Pie, Bar, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./chart.css";
const ExpenseChart = ({ pieData, generateButton }) => {
	return (
		<div className="DonutChart">
			{generateButton}
			<Doughnut data={pieData} />
		</div>
	);
};

export default ExpenseChart;
