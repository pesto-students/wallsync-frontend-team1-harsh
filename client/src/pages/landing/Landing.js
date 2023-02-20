import React from "react";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Slideshow from "../../components/slideshow/Slideshow";
import Footer from "../../components/footer/Footer";

import "./landing.css";
import Nav from "../../components/nav/Nav";
const Landing = () => {
	return (
		<div className="landing">
			<div className="landingHeader">
				<Header
					className="landingButtons"
					children={[
						<Button buttonName={"Login"} />,
						<Button buttonName={"Sign up"} />,
					]}
				/>
			</div>
			<Nav/>
			<Slideshow />
			<Footer />
		</div>
	);
};

export default Landing;
