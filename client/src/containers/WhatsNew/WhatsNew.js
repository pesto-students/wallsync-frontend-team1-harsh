import React from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
// import "./termsConditions.css";
const WhatsNew = () => {
  return (
    <div>
      <Header />
      <div className="termsBody">
        <Nav />
        <div className="termsDashboard">
          <ul>
            <span><strong>Upcoming Features</strong></span>
            <li>
              WallSync users will be able to sync bank accounts and automate
              expense management through SMSs in the upcoming versions. Popular
              payment gateways will be integrated to streamline payment
              processing. This will allow users to easily make payments and
              manage their finances within the app.
            </li>
            <li>
              Wallsync is currently developing a more involved stock monitoring
              system to make smart investments.
			  Ai integration in future versions will help users make smarter investments whilst also providing a wider range of stock market data.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhatsNew;
