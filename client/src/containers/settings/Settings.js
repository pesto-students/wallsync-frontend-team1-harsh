import React from "react";
import "./settings.css";
import Avatar from "../../components/avatar/Avatar";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Button from "../../components/button/Button";
import Panel from "./components/panel/Panel";
import HelpIcon from '@mui/icons-material/Help';
import ReportIcon from '@mui/icons-material/Report';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { IconButton } from "@mui/material";
import Footer from '../../components/footer/Footer'

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
              panelLogo={
                <IconButton>
                  <NotificationsActiveIcon />
                </IconButton>
              }
              panelName="Notifications"
			  panelData={
				<div>
					hello
				</div>
			  }
            />
            <Panel
              panelLogo={
                <IconButton>
                  <HelpIcon />
                </IconButton>
              }
              panelName="Help"
            />
            <Panel
              panelLogo={
                <IconButton>
                  <ReportIcon />
                </IconButton>
              }
              panelName="Report"
            />
            <Panel
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
