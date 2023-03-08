import {
	FETCH_BUDGET_REQUEST,
	FETCH_BUDGET_SUCCESS,
	FETCH_BUDGET_FAILURE,
	ADD_EXPENSE_REQUEST,
	ADD_EXPENSE_SUCCESS,
	ADD_EXPENSE_FAILURE,
	ADD_LIMIT_REQUEST,
	ADD_LIMIT_SUCCESS,
	ADD_LIMIT_FAILURE,
	ADD_INCOME_REQUEST,
	ADD_INCOME_SUCCESS,
	ADD_INCOME_FAILURE,
} from "./types";

const INITIAL_STATE = {
	loading: true,
	budget: [],
	error: false,
};

const budgetReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_BUDGET_REQUEST:
			return {
				...state,
				loading: true,
				budget: [],
				error: false,
			};
		case FETCH_BUDGET_SUCCESS:
			return {
				loading: false,
				budget: action.payload,
				error: false,
			};
		case FETCH_BUDGET_FAILURE:
			return {
				loading: false,
				budget: [],
				error: action.payload,
			};
		case ADD_EXPENSE_REQUEST:
			return {
				...state,
				loading: true,
				budget: [],
				error: false,
			};
		case ADD_EXPENSE_SUCCESS:
			return {
				loading: false,
				budget: [...state.budget, action.payload],
				error: false,
			};
		case ADD_EXPENSE_FAILURE:
			return {
				loading: false,
				budget: [],
				error: action.payload,
			};
		default:
			return state;
	}
};
export default budgetReducer;
