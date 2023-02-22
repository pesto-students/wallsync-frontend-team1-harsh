import React from "react";
import "./profile.css";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Button from "../../components/button/Button";
import { Icon, IconButton } from "@mui/material";
import Avatar from "../../components/avatar/Avatar";
const Profile = () => {
	return (
		<div>
			<Header className="headerAvatar" children={<Avatar />} />
			<div className="profileBody">
				<div className="navigation">
					<Nav />
				</div>
				<div className="profileInfo">
					<img src=""></img>
					<input placeholder="name"></input>
					<input placeholder="email"></input>
					<input placeholder="address"></input>
					<input placeholder="999999999"></input>
					<Button buttonName="Sign Out" />
				</div>
			</div>
		</div>
	);
};

export default Profile;
