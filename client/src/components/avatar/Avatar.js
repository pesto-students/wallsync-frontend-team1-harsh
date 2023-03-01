import React, { useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Link} from 'react-router-dom';
import { logoutStart } from "../../context/auth/AuthActions";
import "./avatar.css";
import { AuthContext } from "../../context/auth/AuthContext";
const Avatar = () => {
	const {user} = useContext(AuthContext)
	const logOut=()=>{
		if(user){
			localStorage.clear()
		}
	}
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
				<span onClick={()=>logOut}>Logout</span>
			</Link>
			</div>
		</div>
	);
};

export default Avatar;
