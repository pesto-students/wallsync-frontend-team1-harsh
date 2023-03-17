import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/home">
          <img src={logo} className="hLogo" alt="" />
        </Link>
        <div className="default">
          <Link to="/home">
            <h1>WALLSYNC</h1>
          </Link>
        </div>
        <div className="headerAvatar">
          <Avatar />
        </div>
      </div>
      <hr className="headerLine" />
    </>
  );
};

export default Header;
