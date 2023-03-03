import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";
const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem("user")) || null,
	isFetching: null,
	isSignedIn: false,
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

		default:
			return { ...state };
	}
};

export default AuthenticationReducer;
