import {
	GET_USERS_FAILURE,
	GET_USERS_REQUEST,
	GET_USERS_SUCCESS,
	GET_GROUPS_REQUEST,
	GET_GROUPS_SUCCESS,
	GET_GROUPS_FAILURE,
	DELETE_GROUP_REQUEST,
	DELETE_GROUP_SUCCESS,
	DELETE_GROUP_FAILURE,
} from "./types";

const INITIAL_STATE = {
	users: [],
	groups: [],
	isFetching: null,
	error: null,
};
const AdminReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_USERS_REQUEST:
			return {
				users: [],
				groups: [],
				isFetching: true,
				error: false,
			};
		case GET_USERS_SUCCESS:
			return {
				users: action.payload,
				groups: [],
				isFetching: false,
				error: false,
			};
		case GET_USERS_FAILURE:
			return {
				users: [],
				groups: [],
				isFetching: false,
				error: true,
			};
		case GET_GROUPS_REQUEST:
			return {
				users: [],
				groups: [],
				isFetching: true,
				error: false,
			};
		case GET_GROUPS_SUCCESS:
			return {
				users: [],
				groups: action.payload,
				isFetching: false,
				error: false,
			};
		case GET_GROUPS_FAILURE:
			return {
				users: [],
				groups: [],
				isFetching: false,
				error: true,
			};
		case DELETE_GROUP_REQUEST:
			return {
				...state,
				isFetching: true,
				error: false,
			};
		case DELETE_GROUP_SUCCESS:
			return {
				...state,
				isFetching: false,
				groups: state.groups.filter(
					(item) => item.groupName !== action.payload
				),
				error: false,
			};
		case DELETE_GROUP_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		default:
			return { ...state };
	}
};
export default AdminReducer;
