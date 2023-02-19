import React, { useState, useEffect } from "react";
import "./slideshow.css";
import pic1 from "../../assets/wallet.png";
import pic2 from "../../assets/budget.png";
import pic3 from "../../assets/group.png";
import pic4 from "../../assets/calculation.png";
import pic5 from "../../assets/stocks.png";
const Slideshow = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [images] = useState([pic1, pic2, pic3, pic4, pic5]);

	const [currentText, setCurrentText] = useState(0);
	const [text] = useState([
		<p>
			YOUR ONE STOP APP FOR ALL
			<span style={{ color: "#FF0000" }}>FINANCES</span>
		</p>,
		// <p>
		// 	YOUR ONE STOP APP FOR ALL
		// 	<span style={{ color: "#FF0000" }}>FINANCES</span>
		// </p>,
		// <p>
		// 	YOUR ONE STOP APP FOR ALL
		// 	<span style={{ color: "#FF0000" }}>FINANCES</span>
		// </p>,
		// <p>
		// 	YOUR ONE STOP APP FOR ALL
		// 	<span style={{ color: "#FF0000" }}>FINANCES</span>
		// </p>,
		// <p>
		// 	YOUR ONE STOP APP FOR ALL
		// 	<span style={{ color: "#FF0000" }}>FINANCES</span>
		// </p>,

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
