import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rowData, columnData }) {
	return (
		<div style={{ height: 372, width: "100%" }}>
			<DataGrid
				sx={{
					boxShadow: 2,
					border: 5,
					borderRadius: 6,
					color: "white",
					borderColor: "#E26E2D",
					"& .MuiDataGrid-cell:hover": {
						color: "primary.main",
					},
					textAlign: "center",
				}}
				rows={rowData}
				columns={columnData}
				pageSize={10}
				rowsPerPageOptions={[10]}
				checkboxSelection
			/>
		</div>
	);
}
