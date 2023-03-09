import React from "react";
import "./nav.css";
import home from "../../assets/icons8-home-48 (1).png";
import logo from "../../assets/logo.png";
import menu from "../../assets/icons8-menu-rounded-50.png";
import wallet from "../../assets/icons8-wallet-64.png";
import LogoutIcon from "@mui/icons-material/Logout";
import settings from "../../assets/icons8-settings-64.png";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
import Dialogue from '../dialog/Dialogue'
import Toggle from "./toggle/Toggle";
import { Link } from "react-router-dom";

const Nav = () => {
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
            <NotificationsIcon/>
            <Dialogue/>
            {/* <p>Notifications</p> */}
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
