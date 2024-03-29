import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import "./popover.css";

export default function BasicPopover({ popdata, handleType }) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		if (event.target.value === "unequal") {
			setAnchorEl(event.currentTarget);
		} else {
			setAnchorEl(null);
		}
		handleType(event.target.value);
		// setType(event.target.value);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<div className="popover">
			<select aria-describedby={id} variant="contained" onChange={handleClick}>
				<option value="equal">equal</option>
				<option value="unequal">unequal</option>
			</select>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<Typography
					sx={
						({ p: 2 },
						{ backgroundColor: "#1f1f1f" },
						{ width: "300px" },
						{ padding: "25px" })
					}
				>
					{popdata}
				</Typography>
			</Popover>
		</div>
	);
}
