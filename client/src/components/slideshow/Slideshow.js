import React, { useState, useEffect } from "react";
import "./slideshow.css";
import pic1 from "../../assets/wallet.png";

const Slideshow = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [images] = useState([pic1]);

	const [currentText, setCurrentText] = useState(0);
	const [text] = useState([
		"YOUR ONE STOP APP FOR ALL FINANCES",
		"MANAGE YOUR EXPENSES & CREATE A BUDGET",
		"CREATE ACTIVITIES & SPLIT BILLS",
		"PRIORITIZE REPAYMENTS & SET REMINDERS",
		"GET LIVE MARKET DATA",
	]);
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage(currentImage + 1);
			setCurrentText(currentText + 1);
		}, 2000);
		return () => clearInterval(interval);
	}, [currentImage, currentText]);

	return (
		<div className="bodyContainer">
			<div className="slideImage">
				<img
					src={images[currentImage % images.length]}
					alt="Slideshow"
					className="slideshow"
				/>
			</div>
			<div className="slideText">{text[currentText % text.length]}</div>
		</div>
	);
};

export default Slideshow;
