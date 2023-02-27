// import React from "react";
import "./landingHeader.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const LandingHeader = ({ children, className }) => {
	return (
		<>
			<div className="lHeader">
			<Link to='/home'>
				<div className="lDefault">
					<img src={logo} className="lLogo" alt="" />
					<h1>WALLSYNC</h1>
				</div>
			</Link>
				<div className={className}>{children}</div>
			</div>
			<hr className="topLine" />
		</>
	);
};

export default LandingHeader;
