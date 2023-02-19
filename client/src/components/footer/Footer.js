import React from "react";
import "./footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
	return <div className="footer">
		<div className="footernav">
				<span>WallSync |</span>
				<span>Account |</span>
				<span>Terms & Service</span>
		<div className="footericons">
				<InstagramIcon/>
				<FacebookIcon/>
				<TwitterIcon/>
		</div>
		</div>
	</div>;
};
export default Footer;