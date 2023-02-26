import React, { useState, useEffect } from "react";
import "./budget.css";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Avatar from "../../components/avatar/Avatar";
import Table from "./components/table/Table";
import ExpenseChart from "./components/chart/Chart";
import axios from "axios";
import Footer from "../../components/footer/Footer";
const Budget = () => {
	const [content, setContent] = useState([]);
	const [chartData, setChartData] = useState([]);
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState("");

	useEffect(() => {
		const getGroup = () => {
			axios
				.get("http://localhost:8000/api/63f361935a6870f14f57389d/budget")
				.then((data) => {
					// console.log(data.data[0]);
					setContent(data.data[0].expensesArray);
					setChartData(data.data[0]);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getGroup();
	}, [description, amount]);
	//table data
	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{ field: "Description", headerName: "Description", width: 100 },
		{ field: "Amount", headerName: "Amount", width: 100, sortable: true },
		{
			field: "Date",
			headerName: "Date",
			type: "number",
			width: 100,
			sortable: true,
		},
	];
	const rows = [];
	{
		content.map((item, i) => {
			rows.push({
				id: i + 1,
				Description: item.description,
				Amount: item.amount,
				Date: item.date.substr(0, 10),
			});
		});
	}
	const data = {
		labels: ["Income", "Savings", "Total"],
		datasets: [
			{
				label: "My First Dataset",
				data: [chartData.income, chartData.savings, chartData.total],
				backgroundColor: [
					"rgb(255, 99, 132)",
					"rgb(54, 162, 235)",
					"rgb(255, 205, 86)",
				],
				hoverOffset: 4,
			},
		],
	};
	return (
		<div>
			<Header children={<Avatar />} />
			<div className="container">
				<Nav />
				<div className="budgetBody">
					<div className="one">
						<Table rowData={rows} columnData={columns} />
						<ExpenseChart pieData={data} />
					</div>
					<div className="two">
						<input></input>
						<input></input>
						<button>Add expenses</button>
					</div>
					<div className="three">
						<p>February spendings: {chartData.total}</p>
						<ExpenseChart pieData={data} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Budget;
