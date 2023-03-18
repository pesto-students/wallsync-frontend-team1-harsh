import React from "react";
import "./nav.css";
import home from "../../assets/icons8-home-48 (1).png";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import settings from "../../assets/icons8-settings-64.png";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import { logout } from "../../context/authentication/api";
import Dialogue from "../dialog/Dialogue";
import Toggle from "./toggle/Toggle";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Nav = () => {
  const admin = JSON.parse(localStorage.getItem("user")).user.isAdmin;
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
          <Link style={{ textDecoration: "none" }} to="/whatsNew">
            <li>
              <FiberNewIcon />
              <p>Whats New</p>
            </li>
          </Link>
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
          {admin ? (
            <Link to="/adminUsers">
              <li>
                <AdminPanelSettingsIcon />
                <p>Admin</p>
              </li>
            </Link>
          ) : null}
        </ul>
        <ul className="bottom">
          <li>
            <LogoutIcon onClick={handleLogout} />
            <p>Logout</p>
          </li>
        </ul>
      </div>
      <div className="mobilenav">
        {/* <ul className="mobilenavbottom"> */}
        <Link to="/home">
          <img src={home} />
        </Link>
        <li>
          <Toggle />
        </li>
        <Link to="/whatsNew">
          <li>
            <FiberNewIcon />
          </li>
        </Link>
        <Link to="/settings">
          <img src={settings} />
        </Link>
        {/* </ul> */}
      </div>
    </div>
  );
};

export default Nav;
