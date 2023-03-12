import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_START,
	UPDATE_USER_REQUEST,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAILURE,
} from "./types";
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
	return {
		type: UPDATE_USER_SUCCESS,
		payload: user,
	};
};
export const updateUserFailure = (error) => {
	return {
		type: UPDATE_USER_FAILURE,
	};
};
