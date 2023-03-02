import React from "react";
import "./nav.css";
import home from "../../assets/icons8-home-48 (1).png";
import logo from "../../assets/logo.png";
import menu from "../../assets/icons8-menu-rounded-50.png";
import wallet from "../../assets/icons8-wallet-64.png";
import LogoutIcon from "@mui/icons-material/Logout";
import settings from "../../assets/icons8-settings-64.png";
import Toggle from "./toggle/Toggle";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="navbar">
			<div className="sidenav">
				<ul>
					<Link style={{ textDecoration: "none" }} to="/home">
						<li>
							<img src={home} alt="home icon" />
							<p>Home</p>
						</li>
					</Link>
					<li>
						<img src={menu} />
						<p>Menu</p>
					</li>
					<li>
						<img src={wallet} />
						<p>Wallet</p>
					</li>
					<li>
						<Toggle />
						<p>switch</p>
					</li>
					<Link to="/settings">
						<li>
							<img src={settings} />
							<p>settings</p>
						</li>
					</Link>
				</ul>
				<ul>
					<Link to="/">
						<li>
							<LogoutIcon />
							<p>Logout</p>
						</li>
					</Link>
				</ul>
			</div>
			<div className="mobilenav">
				<ul className="mobilenavbottom">
					<img src={home} />
					<img src={menu} />
					<img src={wallet} />
					<img src={settings} />
				</ul>
			</div>
		</div>
	);
};

export default Nav;
