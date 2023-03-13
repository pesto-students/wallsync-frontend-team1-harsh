import React from "react";
import "./footer.css";
// import "./foot.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";
import {Link} from 'react-router-dom'

const Footer = () => {
	return (
		<>
			<hr className="footerLine" />
			<div className="footer">
				<div className="footer_links">
				<span>WallSync</span>
					<span>|</span>
					<Link to="/profile">
						<span>Account</span>
					</Link>
					<span>|</span>
					<span>Terms & Conditions</span>
				</div>
				<div className="footer_icons">
					<IconButton>
						<InstagramIcon />
					</IconButton>
					<IconButton>
						<FacebookIcon />
					</IconButton>
					<IconButton>
						<TwitterIcon />
					</IconButton>
				</div>
			</div>
		</>
	);
};
export default Footer;
