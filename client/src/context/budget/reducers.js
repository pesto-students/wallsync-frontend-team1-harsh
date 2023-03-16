import {
	FETCH_BUDGET_REQUEST,
	FETCH_BUDGET_SUCCESS,
	FETCH_BUDGET_FAILURE,
	ADD_EXPENSE_REQUEST,
	ADD_EXPENSE_SUCCESS,
	ADD_EXPENSE_FAILURE,
	DELETE_EXPENSE_REQUEST,
	DELETE_EXPENSE_SUCCESS,
	DELETE_EXPENSE_FAILURE,
	ADD_BUDGET_REQUEST,
	ADD_BUDGET_SUCCESS,
	ADD_BUDGET_FAILURE,
	EDIT_EXPENSE_REQUEST,
	EDIT_EXPENSE_SUCCESS,
	EDIT_EXPENSE_FAILURE,
} from "./types";

const INITIAL_STATE = {
	loading: true,
	budget: {},
	error: false,
};

const BudgetReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_BUDGET_REQUEST:
			return {
				...state,
				loading: true,
				budget: {},
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
				budget: {},
				error: action.payload,
			};
		case ADD_EXPENSE_REQUEST:
			return {
				loading: true,
				budget: { ...state.budget },
				error: false,
			};
		case ADD_EXPENSE_SUCCESS:
			return {
				loading: false,
				budget: {
					...state.budget,
					savings: [...state.budget.expensesArray, action.payload.savings],
					expensesArray: [
						...state.budget.expensesArray,
						action.payload.expense,
					],
					total: action.payload.total,
				},
				error: false,
			};
		case ADD_EXPENSE_FAILURE:
			return {
				loading: false,
				budget: { ...state.budget },
				error: action.payload,
			};
		case DELETE_EXPENSE_REQUEST:
			return {
				budget: { ...state.budget },
				loading: true,
				error: false,
			};
		case DELETE_EXPENSE_SUCCESS:
			return {
				loading: false,
				error: false,
				budget: {
					...state.budget,
					total: action.payload.total,
					savings: action.payload.savings,
					expensesArray: state.budget.expensesArray.filter(
						(item) => item._id !== action.payload.expenseId
					),
				},
			};
		case DELETE_EXPENSE_FAILURE:
			return {
				budget: { ...state.budget },
				loading: false,
				error: action.payload,
			};
		case ADD_BUDGET_REQUEST:
			return {
				...state,
				loading: true,
				budget: {},
				error: false,
			};
		case ADD_BUDGET_SUCCESS:
			return {
				loading: false,
				budget: action.payload,
				error: false,
			};
		case ADD_BUDGET_FAILURE:
			return {
				loading: false,
				budget: {},
				error: action.payload,
			};
		case EDIT_EXPENSE_REQUEST:
			return {
				loading: true,
				budget: { ...state.budget },
				error: false,
			};
		case EDIT_EXPENSE_SUCCESS:
			return {
				loading: false,
				budget: {
					...state.budget,

					savings: action.payload.savings,
					expensesArray: state.budget.expensesArray.map((item) =>
						item._id === action.payload.expenseId
							? { ...item, ...action.payload.expense }
							: item
					),
					total: action.payload.total,
					savings: action.payload.savings,
				},
				error: false,
			};
		case EDIT_EXPENSE_FAILURE:
			return {
				loading: false,
				budget: { ...state.budget },
				error: action.payload,
			};
		default:
			return state;
	}
};
export default BudgetReducer;
