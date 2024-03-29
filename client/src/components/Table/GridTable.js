import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rowData, columnData }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowData}
        columns={columnData}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
