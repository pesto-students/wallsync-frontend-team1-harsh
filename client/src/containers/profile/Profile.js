import React, { useState } from "react";
import "./profile.css";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Button from "../../components/button/Button";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import cloudinaryConfig from "../../components/cloudinaryConfig";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { Icon, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import profile from "../../assets/profile.png";

const Profile = () => {
	const profileData = useSelector((state) => state.authentication.user.user);
	const profilePic = useSelector(
		(state) => state.authentication.user.user.profilePicture
	);

	const cld = new Cloudinary({
		cloud: {
			cloudName: cloudinaryConfig.cloud_name,
			secure: true,
		},
	});
	console.log(profileData);
	return (
		<div>
			<Header className="headerAvatar" />
			<div className="settingsBody">
				<Nav />
				<div className="profileDashBoard">
					<label className="changeDp">
						{profilePic ? (
							<AdvancedImage
								className="editDp"
								cldImg={cld
									.image(profilePic.public_id)
									.resize(scale().width(250).height(250))}
							/>
						) : (
							<AccountCircleIcon className="editDp" />
						)}
						<input
							type="file"
							id="fileInput"
							accept=".jpg, .jpeg, .png"
							style={{ display: "none" }}
							// onChange={handleFileChange}
						/>
					</label>

					<form action="" className="profileForm">
						<input
							type="text"
							name="name"
							id="name"
							placeholder={profileData && profileData.firstName}
						/>
						<input
							type="text"
							name="name"
							id="name"
							placeholder={profileData && profileData.lastName}
						/>
						<input
							type="Number"
							name=""
							id=""
							placeholder={profileData && profileData.phone}
						/>
						<input
							type="Number"
							name=""
							id=""
							placeholder={profileData && profileData.zip}
						/>
						<input
							type="email"
							name=""
							id=""
							placeholder={profileData && profileData.email}
						/>
						<input type="text" name="" id="" placeholder="India" />
						<Button className="updateB" buttonName="Update" />
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
