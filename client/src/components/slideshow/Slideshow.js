import React, { useState, useEffect } from "react";
import "./slideshow.css";
import pic1 from "../../assets/start.png";
import pic2 from "../../assets/budget.png";
import pic3 from "../../assets/group.png";
import pic4 from "../../assets/calculation.png";
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
      Manage your expenses
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
      <br />
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
    // <motion.div animate={{ opacity: isVisible ? 1 : 0 }}></motion.div>
    <div className="bodyContainer">
      <motion.div
        animate={{ x: [75, 150], opacity: 1, scale: 1 }}
        transition={{
          duration: 4.5,
          delay: 0,
          repeat: Infinity,
          type: "spring",
        }}
        className="slideImage"
      >
        <img
          src={images[currentImage % images.length]}
          alt="Slideshow"
          className="slideshow"
        />
      </motion.div>
      <motion.div
        animate={{ x: [-250, 50], opacity: 1, scale: 1 }}
        transition={{
          duration: 4.5,
          type: "spring",

          delay: 0,
          repeat: Infinity,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        whileHover={{ scale: 1.1 }}
        className="slideText"
      >
        {text[currentText % text.length]}
      </motion.div>
    </div>
  );
};

export default Slideshow;
