import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import "./livemarket.css";
// import Button from "../../components/button/Button";
// import Table from "./components/Table";
// import Avatar from "../../components/avatar/Avatar";
import axios from "axios";
// import ExpenseChart from "./components/Chart";

const LiveMarket = () => {
	return (
		<div>
			<Header />
			<div className="LiveBody">
				<Nav />
				<div className="LiveDashboard">
					<iframe
						src={
							"https://in.widgets.investing.com/top-cryptocurrencies?theme=darkTheme"
						}
						width={"100%"}
						height={"100%"}
						frameborder={"0"}
						allowtransparency={"true"}
						marginwidth={"0"}
						marginheight={"0"}
					></iframe>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default LiveMarket;
