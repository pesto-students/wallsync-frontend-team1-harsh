import React, { useState, useEffect } from "react";
import "./repayments.css";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import Table from "./components/Table";
import Button from "../../components/button/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Repayments = () => {
	const [repayments, setRepayments] = useState([]);
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState("");
	const [dueDate, setDueDate] = useState("");

	useEffect(() => {
		const getRepayments = () => {
			axios
				.get("http://localhost:8000/api/63f361935a6870f14f57389d/repayments")
				.then((res) => {
					console.log(res.data);
					setRepayments(res.data);
				})
				.catch((err) => {
					console.log("error");
				});
		};
		getRepayments();
	}, [description, amount, dueDate]);

	// const handleDelete = (id) => {
	// 	setData(data.filter((item) => item.id !== id));
	// };

	const submit = async (e) => {
		e.preventDefault();

		await axios.post(
			"http://localhost:8000/api/63f361935a6870f14f57389d/addRepayment",
			{ description, amount, dueDate }
		);
		setDescription(" ");
		setAmount(" ");
		setDueDate(" ");
	};
	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{ field: "Description", headerName: "Description", width: 150 },
		{ field: "Amount", headerName: "Amount", width: 150, sortable: true },
		{
			field: "Date",
			headerName: "Date",
			type: "number",
			width: 200,
			sortable: true,
		},
		{
			field: "delete",
			headerName: "Delete",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						{/* <button className="userListEdit">Edit</button> */}
						<DeleteOutlineIcon
						// onClick={() => handleDelete(params.row.id) }
						/>
					</>
				);
			},
		},
		{
			field: "edit",
			headerName: "Edit",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<EditIcon />
					</>
				);
			},
		},
		{
			field: "notification",
			headerName: "Notification",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<NotificationsActiveIcon />
					</>
				);
			},
		},
	];
	const rows = [];
	{
		repayments.map((index, i) => {
			rows.push({
				id: i + 1,
				Description: index.description,
				Amount: index.amount,
				Date: index.dueDate,
			});
		});
	}

	return (
		<div>
			<Header />
			<div className="repaymentsBody">
				<Nav />
				<div className="repaymentsDashboard">
					<Table
						className="repaymentTable"
						rowData={rows}
						columnData={columns}
					/>
					<form className="repaymentsForm" onSubmit={submit}>
						<input
							type="text"
							placeholder="description"
							onChange={(e) => setDescription(e.target.value)}
						/>
						<input
							type="number"
							placeholder="amount"
							onChange={(e) => setAmount(e.target.value)}
						/>
						<input type="date" onChange={(e) => setDueDate(e.target.value)} />
						<Button
							className="addRepaymentB"
							type="submit"
							buttonName="Add Repayment"
						/>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Repayments;
