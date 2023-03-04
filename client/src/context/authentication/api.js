import { loginRequest, loginSuccess, loginFailure } from "./actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const login = (user) => {
	return (dispatch) => {
		dispatch(loginRequest());

		axios
			.post("http://localhost:8000/api/login", user)
			.then((data) => {
				const user = data.data.user;
				user.accessToken && dispatch(loginSuccess(user.user));
				localStorage.setItem("user", JSON.stringify(user));
			})
			.catch((err) => {
				dispatch(loginFailure(err));
			});
	};
};
