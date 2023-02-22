import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./avatar.css";
const Avatar = () => {
	return (
		<div className="dropicon">
			<AccountCircleIcon />
			<div className="options">
				<span type="link">Account</span>
				<span>Settings</span>
				<span>Logout</span>
			</div>
		</div>
	);
};

export default Avatar;
