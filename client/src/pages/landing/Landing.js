import React from "react";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Slideshow from "../../components/slideshow/Slideshow";
import Footer from "../../components/footer/Footer";

import "./landing.css";
const Landing = () => {
	return (
		<div className="landing">
			<div className="landingHeader">
				<Header
					className="components"
					children={[
						<Button buttonName={"Login"} />,
						<Button buttonName={"Sign up"} />,
					]}
				/>
			</div>
			<Slideshow />
			<Footer />
		</div>
	);
};

export default Landing;
