import React, { useState } from "react";
import "./settings.css";
import Avatar from "../../components/avatar/Avatar";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Button from "../../components/button/Button";
import Panel from "./components/panel/Panel";
import HelpIcon from "@mui/icons-material/Help";
import ReportIcon from "@mui/icons-material/Report";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { IconButton } from "@mui/material";
import Footer from "../../components/footer/Footer";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Settings = () => {
  
  return (
    <div>
      <Header className="headerAvatar" children={<Avatar />} />
      <div className="settingsBody">
        <div className="navigation">
          <Nav />
        </div>
        <div className="mainDashBoard">
          <div className="board">
            <Panel
              className="settingsPanel"
              panelLogo={
                <IconButton>
                  <NotificationsActiveIcon />
                </IconButton>
              }
              panelName="Notifications"
              panelData={
                <div>
                  <Switch {...label} defaultChecked />
                </div>
              }
            />
            <Panel
              className="settingsPanel"
              panelLogo={
                <IconButton>
                  <HelpIcon />
                </IconButton>
              }
              panelName="Help"
              panelData={
                <>
                  <span>Contact Us</span>
                  <a href="">Guide</a>
                </>
              }
            />
            <Panel
              className="settingsPanel"
              panelLogo={
                <IconButton>
                  <ReportIcon />
                </IconButton>
              }
              panelName="Report"
              panelData={
                <>
                  <textarea placeholder="Report Any Issue"></textarea>
                  <br />
                  <button>Submit</button>
                </>
              }
            />
            <Panel
              className="settingsPanel"
              panelLogo={
                <IconButton>
                  <PrivacyTipIcon />
                </IconButton>
              }
              panelName="Privacy"
            />
          </div>
          <div className="settingsInfo">
            <Button buttonName="Sign Out" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Settings;
