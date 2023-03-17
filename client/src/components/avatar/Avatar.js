import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../context/authentication/api";
import "./avatar.css";
import { useDispatch, useSelector } from "react-redux";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import cloudinaryConfig from "../cloudinaryConfig";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Avatar = () => {
  const dispatch = useDispatch();
  const profileData = useSelector(
    (state) => state.authentication.user && state.authentication.user.user
  );
  const profilePic = profileData ? profileData.profilePicture : null;

  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudinaryConfig.cloud_name,
      secure: true,
    },
  });
  const handleLogout = () => {
    dispatch(logout());

    notify();
  };
  const notify = () => {
    toast("Logged out!");
  };
  return (
    <div className="dropicon">
      {profilePic && profilePic.public_id ? (
        <AdvancedImage
          cldImg={cld
            .image(profilePic.public_id)
            .resize(scale().width(50).height(50))}
        />
      ) : (
        <AccountCircleIcon />
      )}

      <div className="options">
        <Link to="/profile">
          <span type="link">Account</span>
        </Link>
        <Link to="/settings">
          <span>Settings</span>
        </Link>
        <Link to="/">
          <span onClick={() => handleLogout()}>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Avatar;
