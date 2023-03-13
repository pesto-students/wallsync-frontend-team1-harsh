import React, { useEffect } from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "../../../../../components/button/Button";

// const notifications = [
//   "Car payment DUE on 03/2/23",
//   "Spendings exceeding limit (FEB)",
//   "Car payment DUE on 03/2/23",
//   "Spendings exceeding limit (FEB)",
//   "Car payment DUE on 03/2/23",
//   "Spendings exceeding limit (FEB)",
//   "Car payment DUE on 03/2/23",
//   "Spendings exceeding limit (FEB)",
// ];

function SimpleDialog(props) {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	return (
		<Dialog sx={{ width: 1000 }} onClose={handleClose} open={open}>
			<DialogTitle>
				NEW USER
				<p>
					<form action="">
						<input type="number" placeholder="income" />
						<input type="number" placeholder="limit" />
						<Button buttonName="Create Budget" />
					</form>
				</p>
			</DialogTitle>
		</Dialog>
	);
}

SimpleDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<p onClick={handleClickOpen}>Notifications</p>
			<SimpleDialog open={open} onClose={handleClose} />
		</div>
	);
}
