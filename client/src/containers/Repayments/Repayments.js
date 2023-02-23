import React, { useState, useEffect } from "react";
import "./repayments.css";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import Table from "./components/Table";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Repayments = () => {
	const [repayments, setRepayments] = useState([]);
	// const [data, setData] = useState(repayments);

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
	}, []);
	// const handleDelete = (id) => {
	// 	setData(data.filter((item) => item.id !== id));
	// };
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
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Repayments;
