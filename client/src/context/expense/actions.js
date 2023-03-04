import {
    FETCH_EXPENSE_REQUEST,
    FETCH_EXPENSE_SUCCESS,
    FETCH_EXPENSE_FAILURE,
    ADD_EXPENSE_REQUEST,
    ADD_EXPENSE_SUCCESS,
    ADD_EXPENSE_FAILURE,
    ADD_LIMIT_REQUEST,
    ADD_LIMIT_SUCCESS,
    ADD_LIMIT_FAILURE,
    ADD_INCOME_REQUEST,
    ADD_INCOME_SUCCESS,
    ADD_INCOME_FAILURE
} from './types';

export const fetchExpenseRequest = () => {
	return {
		type: FETCH_EXPENSE_REQUEST,
	};
};
export const fetchExpenseSuccess = (expenses) => {
	return {
		type: FETCH_EXPENSE_SUCCESS,
		payload: expenses,
	};
};
export const fetchExpensesFailure = (error) => {
	return {
		type: FETCH_EXPENSE_FAILURE,
		payload: error,
	};
};
export const addExpenseRequest = () => {
	return {
		type: ADD_EXPENSE_REQUEST,
	};
};
export const addExpensesSuccess = (expense) => {
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
export const addLimitRequest = () => {
	return {
		type: ADD_LIMIT_REQUEST,
	};
};
export const addLimitSuccess = (limit) => {
	return {
		type: ADD_LIMIT_SUCCESS,
		payload: limit,
	};
};
export const addLimitFailure = (error) => {
	return {
		type: ADD_LIMIT_FAILURE,
		payload: error,
	};
};
export const addIncomeRequest = () => {
	return {
		type: ADD_INCOME_REQUEST,
	};
};
export const addIncomeSuccess = (repayments) => {
	return {
		type: ADD_INCOME_SUCCESS,
		payload: repayments,
	};
};
export const addIncomeFailure = (error) => {
	return {
		type: ADD_INCOME_FAILURE,
		payload: error,
	};
};
// export const deleteRepaymentRequest = () => {
// 	return {
// 		type: DELETE_REPAYMENT_REQUEST,
// 	};
// };
// export const deleteRepaymentSuccess = (repaymentId) => {
// 	return {
// 		type: DELETE_REPAYMENT_SUCCESS,
// 		payload: repaymentId,
// 	};
// };
// export const deleteRepaymentFailure = (error) => {
// 	return {
// 		type: DELETE_REPAYMENT_FAILURE,
// 		payload: error,
// 	};
// };
