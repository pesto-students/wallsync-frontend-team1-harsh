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
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import profile from "../../assets/profile.png";
import { updateUser } from "../../context/authentication/api";

const Profile = () => {
	const [editedFirstName, setEditedFirstName] = useState("");
	const [editedLastName, setEditedLastName] = useState("");
	const [editedPhone, setEditedPhone] = useState("");
	const [editedZip, setEditedZip] = useState("");
	const [editedEmail, setEditedEmail] = useState("");
	const [editedProfilePicture, setEditedProfilePicture] = useState("");
	const profileData = useSelector((state) => state.authentication.user.user);
	const profilePic = useSelector(
		(state) => state.authentication.user.user.profilePicture
	);
	const dispatch = useDispatch();

	const cld = new Cloudinary({
		cloud: {
			cloudName: cloudinaryConfig.cloud_name,
			secure: true,
		},
	});
	const handleEditUser = (e) => {
		e.preventDefault();
		dispatch(
			updateUser({
				firstName: editedFirstName,
				lastName: editedLastName,
				phone: editedPhone,
				email: editedEmail,
				zip: editedZip,
				profilePicture: editedProfilePicture,
			})
		);
		setEditedFirstName("");
		setEditedLastName("");
		setEditedEmail("");
		setEditedPhone("");
		setEditedZip("");
	};

	console.log(profileData);

	const handleImageUpload = async (e) => {
		e.preventDefault();

		if (!editedProfilePicture) {
			return;
		}

		const formData = new FormData();
		formData.append("file", editedProfilePicture);
		formData.append("upload_preset", "wallsync_dp");
		formData.append("cloud_name", cloudinaryConfig.cloud_name);

		try {
			const response = await fetch(
				`https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloud_name}/image/upload`,
				{
					method: "POST",
					body: formData,
				}
			);

			const data = await response.json();

			// Update the Cloudinary resource
			console.log("new pbid", data.public_id);
			dispatch(
				updateUser({
					firstName: editedFirstName,
					lastName: editedLastName,
					phone: editedPhone,
					email: editedEmail,
					zip: editedZip,
					profilePicture: {
						public_id: data.public_id,
						secure_url: data.secure_url,
					},
				})
			);

			// Clear the edited profile picture state
			setEditedProfilePicture(null);
		} catch (error) {
			console.log(error);
		}
	};
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
							onChange={(e) => setEditedProfilePicture(e.target.files[0])}
						/>
						<Button onClick={handleImageUpload} buttonName="upload picture" />
					</label>
					<form onSubmit={handleEditUser} className="profileForm">
						<input
							type="text"
							name="name"
							id="firstname"
							placeholder={profileData && profileData.firstName}
							onChange={(e) => setEditedFirstName(e.target.value)}
						/>
						<input
							type="text"
							name="lastname"
							id="name"
							placeholder={profileData && profileData.lastName}
							onChange={(e) => setEditedLastName(e.target.value)}
						/>
						<input
							type="Number"
							name="phone"
							id=""
							placeholder={profileData && profileData.phone}
							onChange={(e) => setEditedPhone(e.target.value)}
						/>
						<input
							type="Number"
							name="zip"
							id=""
							placeholder={profileData && profileData.zip}
							onChange={(e) => setEditedZip(e.target.value)}
						/>
						<input
							type="email"
							name="email"
							id=""
							placeholder={profileData && profileData.email}
							onChange={(e) => setEditedEmail(e.target.value)}
						/>

						<Button type="submit" className="updateB" buttonName="Update" />
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
