import {
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
const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem("user")) || null,
	isFetching: null,
	isSignedIn: JSON.parse(localStorage.getItem("user")) ? true : false,
	error: null,
};
const AuthenticationReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				user: null,
				isFetching: true,
				error: false,
				isSignedIn: false,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload,
				isFetching: false,
				isSignedIn: true,
				error: false,
			};
		case LOGIN_FAILURE:
			return {
				user: null,
				isFetching: false,
				isSignedIn: false,
				error: action.payload,
			};
		case LOGOUT_START:
			return {
				user: null,
				isFetching: false,
				error: false,
				isSignedIn: false,
			};
		case UPDATE_USER_REQUEST:
			return {
				...state,
				isFetching: true,
				isSignedIn: true,
				error: false,
			};

		case UPDATE_USER_SUCCESS:
			const updatedUserData = { ...state.user };
			updatedUserData.firstName = action.payload.firstName;
			updatedUserData.lastName = action.payload.lastName;
			updatedUserData.phone = action.payload.phone;
			updatedUserData.email = action.payload.email;
			updatedUserData.zip = action.payload.zip;

			return {
				...state,
				isFetching: false,
				isSignedIn: true,
				error: false,
				user: updatedUserData,
			};
		case UPDATE_USER_FAILURE:
			return {
				...state,
				isFetching: false,
				isSignedIn: true,
				error: action.payload,
			};
		case UPDATE_PP_REQUEST:
			return {
				...state,
				isFetching: true,
				isSignedIn: true,
				error: false,
			};

		case UPDATE_PP_SUCCESS:
			return {
				...state,
				isFetching: false,
				isSignedIn: true,
				error: false,
				user: action.payload,
			};
		case UPDATE_PP_FAILURE:
			return {
				...state,
				isFetching: false,
				isSignedIn: true,
				error: action.payload,
			};
		default:
			return { ...state };
	}
};

export default AuthenticationReducer;
