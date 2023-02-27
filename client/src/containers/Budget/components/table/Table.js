import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rowData, columnData }) {
	return (
		<div style={{ height: 490, width: "60%", backgroundColor: "white" }}>
			<DataGrid
				rows={rowData}
				columns={columnData}
				pageSize={10}
				rowsPerPageOptions={[10]}
				checkboxSelection
			/>
		</div>
	);
}
