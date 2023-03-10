import {
	FETCH_GROUP_REQUEST,
	FETCH_GROUP_SUCCESS,
	FETCH_GROUP_FAILURE,
	ADD_SHARE_REQUEST,
	ADD_SHARE_SUCCESS,
	ADD_SHARE_FAILURE,
	DELETE_SHARE_REQUEST,
	DELETE_SHARE_SUCCESS,
	DELETE_SHARE_FAILURE,
	ADD_GROUP_REQUEST,
	ADD_GROUP_FAILURE,
	ADD_GROUP_SUCCESS,
	ADD_USER_REQUEST,
	ADD_USER_SUCCESS,
	ADD_USER_FAILURE,
	SIMPLIFY_REQUEST,
	SIMPLIFY_SUCCESS,
	SIMPLIFY_FAILURE,
} from "./types";

const INITIAL_STATE = {
	loading: true,
	group: [],
	simplified: [],
	error: false,
};

const groupReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_GROUP_REQUEST:
			return {
				...state,
				loading: true,
				group: [],
				error: false,
			};
		case FETCH_GROUP_SUCCESS:
			return {
				loading: false,
				group: action.payload,
				error: false,
			};
		case FETCH_GROUP_FAILURE:
			return {
				loading: false,
				group: [],
				error: action.payload,
			};
		case ADD_SHARE_REQUEST:
			return {
				...state,
				loading: true,
				group: [],
				error: false,
			};
		case ADD_SHARE_SUCCESS:
			return {
				loading: false,
				group: [...state.group, action.payload],
				error: false,
			};
		case ADD_SHARE_FAILURE:
			return {
				loading: false,
				group: [],
				error: action.payload,
			};
		case DELETE_SHARE_REQUEST:
			return {
				...state,
				loading: true,
				error: false,
			};
		case DELETE_SHARE_SUCCESS:
			return {
				loading: false,
				group: state.group.group.map((i) => {
					i.contributions.filter((item) => item.id !== action.payload);
				}),

				error: false,
			};
		case DELETE_SHARE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case ADD_GROUP_REQUEST:
			return {
				...state,
				loading: true,
				group: [],
				error: false,
			};
		case ADD_GROUP_SUCCESS:
			return {
				loading: false,
				group: [...state.group.group, action.payload],
				error: false,
			};
		case ADD_GROUP_FAILURE:
			return {
				loading: false,
				group: [],
				error: action.payload,
			};
		case ADD_USER_REQUEST:
			return {
				...state,
				loading: true,
				group: [...state.group],
				error: false,
			};
		case ADD_USER_SUCCESS:
			// let x = state;
			// x.group.map((i) => {
			// 	if (i.groupName === action.payload.groupName) {
			// 		i.groupMembers = action.payload.user;
			// 	}
			// });
			return {
				loading: false,
				group: [...state.group, action.payload],
				error: false,
			};
		case ADD_USER_FAILURE:
			return {
				loading: false,
				group: [...state.group],
				error: action.payload,
			};
		case SIMPLIFY_REQUEST:
			return {
				...state,
				loading: true,
				group: [...state.group],
				error: false,
			};
		case SIMPLIFY_SUCCESS:
			return {
				loading: false,
				group: [...state.group],
				simplified: action.payload,
				error: false,
			};
		case SIMPLIFY_FAILURE:
			return {
				loading: false,
				group: [...state.group],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default groupReducer;
