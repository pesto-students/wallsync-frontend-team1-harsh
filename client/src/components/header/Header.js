// import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = ({ children, className }) => {
	return (
		<>
			<div className="header">
				<img src={logo} className="hLogo" alt="" />
				<div className="default">
					<Link to="/home">
						<h1>WALLSYNC</h1>
					</Link>
				</div>
				<div className={className}>{children}</div>
			</div>
			<hr className="headerLine" />
		</>
	);
};

export default Header;
