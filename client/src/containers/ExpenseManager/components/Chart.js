import React from "react";
import { Pie, Bar, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
// import axios from "axios";
const ExpenseChart = ({ pieData }) => {
	// const data = {
	// 	labels: ["Income", "Savings", "Total"],
	// 	datasets: [
	// 		{
	// 			label: "My First Dataset",
	// 			data: [content.income, content.savings, content.total],
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
		<div className="pieChart">
			<Doughnut data={pieData} />
		</div>
	);
};

export default ExpenseChart;
