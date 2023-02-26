import React, { useState, useContext } from "react";
import Button from "../../components/button/Button";
import "./login.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import pic1 from "../../assets/login.png";
import Google from "../../components/GB/Google";
import axios from "axios";
import { login } from "../../context/auth/apiCall";
import { AuthContext } from "../../context/auth/AuthContext";

const Login = () => {
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
	});
	const [loggedUser, setLoggedUser] = useState([]);
	const { isFetching, dispatch } = useContext(AuthContext);
	const handleChange = (e) => {
		setUserInfo({
			...userInfo,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		login(userInfo, dispatch);

		// axios
		// 	.post("http://localhost:8000/api/login", userInfo)
		// 	.then((res) => {
		// 		console.log(res.data);
		// 		if (res.data.accessToken) {
		// 			window.localStorage.setItem("user", res.data);
		// 			setLoggedUser(res.data);
		// 		}

		// 		return res.data;
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	};
	console.log(loggedUser);

	return (
		<>
			<Header
				className="loginHeader"
				children={<Button buttonName={"Sign up"} className={"signUpB"} />}
			/>

			<hr className="topLine" />

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
								disabled={isFetching}
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

export default Login;
