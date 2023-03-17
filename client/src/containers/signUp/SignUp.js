import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import pic1 from "../../assets/signup.png";
import axios from "axios";
import "./signup.css";
import { Link } from "react-router-dom";
import GoogleB from "../../components/GB/Google";
import LandingHeader from "../../components/header/LangingHeader";
import { useDispatch } from "react-redux";
import { register } from "../../context/authentication/api";
import { useNavigate } from "react-router-dom";
const Signup = () => {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		zip: "",
		password: "",
		confirmPassword: "",
	});
	const dispatch = useDispatch();
	const handleChange = (e) => {
		setUserInfo({
			...userInfo,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		console.log("tryuing to sign in");
		e.preventDefault();
		const {
			firstName,
			lastName,
			phone,
			email,
			zip,
			password,
			confirmPassword,
		} = userInfo;
		if (userInfo.password !== userInfo.confirmPassword) {
			alert("re-enter correct password");
		} else {
			dispatch(
				register({
					firstName,
					lastName,
					phone,
					email,
					zip,
					password,
				})
			);
		}
		setUserInfo({
			firstName: "",
			lastName: "",
			phone: "",
			email: "",
			zip: "",
			password: "",
			confirmPassword: "",
		});
	};
	return (
		<div className="sign">
			<LandingHeader
				className="signupHeader"
				children={
					<Link to="/login">
						<Button buttonName={"Login"} className={"loginB"} />
					</Link>
				}
			/>

			<div className="signupBody">
				<div className="signupForm">
					<form onSubmit={(e) => handleSubmit(e)} className="mainform">
						<div className="info">
							<input
								type="text"
								className="first name"
								value={userInfo.firstName}
								placeholder="firstName"
								name="firstName"
								onChange={(e) => handleChange(e)}
							></input>
							<input
								type="text"
								className="last name"
								placeholder="lastName"
								name="lastName"
								value={userInfo.lastName}
								onChange={(e) => handleChange(e)}
							></input>
						</div>

						<div className="info">
							<input
								type="text"
								className="phone"
								placeholder="phone"
								name="phone"
								value={userInfo.phone}
								onChange={(e) => handleChange(e)}
							></input>
							<input
								type="text"
								className="email"
								value={userInfo.email}
								placeholder="email"
								name="email"
								onChange={(e) => handleChange(e)}
							></input>
						</div>
						<div className="info">
							<input
								type="text"
								className="country"
								placeholder="Country"
								value={userInfo.country}
								onChange={(e) => handleChange(e)}
							></input>
							<input
								type="text"
								className="zip"
								placeholder="Zip"
								name="zip"
								value={userInfo.zip}
								onChange={(e) => handleChange(e)}
							></input>
						</div>
						<div className="info">
							<input
								type="password"
								className="password"
								placeholder="enter password"
								name="password"
								value={userInfo.password}
								onChange={(e) => handleChange(e)}
							></input>
							<br />
							<input
								type="password"
								className="confirmPassword"
								placeholder="Confirm password"
								name="confirmPassword"
								value={userInfo.confirmPassword}
								onChange={(e) => handleChange(e)}
							></input>
						</div>
						<div className="infoLabel">
							<div className="infoLabelTick">
								<input type="checkbox" />
								<p> Recieve emails & newsletters from WallSync</p>
							</div>
							<div className="infoLabelTick">
								<input type="checkbox" /*required={true}*/ />
								<p>I Agree to all privacy policies</p>
							</div>
						</div>

						<div className="formSignupButton">
							<Button type="submit" buttonName="SignUp" className="signUpB" />
							or
							<GoogleB />
						</div>
					</form>
				</div>
				<div className="signupImages">
					<img src={pic1} alt="" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Signup;
