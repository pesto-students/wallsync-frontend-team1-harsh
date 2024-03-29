import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../../budget.css";

export default function DataTable({ rowData, columnData, onCellEditCommit }) {
  return (
    <div
      className="table"
      style={{
        height: 490,
        width: "60%",
        backgroundColor: "#1f1f1f",
        borderRadius: 25,
      }}
    >
      <DataGrid
        sx={{
          boxShadow: 2,
          border: 5,
          borderRadius: 6,
          color: "white",
          scrollBehavior: "smooth",
          borderColor: "#E26E2D",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        className="expenseTable"
        rows={rowData}
        columns={columnData}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        onCellEditCommit={onCellEditCommit}
      />
    </div>
  );
}
