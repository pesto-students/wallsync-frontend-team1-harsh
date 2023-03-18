import React, { useState, useEffect } from "react";
import "./budget.css";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Table from "./components/table/Table";
import ExpenseChart from "./components/chart/Chart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LineChart from "./components/chart/LineChart";
import Footer from "../../components/footer/Footer";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveIcon from "@mui/icons-material/Save";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary";
import {
	addExpense,
	deleteExpense,
	editBudget,
	editExpense,
	getBudget,
} from "../../context/budget/api";
import NewUser from "../Budget/components/newuser/NewUser";
import EditBudgetPopover from "./components/popover/EditBudgetPopover";
const Budget = () => {
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState("");
	const [editedRowData, setEditedRowData] = useState({
		id: "",
		Description: "",
		Amount: "",
		Date: "",
	});
	const [income, setIncome] = useState(0);
	const [limit, setLimit] = useState(0);
	const dispatch = useDispatch();
	const budgetData = useSelector((state) => state.budget.budget);
	const id = budgetData ? budgetData._id : null;
	console.log("budgetintial", budgetData);
	console.log("budgetintial ID", id);

	const expenseData = useSelector(
		(state) => state.budget.budget.expensesArray
	);
	// const expenseData = budgetData.expensesArray;
	useEffect(() => {
		dispatch(getBudget());
	}, []);

	const submit = async (e) => {
		e.preventDefault();
		dispatch(addExpense({ description, amount }));
		notifySubmit();
		setDescription("");
		setAmount("");
	};

	const handleDelete = (expenseId) => {
		dispatch(deleteExpense(expenseId));
		notifyDelete();
	};
	const handleCellEditCommit = (params) => {
		const { field, value } = params;
		const updatedRowData = { ...params.row, [field]: value };
		dispatch(editExpense(params.row.id, updatedRowData));
	};
	const handleEdit = (rowData) => {
		setEditedRowData(rowData);
	};
	const handleEditBudget = (e) => {
		e.preventDefault();
		dispatch(editBudget(id, { income, limit }));
		setIncome(0);
		setLimit(0);
	};
	const notifySubmit = () => {
		toast("Expense added");
	};
	const notifyDelete = () => {
		toast("Expense deleted");
	};
	//table data
	const columns = [
		{ field: "id", headerName: "ID", width: 70, hide: true },
		{
			field: "description",
			headerName: "Description",
			width: 100,
			editable: true,
		},
		{
			field: "amount",
			headerName: "Amount",
			width: 100,
			sortable: true,
			editable: true,
		},
		{
			field: "date",
			headerName: "Date",
			type: "number",
			width: 100,
			sortable: true,
			editable: true,
		},
		{
			field: "edit",
			headerName: "Edit",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<IconButton>
							<SaveIcon onClick={() => handleEdit(params.row)} />
						</IconButton>
					</>
				);
			},
		},
		{
			field: "delete",
			headerName: "Delete",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<IconButton>
							<DeleteOutlineIcon onClick={() => handleDelete(params.row.id)} />
						</IconButton>
					</>
				);
			},
		},
	];
	const rows = [];
	{
		expenseData &&
			expenseData.map((item, i) => {
				rows.push({
					id: item._id,
					description: item.description,
					amount: item.amount,
					date: item.date.substr(0, 10),
				});
			});
	}
	let final = [];
	final = expenseData && expenseData.map((item) => item.description);
	const lineChartData = {
		labels: expenseData && expenseData.map((item) => item.date.substr(5, 5)),
		datasets: [
			{
				label: final && final.map((index, i) => index),
				data: expenseData && expenseData.map((item) => item.amount),
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
				data: [
					budgetData && budgetData.income,
					budgetData && budgetData.savings,
					budgetData && budgetData.total,
				],
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
			<Header />
			<div className="container">
				<Nav />
				<div className="budgetBody">
					{!budgetData && (
						<ErrorBoundary>
							<NewUser />
						</ErrorBoundary>
					)}
					<div className="one">
						<Table
							rowData={rows}
							columnData={columns}
							onCellEditCommit={handleCellEditCommit}
						/>
						<ExpenseChart pieData={data} />
					</div>
					<div className="two">
						<form className="addExpenseForm" action="" onSubmit={submit}>
							<input
								type="text"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Description"
							></input>
							<input
								value={amount}
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
							<span>INCOME:{budgetData && budgetData.income}</span>
							<span>LIMIT:{budgetData && budgetData.limit}</span>
							<EditBudgetPopover
								editPopover={
									<form
										className="updateBudgetForm"
										onSubmit={handleEditBudget}
									>
										<input
											type="number"
											placeholder="income"
											onChange={(e) => setIncome(e.target.value)}
										></input>
										<input
											type="number"
											placeholder="limit"
											onChange={(e) => setLimit(e.target.value)}
										></input>
										<Button
											type="submit"
											buttonName="Update"
											className="updateBudgetB"
										/>
									</form>
								}
							/>
						</div>
					</div>
					<hr className="expenseLine" />
					<div className="three">
						<p>
							Spendings: <span>₹{budgetData && budgetData.total}</span>
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
