// import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
const Header = ({children,className}) => {
  return (
    <div className="header">
	<div className="default">
      <img src={logo} alt="" />
      <h1>WALLSYNC</h1>
	</div>
      <div className={className}>
			{children}
	  </div>
    </div>
  );
};

export default Header;
