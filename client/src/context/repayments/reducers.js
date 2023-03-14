import {
	FETCH_REPAYMENT_REQUEST,
	FETCH_REPAYMENT_SUCCESS,
	FETCH_REPAYMENT_FAILURE,
	ADD_REPAYMENT_REQUEST,
	ADD_REPAYMENT_SUCCESS,
	ADD_REPAYMENT_FAILURE,
	EDIT_REPAYMENT_REQUEST,
	EDIT_REPAYMENT_SUCCESS,
	EDIT_REPAYMENT_FAILURE,
	DELETE_REPAYMENT_REQUEST,
	DELETE_REPAYMENT_SUCCESS,
	DELETE_REPAYMENT_FAILURE,
} from "./types";
const INITIAL_STATE = {
	loading: true,
	repayment: [],
	error: false,
};

const repaymentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_REPAYMENT_REQUEST:
			return {
				...state,
				loading: true,
				repayment: [],
				error: false,
			};
		case FETCH_REPAYMENT_SUCCESS:
			return {
				loading: false,
				repayment: action.payload,
				error: false,
			};
		case FETCH_REPAYMENT_FAILURE:
			return {
				loading: false,
				repayment: [],
				error: action.payload,
			};
		case ADD_REPAYMENT_REQUEST:
			return {
				...state,
				loading: true,
				repayment: [...state.repayment],
				error: false,
			};
		case ADD_REPAYMENT_SUCCESS:
			return {
				loading: false,
				repayment: [...state.repayment, action.payload],
				error: false,
			};
		case ADD_REPAYMENT_FAILURE:
			return {
				loading: false,
				repayment: [...state.repayment],
				error: action.payload,
			};
		case EDIT_REPAYMENT_REQUEST:
			return {
				...state,
				loading: true,
				repayment: [...state.repayment],
				error: false,
			};
		case EDIT_REPAYMENT_SUCCESS:
			return {
				...state,
				loading: false,
				repayment: state.repayment.map((item) =>
					item._id === action.payload.repaymentId
						? { ...item, ...action.payload.repayment }
						: item
				),

				error: false,
			};
		case EDIT_REPAYMENT_FAILURE:
			return {
				loading: false,
				repayment: [...state.repayment],
				error: action.payload,
			};
		case DELETE_REPAYMENT_REQUEST:
			return {
				...state,
				loading: true,
				error: false,
			};
		case DELETE_REPAYMENT_SUCCESS:
			return {
				loading: false,
				repayment: state.repayment.filter(
					(item) => item._id !== action.payload
				),
				error: false,
			};
		case DELETE_REPAYMENT_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default repaymentReducer;
