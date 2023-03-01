import React,{useState} from "react";
import "./profile.css";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Button from "../../components/button/Button";
import { Icon, IconButton } from "@mui/material";
import Avatar from "../../components/avatar/Avatar";
import Footer from "../../components/footer/Footer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import profile from "../../assets/profile.png";
const Profile = () => {
	const [data, setData] = useState([]);
  const sfoiensd = window.localStorage.getItem('user')
  console.log(sfoiensd)
	return (
		<div>
			<Header className="headerAvatar" children={<Avatar />} />
			<div className="settingsBody">
				<Nav />
				<div className="profileDashBoard">
					<AccountCircleIcon />
					<form action="" className="profileForm">
						<input type="text" name="" id="" placeholder="UserName" />
						<input type="Number" name="" id="" placeholder="9999988888" />
						<input type="Number" name="" id="" placeholder="570009" />
						<input type="email" name="" id="" placeholder="user@test.com" />
						<input type="text" name="" id="" placeholder="India" />
					</form>
					<img
						className="profileEditImg"
						src={profile}
						alt="profile edit Img"
					></img>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Profile;
