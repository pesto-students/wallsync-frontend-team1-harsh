import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import "./login.css";
import Footer from "../../components/footer/Footer";
import pic1 from "../../assets/login.png";
import Google from "../../components/GB/Google";
import { login } from "../../context/authentication/api";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import LandingHeader from "../../components/header/LangingHeader";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const Login = () => {
  const userData = useSelector((state) => state.authentication);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(userInfo)).then(() => {
      navigate("/home");

      console.log("handling submit");
    });
    // axios
    // 	.post("http://localhost:8000/api/login", userInfo, {
    // 		headers: {
    // 			"Content-Type": "application/json",
    // 		},
    // 	})
    // 	.then((data) => {
    // 		console.log(data.data.access_token);
    // 		localStorage.setItem("user", JSON.stringify(data.data.user));
    // 		if (data.data.access_token) {
    // 			navigate("/home");
    // 		}
    // 	});
  };

  return (
    <>
      <LandingHeader
        className="loginHeader"
        children={
          <Link to="/signup">
            <Button buttonName={"Sign up"} className={"signUpB"} />
          </Link>
        }
      />

      <div className="loginbody">
        <div className="loginimages">
          <img src={pic1} alt="" />
        </div>
        <div className="loginform">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input">
              <input
                type="text"
                className="email"
                placeholder="enter username or email"
                name="email"
                value={userInfo.email}
                onChange={(e) => handleChange(e)}
              ></input>
              <input
                type="password"
                className="password"
                placeholder="enter password"
                name="password"
                value={userInfo.password}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div className="check">
			<p>Keep me Signed in <input type="checkbox"/></p>
              <h5>Forgot Password?</h5>
            </div>

            <div className="thirdLevel">
              <Button
                buttonName={"Login"}
                className={"loginB"}
                type={"Submit"}
              />
              <span>Or</span>
              <Google className="googleButton" />
              <span>Need an account? SignUp</span>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;