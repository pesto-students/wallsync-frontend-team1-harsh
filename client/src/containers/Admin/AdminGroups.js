import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import AdminNav from "./AdminNav";
import "./admin.css";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveIcon from "@mui/icons-material/Save";

const AdminGroups = () => {
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
      field: "groupName",
      headerName: "Group name",
      width: 250,
      editable: true,
    },
    {
      field: "members",
      headerName: "Members",
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
              <DeleteOutlineIcon onClick={() => handleDelete(params.row.id)} />
            </IconButton>
          </>
        );
      },
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", groupName: "Jon", members: 35 },
    { id: 2, lastName: "Lannister", groupName: "Cersei", members: 42 },
    { id: 3, lastName: "Lannister", groupName: "Jaime", members: 45 },
    { id: 4, lastName: "Stark", groupName: "Arya", members: 16 },
    { id: 5, lastName: "Targaryen", groupName: "Daenerys", members: 35 },
    { id: 6, lastName: "Melisandre", groupName: "Ayan", members: 150 },
    { id: 7, lastName: "Clifford", groupName: "Ferrara", members: 44 },
    { id: 8, lastName: "Frances", groupName: "Rossini", members: 36 },
    { id: 9, lastName: "Roxie", groupName: "Harvey", members: 65 },
  ];

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
        />
      </div>
    </div>
  );
};

export default AdminGroups;
