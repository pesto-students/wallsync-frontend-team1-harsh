import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Panel from "./components/panel/Panel";
import "./home.css";
import pic1 from "../../assets/group.png";
import pic2 from "../../assets/expenseManager.png";
import pic3 from "../../assets/repayments.png";
import pic4 from "../../assets/stockCheck.png";
import Nav from "../../components/nav/Nav";
import Avatar from "../../components/avatar/Avatar";
const Home = () => {
	return (
		<div>
			<Header className="landingButtons" children={<Avatar />} />
			<div className="homeBody">
				<div className="navigation">
					<Nav />
				</div>
				<div className="mainPanel">
					<Panel
						panelLogo={pic1}
						panelName="Add an activiy"
						panelData="goaTrip"
						linkTo="/split"
					/>
					<Panel panelLogo={pic2} linkTo="/budget" />
					<Panel panelLogo={pic3} linkTo="/repayments" />
					<Panel panelLogo={pic4} linkTo="/live-market" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
