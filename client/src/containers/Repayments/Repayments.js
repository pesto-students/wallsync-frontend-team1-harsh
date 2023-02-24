import React, { useState, useEffect } from "react";
import "./repayments.css";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import Table from "./components/Table";
import Button from "../../components/button/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
					setRepayments(res.data.repayments);
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
	};
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
		{
			field: "action",
			headerName: "Action",
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
					<div>
						<form onSubmit={submit}>
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
							<Button type="submit" buttonName="Add Repayment" />
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Repayments;