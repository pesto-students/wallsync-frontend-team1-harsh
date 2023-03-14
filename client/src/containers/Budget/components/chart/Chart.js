import React from "react";
import { Pie, Bar, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import './chart.css'
const ExpenseChart = ({ pieData }) => {
	return (
		<div className="DoughnutChart">
			<Doughnut sx={{
				padding:15
			}} data={pieData} className='doughnut' />
		</div>
	);
};

export default ExpenseChart;
