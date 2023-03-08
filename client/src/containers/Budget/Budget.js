import React, { useState, useEffect } from "react";
import "./budget.css";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Avatar from "../../components/avatar/Avatar";
import Table from "./components/table/Table";
import ExpenseChart from "./components/chart/Chart";
import axios from "axios";
import LineChart from "./components/chart/LineChart";
import Footer from "../../components/footer/Footer";
// import Heading from "./components/Heading/Heading";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, getBudget } from "../../context/budget/api";
const Budget = () => {
	const [description, setDescription] = useState("");
	const [refresh,setRefresh] = useState(0);
	const [amount, setAmount] = useState("");
	const dispatch = useDispatch();
	const budgetData = useSelector((state) => state.budget.budget);
	const expenseData = useSelector((state) => state.budget.budget.expensesArray);
	useEffect(() => {
		dispatch(getBudget());
	}, []);

	const submit = async (e) => {
		e.preventDefault();
		dispatch(addExpense({ description, amount }));
		setDescription("");
		setAmount("");
		setTimeout(()=>{
			dispatch(getBudget())
		},500)
	};

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
		expenseData &&
			expenseData.map((item, i) => {
				rows.push({
					id: i + 1,
					Description: item.description,
					Amount: item.amount,
					Date: item.date.substr(0, 10),
				});
			});
	}
	let final = [];
	final = expenseData ? expenseData.map((item) => item.description) : [];
	const lineChartData = {
		labels: expenseData
			? expenseData.map((item) => item.date.substr(5, 5))
			: [],

		datasets: [
			{
				label: final.map((index, i) => index),
				data: expenseData ? expenseData.map((item) => item.amount) : [],
				fill: false,
				borderColor: "rgb(75, 192, 192)",
				tension: 0.1,
			},
		],
	};

	const data = {
		labels: ["Income", "Savings", "Total Spendings"],
		datasets: [
			{
				// label: "My First Dataset",
				data: [budgetData.income, budgetData.savings, budgetData.total],
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
						<form className="addExpenseForm" action="" onSubmit={submit}>
							<input
								type="text"
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Description"
							></input>
							<input
								type="number"
								onChange={(e) => setAmount(e.target.value)}
								placeholder="Amount"
							></input>
							<Button
								type="submit"
								className="addExpenseB"
								buttonName="Add expenses"
							/>
						</form>
						<div className="incomeDiv">
							<input type="text" placeholder="Set limit" />
							<input type="text" placeholder="Add Income" />
						</div>
					</div>
					<hr className="expenseLine" />
					<div className="three">
						<p>
							February spendings: <span>₹{budgetData.total}</span>
						</p>
						<LineChart rowData={lineChartData} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Budget;
