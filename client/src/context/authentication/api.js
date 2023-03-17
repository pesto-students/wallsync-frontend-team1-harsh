import {
	loginRequest,
	loginSuccess,
	loginFailure,
	logoutStart,
	updateUserRequest,
	updateUserSuccess,
	updateUserFailure,
	updatePPRequest,
	updatePPFailure,
	updatePPSuccess,
	registerRequest,
	registerSuccess,
	registerFailure,
} from "./actions";
import axios from "axios";
import config from "../../config/config";
export const register = (user) => {
	return (dispatch) => {
		dispatch(registerRequest());
		axios
			.post(`${config.apiUrl}/register`, user, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				console.log("trying to register", res.data);
				dispatch(registerSuccess(res.data.userdata));
			})
			.catch((err) => {
				console.log(err);
				dispatch(registerFailure());
			});
	};
};
export const login = (user) => {
	return (dispatch) => {
		dispatch(loginRequest());

		return axios
			.post(`${config.apiUrl}/login`, user)
			.then((data) => {
				const user = data.data;
				data.data.access_token && dispatch(loginSuccess(user));
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
export const updateUser = (user) => {
	return (dispatch) => {
		dispatch(updateUserRequest());
		axios
			.put(`${config.apiUrl}/user/${config.getUserId()}/update`, user, {
				headers: {
					"Content-Type": "application/json",
					Authorization: JSON.parse(localStorage.getItem("user")).access_token,
				},
			})
			.then((data) => {
				console.log("updating only user data", data.data.updatedUser);
				dispatch(updateUserSuccess(data.data.updatedUser));
			})
			.catch((err) => {
				dispatch(updateUserFailure(err));
			});
	};
};
export const updatePP = (user) => {
	return (dispatch) => {
		dispatch(updatePPRequest());
		axios
			.put(
				`${config.apiUrl}/user/${config.getUserId()}/updateProfilePicture`,
				user,
				{
					headers: {
						"Content-Type": "multipart/form-data",
						Authorization: JSON.parse(localStorage.getItem("user"))
							.access_token,
					},
				}
			)
			.then((data) => {
				dispatch(
					updatePPSuccess(data.data.updatedUser.profilePicture.public_id)
				);
			})
			.catch((err) => {
				dispatch(updatePPFailure(err));
			});
	};
};
