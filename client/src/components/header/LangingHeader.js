import "./landingHeader.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const LandingHeader = ({ children, className }) => {
  return (
    <>
      <div className="lHeader">
        <div className="lDefault">
          <Link to="/home">
            <img src={logo} className="lLogo" alt="" />
          </Link>
          <Link to="/home">
            <h1>WALLSYNC</h1>
          </Link>
        </div>
        <hr className="MobileLine" />
        <div className={className}>{children}</div>
      </div>
      <hr className="topLine" />
    </>
  );
};

export default LandingHeader;
