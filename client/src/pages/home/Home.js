import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Panel from "../../components/panel/Panel";
import "./home.css";
import pic1 from "../../assets/group.png";
import pic2 from "../../assets/expenseManager.png";
import pic3 from "../../assets/repayments.png";
import pic4 from "../../assets/stockCheck.png";

const Home = () => {
	return (
		<div>
			<Header />
			<Panel panelLogo={pic1} panelName="Add an activiy" panelData="goaTrip" />
			<br />
			<Panel panelLogo={pic2} />
			<br />

			<Panel panelLogo={pic3} />
			<br />

			<Panel panelLogo={pic4} />
			<br />

			<Footer />
		</div>
	);
};

export default Home;
