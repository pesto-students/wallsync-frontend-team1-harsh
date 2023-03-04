import React, { useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../context/authentication/api";
import "./avatar.css";
import { useDispatch } from "react-redux";

const Avatar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogout = () => {
		dispatch(logout());
	};
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
					<span onClick={() => handleLogout()}>Logout</span>
				</Link>
			</div>
		</div>
	);
};

export default Avatar;
