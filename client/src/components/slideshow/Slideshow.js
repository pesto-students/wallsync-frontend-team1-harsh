import React, { useState, useEffect } from "react";
import "./slideshow.css";
import pic1 from "../../assets/start.png";
import pic2 from "../../assets/2nd.png";
import pic3 from "../../assets/3rd.png";
import pic4 from "../../assets/4th.png";
import pic5 from "../../assets/stocks.png";
import { motion } from "framer-motion";
const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images] = useState([pic1, pic2, pic3, pic4, pic5]);

  const [currentText, setCurrentText] = useState(0);
  const [text] = useState([
    <p>
      Your one stop
      <br />
      app for all
      <br />
      <span className="highlight">FINANCES</span>
    </p>,
    <p>
      Manage your
      <br />
      <span className="highlight">EXPENSES</span>
      <br />
      & Create a
      <br />
      <span className="highlight">BUDGET</span>
    </p>,
    <p>
      Create activities &
      <br />
      <span className="highlight">SPLIT BILLS</span>
    </p>,
    <p>
      Prioritize
      <br />
      <span className="highlight">REPAYMENTS</span>
      & set
      <br />
      <span className="highlight"> REMINDERS</span>
    </p>,
    <p>
      Get
      <br />
      <span className="highlight">LIVE MARKET</span>
      <br />
      data
    </p>,
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage + 1);
      setCurrentText(currentText + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentImage, currentText]);

  return (
    <div className="bodyContainer">
      <motion.div className="slideImage">
        <img
          src={images[currentImage % images.length]}
          alt="Slideshow"
          className={`slideimg slide${currentImage % images.length}`}
        />
      </motion.div>
      <motion.div className="slideText">
        {text[currentText % text.length]}
      </motion.div>
    </div>
  );
};

export default Slideshow;
