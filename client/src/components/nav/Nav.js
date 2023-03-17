import React from "react";
import "./nav.css";
import home from "../../assets/icons8-home-48 (1).png";
import menu from "../../assets/icons8-menu-rounded-50.png";
import wallet from "../../assets/icons8-wallet-64.png";
import LogoutIcon from "@mui/icons-material/Logout";
import settings from "../../assets/icons8-settings-64.png";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { logout } from "../../context/authentication/api";
import Dialogue from "../dialog/Dialogue";
import Toggle from "./toggle/Toggle";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Nav = () => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
	};
	return (
		<div className="navbar">
			<div className="sidenav">
				<ul className="top">
					<Link style={{ textDecoration: "none" }} to="/home">
						<li>
							<HomeIcon />
							<p>Home</p>
						</li>
					</Link>
					<li>
						<PeopleIcon />
						<p>Friends</p>
					</li>
					<li>
						<AccountBalanceWalletIcon />
						<p>Wallet</p>
					</li>
					<li>
						<NotificationsIcon />
						<Dialogue />
					</li>
					<li>
						<Toggle />
						<p>switch</p>
					</li>
					<Link to="/settings">
						<li>
							<SettingsIcon />
							<p>settings</p>
						</li>
					</Link>
				</ul>
				<ul className="bottom">
					<li>
						<LogoutIcon onClick={handleLogout} />
						<p>Logout</p>
					</li>
				</ul>
			</div>
			<div className="mobilenav">
				<ul className="mobilenavbottom">
					<Link to="/home">
						<img src={home} />
					</Link>
					<Link to="/">
						<img src={menu} />
					</Link>
					<Link to="/">
						<img src={wallet} />
					</Link>
					<Link to="/settings">
						<img src={settings} />
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
