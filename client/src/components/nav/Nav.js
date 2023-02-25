import React from "react";
import "./nav.css";
import home from "../../assets/icons8-home-48 (1).png";
import menu from "../../assets/icons8-menu-rounded-50.png";
import wallet from "../../assets/icons8-wallet-64.png";
// import toggle from "../../assets/icons8-toggle-on-50.png";
import settings from "../../assets/icons8-settings-64.png";
import Toggle from "./toggle/Toggle";
import { Link } from "react-router-dom";
const Nav = () => {
	return (
		<div className="navbar">
			<div className="sidenav">
				<ul>
					<li>
						<Link to="/home">
							<img src={home} alt="home icon" />

							<p>Home</p>
						</Link>
					</li>
					<li>
						<img src={menu} />
						<p>Menu</p>
					</li>
					<li>
						<img src={wallet} />
						<p>Wallet</p>
					</li>
					{/* <li><img src={toggle}  /><p>switch</p></li> */}
					<li>
						<Toggle />
						<p>switch</p>
					</li>

					<li>
						<img src={settings} />
						<p>settings</p>
					</li>
				</ul>
				<ul>
					<li>
						<img src={home} />
						<p>Logout</p>
					</li>
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
