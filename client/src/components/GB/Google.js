import { GoogleLogin } from "@react-oauth/google";
import React, { useState, useEffect } from "react";

import { useGoogleOneTapLogin, useGoogleLogin } from "@react-oauth/google";

import jwt_decode from "jwt-decode";

const GoogleB = () => {
	const [user, setUser] = useState({});

	useGoogleOneTapLogin({
		onSuccess: (credentialResponse) => {
			const data = jwt_decode(credentialResponse.credential);
			console.log(data);
			setUser(data);
		},
		onError: () => {
			console.log("Login Failed");
		},
	});

	return (
		<div>
			<GoogleLogin
				onSuccess={(credentialResponse) => {
					console.log(credentialResponse);
					const data = jwt_decode(credentialResponse.credential);
					setUser(data);
				}}
				onError={() => {
					console.log("Login Failed");
				}}
				useOneTap
			/>
			{/* 
      <p>{user.name}</p>
      <p>{user.email}</p>
      <img src={user.picture} alt="" /> */}
			{/* <button onClick={handleLogout}>logout</button> */}
		</div>
	);
};
export default GoogleB;
