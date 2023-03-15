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
import { updateUser, updatePP } from "../../context/authentication/api";

const Profile = () => {
	const [editedFirstName, setEditedFirstName] = useState("");
	const [editedLastName, setEditedLastName] = useState("");
	const [editedPhone, setEditedPhone] = useState("");
	const [editedZip, setEditedZip] = useState("");
	const [editedEmail, setEditedEmail] = useState("");
	const [editedProfilePicture, setEditedProfilePicture] = useState("");
	const [previewUrl, setPreviewUrl] = useState("");

	const profileData = useSelector((state) => state.authentication.user.user);
	// const profilePic = useSelector(
	// 	(state) => state.authentication.user.user.profilePicture
	// );
	const profilePic = profileData ? profileData.profilePicture : null;
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
		const reader = new FileReader();
		reader.readAsDataURL(editedProfilePicture);
		reader.onloadend = () => {
			setPreviewUrl(reader.result);
		};
		const formData = new FormData();
		// formData.append("file", editedProfilePicture);
		formData.append("profilePicture", editedProfilePicture);

		try {
			dispatch(updatePP(formData));

			setEditedProfilePicture(null);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<Header className="headerAvatar" />
			<div className="profileBody">
				<Nav />
				<div className="profileDashBoard">
					<label className="changeDp">
						{previewUrl ? (
							<img
								src={previewUrl}
								alt="Profile preview"
								className="profilePreviewImg"
							/>
						) : profilePic ? (
							<AdvancedImage
								key={profilePic && profilePic.public_id}
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
						<Button
							onClick={handleImageUpload}
							buttonName="upload picture"
							className="handleImageUpload"
						/>
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
