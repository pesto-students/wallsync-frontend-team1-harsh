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
export const addExpenseSuccess = (expense, savings, total) => {
	return {
		type: ADD_EXPENSE_SUCCESS,
		payload: { expense, savings, total },
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
export const deleteExpenseSuccess = (expenseId, savings) => {
	return {
		type: DELETE_EXPENSE_SUCCESS,
		payload: { expenseId, savings },
	};
};
export const deleteExpenseFailure = (error) => {
	return {
		type: DELETE_EXPENSE_FAILURE,
		payload: error,
	};
};
export const addBudgetRequest = () => {
	return {
		type: ADD_BUDGET_REQUEST,
	};
};
export const addBudgetSuccess = (budget) => {
	return {
		type: ADD_BUDGET_SUCCESS,
		payload: budget,
	};
};
export const addBudgetFailure = (error) => {
	return {
		type: ADD_BUDGET_FAILURE,
		payload: error,
	};
};
export const editExpenseRequest = () => {
	return {
		type: EDIT_EXPENSE_REQUEST,
	};
};
export const editExpenseSuccess = (expenseId, expense, savings, total) => {
	return {
		type: EDIT_EXPENSE_SUCCESS,
		payload: { expenseId, expense, savings, total },
	};
};
export const editExpenseFailure = (error) => {
	return {
		type: EDIT_EXPENSE_FAILURE,
		payload: error,
	};
};
