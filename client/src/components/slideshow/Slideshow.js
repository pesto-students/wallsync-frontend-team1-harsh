import React, { useState, useEffect } from "react";
import "./slideshow.css";
import pic1 from "../../assets/start.png";
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
			YOUR ONE STOP
			<br />
			APP FOR ALL
			<br />
			<span className="highlight">FINANCES</span>
		</p>,
		<p>
			MANAGE YOUR EXPENSES
			<br />
			& CREATE A
			<br />
			<span className="highlight">BUDGET</span>
		</p>,
		<p>
			CREATE ACTIVITIES &
			<br />
			<span className="highlight">SPLIT BILLS</span>
		</p>,
		<p>
			PRIORITIZE
			<br />
			<span className="highlight">REPAYMENTS</span>
			<br />
			& SET
			<br />
			<span className="highlight"> REMINDERS</span>
		</p>,
		<p>
			GET
			<br />
			<span className="highlight">LIVE MARKET</span>
			<br />
			DATA
		</p>,
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
