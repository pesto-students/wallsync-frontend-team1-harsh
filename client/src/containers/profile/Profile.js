import React from "react";
import "./profile.css";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Button from "../../components/button/Button";
import { Icon, IconButton } from "@mui/material";
import Avatar from "../../components/avatar/Avatar";
import Footer from '../../components/footer/Footer'
const Profile = () => {
  return (
    <div>
      <Header className="headerAvatar" children={<Avatar />} />
      <div className="settingsBody">
        <div className="navigation">
          <Nav />
        </div>
        <div className="mainDashBoard">
          <div className="board">
		  <form action="" className="profileForm">
            <img src="" alt="" />
			<input type="text" name="" id="" placeholder="UserName" />
			<input type="Number" name="" id="" placeholder="9999988888" />
			<input type="Number" name="" id="" placeholder="570009" />
			<input type="email" name="" id="" placeholder="user@test.com" />
			<input type="text" name="" id="" placeholder="India" />
		  </form>
          </div>
        </div>
      </div>
	  <Footer></Footer>
    </div>
  );
};

export default Profile;
