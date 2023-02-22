import React from "react";
import "./settings.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Button from "../../components/button/Button";
const Settings = () => {
  return (
    <div>
      <Header className="headerAvatar" children={<AccountCircleIcon />} />
      <div className="settingsBody">
        <div className="navigation">
          <Nav />
        </div>
        <div className="settingsInfo">
          <Button buttonName="Sign Out" />
        </div>
      </div>
    </div>
  );
};

export default Settings;
