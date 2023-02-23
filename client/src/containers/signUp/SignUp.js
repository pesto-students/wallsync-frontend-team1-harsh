import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import pic1 from "../../assets/signup.png";
import "./signup.css";
const Signup = () => {
	return (
		<>
			<Header
				className="signupHeader"
				children={<Button buttonName={"Login"} className={"loginB"} />}
			/>
			<div className="signupBody">
				<div className="signupForm">
					<form className="mainform">
						<div className="info">
							<input
								type="text"
								className="first name"
								placeholder="First Name"
							></input>
							<input
								type="text"
								className="last name"
								placeholder="Last Name"
							></input>
						</div>

						<div className="info">
							<input
								type="text"
								className="phone"
								placeholder="Phone Number"
							></input>
							<input type="text" className="email" placeholder="Email"></input>
						</div>
						<div className="info">
							<input
								type="text"
								className="country"
								placeholder="Country"
							></input>
							<input type="text" className="zip" placeholder="Zip"></input>
							<br />
						</div>
						<div className="info">
							<input
								type="password"
								className="password"
								placeholder="enter password"
							></input>
							<br />
							<input
								type="password"
								className="confirmPassword"
								placeholder="Confirm password"
							></input>
						</div>
						<div className="infoLabel">
							<label>
								<input type="checkbox" /> Recieve emails & newsletters from
								WallSync
							</label>
							<label>
								<input type="checkbox" /> I agree to all Terms & Privacy Policy
							</label>
						</div>

						<div className="formSignupButton">
							<Button buttonName="SignUp" className="signUpB" />
						</div>

						<br />
					</form>
				</div>
				<div className="signupImages">
					<img src={pic1} alt="" />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Signup;
