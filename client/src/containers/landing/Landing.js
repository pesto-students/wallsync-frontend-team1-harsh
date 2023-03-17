import React from "react";
import Button from "../../components/button/Button";
import LandingHeader from "../../components/header/LangingHeader";
import Slideshow from "../../components/slideshow/Slideshow";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landingHeader">
        <LandingHeader
          className="landingButtons"
          children={[
            <Link to="/login">
              <Button buttonName="Login" className="loginB" />
            </Link>,
            <Link to="/signup">
              <Button buttonName="Sign up" className="signUpB" />
            </Link>,
          ]}
        />
      </div>
      {/* <Nav /> */}
      <Slideshow />
      <Footer />
    </div>
  );
};

export default Landing;
