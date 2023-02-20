import React from "react";
import Button from "../../components/button/Button";
import "./login.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import pic1 from "../../assets/login.png";

const Login = () => {
	function submit() {
		alert("submitted");
	}
	return (
		<>
			<Header
				className="loginHeader"
				children={<Button buttonName={"Sign up"} className={"signupButton"} />}
			/>

			<hr className="topLine" />

			<div className="loginbody">
				<div className="loginimages">
					<img src={pic1} alt="" />
				</div>
				<div className="loginform">
					<form onSubmit={submit}>
						<div className="input">
							<input
								type="text"
								className="email"
								placeholder="enter username or email"
							></input>
							<input
								type="password"
								className="password"
								placeholder="enter password"
							></input>
						</div>
						<div className="check">
							<label>
								<input type="checkbox" /> Keep me signed in
							</label>
							<h5>Forgot Password?</h5>
						</div>

						<div>
							<Button
								buttonName={"Login"}
								className={"login"}
								type={"Submit"}
							/>
						</div>
						<span>Or</span>
						<div className="google">
							<Button
								buttonName={"google"}
								className={"login"}
								type={"Submit"}
							/>
						</div>
						<span>Need an account? SingUp</span>
					</form>
				</div>
			</div>
			<Footer />
			<hr className="line" />
		</>
	);
};

export default Login;
