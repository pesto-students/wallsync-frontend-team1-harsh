import { loginRequest, loginSuccess, loginFailure } from "./actions";
import axios from "axios";

export const login = (user) => {
	return (dispatch) => {
		dispatch(loginRequest());

		axios
			.post("http://localhost:8000/api/login", user)
			.then((data) => {
				const user = data.data.user;
				user.accessToken && dispatch(loginSuccess(user.user));
				localStorage.setItem("user", JSON.stringify(user));
				console.log("loggggggger", user);
			})
			.catch((err) => {
				dispatch(loginFailure(err));
			});
	};
};
