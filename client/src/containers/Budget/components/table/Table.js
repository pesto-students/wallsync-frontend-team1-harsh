import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rowData, columnData }) {
  return (
    <div style={{ height: 490, width: "60%", backgroundColor: "#1f1f1f" ,borderRadius:25 }}>
      <DataGrid
        sx={{
          boxShadow: 2,
          border: 5,
          borderRadius: 6,
          color: "white",
          scrollBehavior:"smooth",
          borderColor: "#E26E2D",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        rows={rowData}
        columns={columnData}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
}
