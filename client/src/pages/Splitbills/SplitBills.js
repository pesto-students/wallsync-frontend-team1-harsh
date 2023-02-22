import React from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import "./splitbills.css";
const SplitBills = () => {
	return (
		<div>
			<Header />
			<div className="splitBody">
				<Nav />
				<div className="splitDashboard">splitter</div>
			</div>
			<Footer />
		</div>
	);
};

export default SplitBills;
