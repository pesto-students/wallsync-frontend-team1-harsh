import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import "./login.css";
import Footer from "../../components/footer/Footer";
import pic1 from "../../assets/login.png";
import Google from "../../components/GB/Google";
import { login } from "../../context/authentication/api";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import LandingHeader from "../../components/header/LangingHeader";
import { useDispatch, useSelector } from "react-redux";

const Login = ({ userData, login }) => {
	const user = useSelector((state) => state.authentication.user);
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
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await dispatch(login(userInfo));
			navigate("/");
		} catch (error) {}
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
							<label>
								<input type="checkbox" /> Keep me signed in
							</label>
							<h5>Forgot Password?</h5>
						</div>

						<div>
							<Button
								buttonName={"Login"}
								className={"loginB"}
								type={"Submit"}
								// disabled={isFetching}
							/>
						</div>
						<span>Or</span>
						<div className="google">
							<Google />
						</div>
						<span>Need an account? SingUp</span>
					</form>
				</div>
			</div>

			<Footer />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		userData: state.user,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		login: (user) => dispatch(login(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
