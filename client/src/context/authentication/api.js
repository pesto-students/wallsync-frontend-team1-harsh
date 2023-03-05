import {
	loginRequest,
	loginSuccess,
	loginFailure,
	logoutStart,
} from "./actions";
import axios from "axios";

export const login = (user) => {
	return (dispatch) => {
		dispatch(loginRequest());

		return axios
			.post("http://localhost:8000/api/login", user)
			.then((data) => {
				const user = data.data;
				data.data.access_token && dispatch(loginSuccess(user.user));
				console.log("userrrrr", user.access_token);
				localStorage.setItem("user", JSON.stringify(user));
			})
			.catch((err) => {
				dispatch(loginFailure(err));
			});
	};
};

export const logout = (user) => {
	return (dispatch) => {
		dispatch(logoutStart());
		localStorage.setItem("user", null);
	};
};
