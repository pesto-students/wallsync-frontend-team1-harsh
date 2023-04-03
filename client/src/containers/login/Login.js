import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import "./login.css";
import Footer from "../../components/footer/Footer";
import pic1 from "../../assets/1st.png";
import Google from "../../components/GB/Google";
import { login } from "../../context/authentication/api";
import { Link, useNavigate } from "react-router-dom";
import LandingHeader from "../../components/header/LangingHeader";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SimpleBackdrop from "./components/SimpleBackdrop";
const Login = () => {
	const userData = useSelector((state) => state.authentication);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
	});
	const guestInfo = {
		email: "pesto@project.com",
		password: process.env.REACT_APP_guestPassword,
	};

	const handleChange = (e) => {
		setUserInfo({
			...userInfo,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			dispatch(login(userInfo));
			navigate("/home");
			notify();
		} catch (err) {
			toast.error("Login failed");
		}
		setLoading(false);
	};
	const notify = () => {
		toast("Successful login!");
	};
	const handleGuestLogin = (e) => {
		e.preventDefault();

		dispatch(login(guestInfo));
		navigate("/home");
	};
	return (
		<div className="login">
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
					<img src={pic1} alt="Login Image" />
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
							<p>
								Keep me Signed in <input type="checkbox" />
							</p>
							<h5>Forgot Password?</h5>
						</div>

						<div className="thirdLevel">
							<Button
								buttonName={"Login"}
								className={"loginB"}
								type={"Submit"}
							/>
							<span>Or</span>
							{/* <Google className="googleButton" /> */}
							<Button
								className="guestB"
								buttonName="Guest Login"
								onClick={handleGuestLogin}
							/>
							<span>
								Need an account?
								<Link to="/signup">
									<p>&nbsp;Sign Up</p>
								</Link>
							</span>
						</div>
					</form>
				</div>
			</div>

			<Footer />
			<SimpleBackdrop open={loading} />
		</div>
	);
};

export default Login;
