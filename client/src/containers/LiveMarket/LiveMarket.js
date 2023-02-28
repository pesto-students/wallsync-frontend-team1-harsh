import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import "./livemarket.css";
import axios from "axios";
import Widget from "./components/real-time/RealTimeWidget";
import MarketCarousel from "./components/carousel/MarketCarousel";
const LiveMarket = () => {
	return (
		<div>
			<Header />
			<div className="LiveBody">
				<Nav />
				<div className="LiveDashboard">
					<MarketCarousel />

					<div className="widget">
						<Widget />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default LiveMarket;
