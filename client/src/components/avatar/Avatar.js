import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Link} from 'react-router-dom';
import "./avatar.css";
const Avatar = () => {
	return (
		<div className="dropicon">
			<AccountCircleIcon />
			<div className="options">
			<Link to="/profile">
				<span type="link">Account</span>
			</Link>
			<Link to="/settings">
				<span>Settings</span>
			</Link>
			<Link to="/">
				<span>Logout</span>
			</Link>
			</div>
		</div>
	);
};

export default Avatar;
