import {
	REGISTER_REQUEST,
	REGISTER_FAILURE,
	REGISTER_SUCCESS,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_START,
	UPDATE_USER_REQUEST,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAILURE,
	UPDATE_PP_REQUEST,
	UPDATE_PP_SUCCESS,
	UPDATE_PP_FAILURE,
} from "./types";
export const registerRequest = () => {
	return {
		type: REGISTER_REQUEST,
	};
};
export const registerSuccess = (user) => {
	return {
		type: REGISTER_SUCCESS,
		payload: user,
	};
};
export const registerFailure = (error) => {
	return {
		type: REGISTER_FAILURE,
		payload: error,
	};
};
export const loginRequest = () => {
	return {
		type: LOGIN_REQUEST,
	};
};
export const loginSuccess = (user) => {
	return {
		type: LOGIN_SUCCESS,
		payload: user,
	};
};
export const loginFailure = (error) => {
	return {
		type: LOGIN_FAILURE,
		payload: error,
	};
};
export const logoutStart = (error) => {
	return {
		type: LOGOUT_START,
	};
};
export const updateUserRequest = () => {
	return {
		type: UPDATE_USER_REQUEST,
	};
};
export const updateUserSuccess = (user) => {
	// localStorage.setItem(
	// 	"user",
	// 	JSON.stringify({
	// 		...JSON.parse(localStorage.getItem("user")),
	// 		user: user,
	// 	})
	// );
	return {
		type: UPDATE_USER_SUCCESS,
		payload: user,
	};
};
export const updateUserFailure = (error) => {
	return {
		type: UPDATE_USER_FAILURE,
		payload: error,
	};
};
export const updatePPRequest = () => {
	return {
		type: UPDATE_PP_REQUEST,
	};
};
export const updatePPSuccess = (publicId) => {
	return {
		type: UPDATE_PP_SUCCESS,
		payload: publicId,
	};
};
export const updatePPFailure = (error) => {
	return {
		type: UPDATE_PP_FAILURE,
		payload: error,
	};
};
