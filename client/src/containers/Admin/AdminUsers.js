import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import AdminNav from "./AdminNav";
import "./admin.css";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../context/admin/api";

const AdminUsers = () => {
	const allUsers = useSelector((state) => state.admin.users);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers());
	}, []);
	const handleDelete = (expenseId) => {
		// dispatch(deleteExpense(expenseId));
		// notifyDelete();
	};
	const handleCellEditCommit = (params) => {
		const { field, value } = params;
		const updatedRowData = { ...params.row, [field]: value };
		// dispatch(editExpense(params.row.id, updatedRowData));
	};
	const handleEdit = (rowData) => {
		// setEditedRowData(rowData);
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "firstName",
			headerName: "First name",
			width: 150,
			editable: true,
		},
		{
			field: "lastName",
			headerName: "Last name",
			width: 150,
			editable: true,
		},
		{
			field: "email",
			headerName: "Email",
			type: "text",
			width: 210,
			editable: true,
		},
		{
			field: "zip",
			headerName: "Zip",
			type: "text",
			width: 210,
			editable: true,
		},
		{
			field: "phone",
			headerName: "Phone",
			type: "number",
			width: 110,
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
		allUsers &&
			allUsers.map((i) => {
				rows.push({
					id: i._id,
					firstName: i.firstName,
					lastName: i.lastName,
					email: i.email,
					zip: i.zip,
					phone: i.phone,
				});
			});
	}

	return (
		<div className="adminUsers">
			<h1>WALLSYNC USERS</h1>
			<AdminNav />
			<div className="usersTable">
				<DataGrid
					sx={{
						color: "white",
					}}
					rows={rows}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 5,
							},
						},
					}}
					pageSizeOptions={[5]}
					checkboxSelection
					disableRowSelectionOnClick
				/>
			</div>
		</div>
	);
};

export default AdminUsers;
