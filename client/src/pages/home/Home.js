import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Panel from "../../components/panel/Panel";
import "./home.css";
import pic1 from "../../assets/group.png";
import pic2 from "../../assets/expenseManager.png";
import pic3 from "../../assets/repayments.png";
import pic4 from "../../assets/stockCheck.png";
import Nav from "../../components/nav/Nav";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="homeBody">
        <div className="navigation">
          <Nav />
        </div>
        <div className="mainPanel">
          <Panel
            panelLogo={pic1}
            panelName="Add an activiy"
            panelData="goaTrip"
            panelClass="cardPanel"
          />
          {/* <br /> */}
          <Panel panelLogo={pic2} panelClass="cardPanel" />
          {/* <br /> */}
          <Panel panelLogo={pic3} panelClass="cardPanel" />
          {/* <br /> */}
          <Panel panelLogo={pic4} panelClass="cardPanel" />
          {/* <br /> */}
        </div>
      </div>
      
      <div className="homeFooter">
      <hr />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
