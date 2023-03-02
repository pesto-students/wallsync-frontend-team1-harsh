import {
	FETCH_GROUP_REQUEST,
	FETCH_GROUP_SUCCESS,
	FETCH_GROUP_FAILURE,
	ADD_SHARE_REQUEST,
	ADD_SHARE_SUCCESS,
	ADD_SHARE_FAILURE,
} from "./types";

const INITIAL_STATE = {
	loading: true,
	group: [],
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

		default:
			return state;
	}
};

export default groupReducer;
