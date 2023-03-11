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
	ADD_LIMIT_REQUEST,
	ADD_LIMIT_SUCCESS,
	ADD_LIMIT_FAILURE,
	ADD_INCOME_REQUEST,
	ADD_INCOME_SUCCESS,
	ADD_INCOME_FAILURE,
} from "./types";

export const fetchBudgetRequest = () => {
	return {
		type: FETCH_BUDGET_REQUEST,
	};
};
export const fetchBudgetSuccess = (budget) => {
	return {
		type: FETCH_BUDGET_SUCCESS,
		payload: budget,
	};
};
export const fetchBudgetFailure = (error) => {
	return {
		type: FETCH_BUDGET_FAILURE,
		payload: error,
	};
};
export const addExpenseRequest = () => {
	return {
		type: ADD_EXPENSE_REQUEST,
	};
};
export const addExpenseSuccess = (expense) => {
	return {
		type: ADD_EXPENSE_SUCCESS,
		payload: expense,
	};
};
export const addExpenseFailure = (error) => {
	return {
		type: ADD_EXPENSE_FAILURE,
		payload: error,
	};
};
export const deleteExpenseRequest = () => {
	return {
		type: DELETE_EXPENSE_REQUEST,
	};
};
export const deleteExpenseSuccess = (expenseId) => {
	return {
		type: DELETE_EXPENSE_SUCCESS,
		payload: expenseId,
	};
};
export const deleteExpenseFailure = (error) => {
	return {
		type: DELETE_EXPENSE_FAILURE,
		payload: error,
	};
};
// export const addLimitRequest = () => {
// 	return {
// 		type: ADD_LIMIT_REQUEST,
// 	};
// };
// export const addLimitSuccess = (limit) => {
// 	return {
// 		type: ADD_LIMIT_SUCCESS,
// 		payload: limit,
// 	};
// };
// export const addLimitFailure = (error) => {
// 	return {
// 		type: ADD_LIMIT_FAILURE,
// 		payload: error,
// 	};
// };
// export const addIncomeRequest = () => {
// 	return {
// 		type: ADD_INCOME_REQUEST,
// 	};
// };
// export const addIncomeSuccess = (repayments) => {
// 	return {
// 		type: ADD_INCOME_SUCCESS,
// 		payload: repayments,
// 	};
// };
// export const addIncomeFailure = (error) => {
// 	return {
// 		type: ADD_INCOME_FAILURE,
// 		payload: error,
// 	};
// };
