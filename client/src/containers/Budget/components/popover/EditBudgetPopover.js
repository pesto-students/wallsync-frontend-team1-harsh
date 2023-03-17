import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Button from "../../../../components/button/Button";

export default function BasicPopover({ editPopover }) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<div>
			<IconButton
				aria-describedby={id}
				variant="contained"
				onClick={handleClick}
			>
				<EditIcon
					className="addMemberIcon"
					sx={({ width: "40px" }, { height: "40px" })}
				/>
			</IconButton>
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
				<Typography sx={({ p: 2 }, { width: "300px" }, { padding: "25px" })}>
					{editPopover}
				</Typography>
			</Popover>
		</div>
	);
}
