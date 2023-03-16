import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import AdminNav from "./AdminNav";
import "./admin.css";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteGroupFromAdmin,
	editGroupFromAdmin,
	getGroups,
} from "../../context/admin/api";

const AdminGroups = () => {
	const [editedRowData, setEditedRowData] = useState({
		id: "",
		groupName: "",
		groupDescription: "",
		groupTotal: "",
	});
	const allGroups = useSelector((state) => state.admin.groups);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getGroups());
	}, []);

	const handleDelete = (groupName) => {
		console.log(groupName);
		// e.preventDefault();
		dispatch(deleteGroupFromAdmin(groupName));
	};
	const handleCellEditCommit = (params) => {
		const { field, value } = params;
		const updatedRowData = { ...params.row, [field]: value };
		dispatch(editGroupFromAdmin(params.row.groupName, updatedRowData));
	};
	const handleEdit = (rowData) => {
		setEditedRowData(rowData);
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "groupName",
			headerName: "Group name",
			width: 250,
			editable: true,
		},
		{
			field: "groupDescription",
			headerName: "Group description",
			width: 250,
			editable: true,
		},
		{
			field: "groupTotal",
			headerName: "groupTotal",
			type: "number",
			width: 210,
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
							<DeleteOutlineIcon
								onClick={() => handleDelete(params.row.groupName)}
							/>
						</IconButton>
					</>
				);
			},
		},
	];

	const rows = [];
	{
		allGroups &&
			allGroups.map((i) => {
				rows.push({
					id: i._id,
					groupName: i.groupName,
					groupTotal: i.groupTotal,
					groupDescription: i.groupDescription,
				});
			});
	}

	return (
		<div className="adminGroups">
			<h1>WALLSYNC GROUPS</h1>
			<AdminNav />
			<div className="groupsTable">
				<DataGrid
					sx={{
						color: "white",
						textAlign: "center",
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
					onCellEditCommit={handleCellEditCommit}
				/>
			</div>
		</div>
	);
};

export default AdminGroups;
