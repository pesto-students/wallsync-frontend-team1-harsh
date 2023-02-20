import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import {IconButton} from '@mui/material';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer_links">
				<span>WallSync |</span>
				<span>Account |</span>
				<span>Terms & Conditions</span>
			</div>
			<div className="footer_icons">
				<InstagramIcon />
				<FacebookIcon />
				<TwitterIcon />
			</div>
		</div>
	);
};
export default Footer;
