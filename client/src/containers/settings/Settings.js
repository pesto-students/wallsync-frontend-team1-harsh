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
import ReportForm from "./components/report/ReportForm";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Settings = () => {
	return (
		<div>
			<Header className="headerAvatar" />
			<div className="settingsBody">
				<div className="navigation">
					<Nav />
				</div>
				<div className="settingsDashBoard">
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
									<span>Contact Us : &nbsp;</span>
									<a href = "mailto: wallsyncapp@gmail.com">wallsyncapp@gmail.com</a>
									<p>We will respond to all the queries as soon as possible</p>
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
								<ReportForm />
								// <>
								// 	<textarea placeholder="Report Any Issue"></textarea>
								// 	<br />
								// 	<button>Submit</button>
								// </>
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
						<Button buttonName="Sign Out" className="settingsSignOutButton" />
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Settings;
