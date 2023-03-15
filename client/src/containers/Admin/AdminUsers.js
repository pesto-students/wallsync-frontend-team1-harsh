import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import AdminNav from "./AdminNav";
import "./admin.css";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveIcon from "@mui/icons-material/Save";

const AdminUsers = () => {
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
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
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
        field: "phone",
        headerName: "Phone",
        type: "number",
        width: 110,
        editable: true,
      },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
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
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 ,email:"ayankhanxyz00@gmail.com",phone:"9606375593"},
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 ,email:"ayankhanxyz00@gmail.com",phone:"9606375593"},
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45,email:"ayankhanxyz00@gmail.com" ,phone:"9606375593"},
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 ,email:"ayankhanxyz00@gmail.com",phone:"9606375593"},
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 45 ,email:"ayankhanxyz00@gmail.com",phone:"9606375593"},
    { id: 6, lastName: "Melisandre", firstName: "yellow", age: 150,email:"ayankhanxyz00@gmail.com",phone:"9606375593" },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 ,email:"ayankhanxyz00@gmail.com",phone:"9606375593"},
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36,email:"ayankhanxyz00@gmail.com",phone:"9606375593" },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 ,email:"ayankhanxyz00@gmail.com",phone:"9606375593"},
  ];

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