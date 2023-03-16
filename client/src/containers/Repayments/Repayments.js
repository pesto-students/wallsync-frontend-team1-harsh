//repayment
import React, { useState, useEffect } from "react";
import "./repayments.css";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Table from "./components/Table";
import Button from "../../components/button/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SaveIcon from "@mui/icons-material/Save";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useDispatch, useSelector } from "react-redux";
import {
	getRepayments,
	addRepayment,
	deleteRepayment,
	editRepayment,
} from "../../context/repayments/api";
import { IconButton } from "@mui/material";
const Repayments = ({}) => {
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [editedRowData, setEditedRowData] = useState({
		id: "",
		Description: "",
		Amount: "",
		Date: "",
	});
	const dispatch = useDispatch();
	const repaymentData = useSelector((state) => state.repayment);

	useEffect(() => {
		dispatch(getRepayments());
	}, []);
	const submit = (e) => {
		e.preventDefault();
		dispatch(
			addRepayment({
				description,
				amount,
				dueDate,
			})
		);
		notifyAdd();
		setDescription(" ");
		setAmount(" ");
		setDueDate(" ");
	};

	const handleCellEditCommit = (params) => {
		const { field, value } = params;
		const updatedRowData = { ...params.row, [field]: value };
		dispatch(editRepayment(updatedRowData, params.row.id));
	};
	const handleEdit = (rowData) => {
		setEditedRowData(rowData);
	};
	const handleDelete = (repaymentId) => {
		dispatch(deleteRepayment(repaymentId));
		notifyDelete();
	};
	const columns = [
		{ field: "id", headerName: "ID", width: 70, hide: true },
		{
			field: "description",
			headerName: "Description",
			width: 150,
			editable: true,
		},
		{
			field: "amount",
			headerName: "Amount",
			width: 150,
			sortable: true,
			editable: true,
		},
		{
			field: "date",
			headerName: "Date",
			type: "number",
			width: 200,
			sortable: true,
			editable: true,
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
		repaymentData &&
			repaymentData.repayment.map((index) => {
				rows.push({
					id: index._id,
					description: index.description,
					amount: index.amount,
					date: index.dueDate.toString().substr(0, 10),
				});
			});
	}
	const notifyAdd = () => {
		toast("Repayment added");
	};
	const notifyDelete = () => {
		toast("Repayment deleted");
	};

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
						onCellEditCommit={handleCellEditCommit}
						// editRowsModel={editingRow ? [editingRow.id] : []}
					/>
					<form className="repaymentsForm" onSubmit={(e) => submit(e)}>
						<input
							value={description}
							type="text"
							placeholder="Description"
							onChange={(e) => setDescription(e.target.value)}
						/>
						<input
							value={amount}
							type="number"
							placeholder="Amount"
							onChange={(e) => setAmount(e.target.value)}
						/>
						<input
							value={dueDate}
							type="date"
							onChange={(e) => setDueDate(e.target.value)}
						/>
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
