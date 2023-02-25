import React from "react";
import { Pie, Bar, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./chart.css";
const ExpenseChart = ({ pieData }) => {
	// const data = {
	// 	labels: [{ labelName }],
	// 	datasets: [
	// 		{
	// 			label: "My First Dataset",
	// 			data: [{ datum }],
	// 			backgroundColor: [
	// 				"rgb(255, 99, 132)",
	// 				"rgb(54, 162, 235)",
	// 				"rgb(255, 205, 86)",
	// 			],
	// 			hoverOffset: 4,
	// 		},
	// 	],
	// };
	return (
		<div className="DonutChart">
			<Doughnut data={pieData} />
		</div>
	);
};

export default ExpenseChart;
