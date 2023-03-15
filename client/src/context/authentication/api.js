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
} from "./actions";
import axios from "axios";
import config from "../../config/config";
export const login = (user) => {
	return (dispatch) => {
		dispatch(loginRequest());

		return axios
			.post("http://localhost:8000/api/login", user)
			.then((data) => {
				console.log("userrrrr", data);
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
				console.log("updating only user data", data);
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
				console.log("updating", data.data.updatedUser.profilePicture.public_id);
				dispatch(
					updatePPSuccess(data.data.updatedUser.profilePicture.public_id)
				);
			})
			.catch((err) => {
				dispatch(updatePPFailure(err));
			});
	};
};
