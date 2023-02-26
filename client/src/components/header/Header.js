// import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = ({ children, className }) => {
  return (
    <>
      <div className="header">
        <Link to="/home">
          <div className="default">
            <img src={logo} alt="" />
            <h1>WALLSYNC</h1>
          </div>
        </Link>
        <div className={className}>{children}</div>
      </div>
	  <hr className="headerLine"/>
    </>
  );
};

export default Header;
