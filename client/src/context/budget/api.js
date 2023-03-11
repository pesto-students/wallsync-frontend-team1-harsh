import {
	fetchBudgetFailure,
	fetchBudgetSuccess,
	fetchBudgetRequest,
	addExpenseRequest,
	addExpenseFailure,
	addExpenseSuccess,
	deleteExpenseRequest,
	deleteExpenseSuccess,
	deleteExpenseFailure,
} from "./actions";
import axios from "axios";
import config from "../../config/config";
export const getBudget = () => {
	return (dispatch) => {
		dispatch(fetchBudgetRequest());
		axios
			.get(`${config.apiUrl}/user/${config.getUserId()}/budget`)
			.then((data) => {
				const budget = data.data[0];
				dispatch(fetchBudgetSuccess(budget));
			})
			.catch((err) => {
				dispatch(fetchBudgetFailure(err));
			});
	};
};
export const addExpense = (expense) => {
	return (dispatch) => {
		dispatch(addExpenseRequest());
		axios
			.post(
				`${config.apiUrl}/budget/${config.getUserId()}/addExpense`,
				expense,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((data) => {
				dispatch(addExpenseSuccess(data.data.newTransaction));
			})
			.catch((err) => {
				dispatch(addExpenseFailure(err));
			});
	};
};
export const deleteExpense = (expenseId) => {
	return (dispatch) => {
		dispatch(deleteExpenseRequest());
		axios
			.delete(
				`${
					config.apiUrl
				}/budget/${config.getUserId()}/${expenseId}/deleteExpense`,
				{
					headers: {
						Authorization: JSON.parse(localStorage.getItem("user"))
							.access_token,
					},
				}
			)
			.then((data) => {
				console.log("deleteexp data", data);

				dispatch(deleteExpenseSuccess(data.data.deletedId));
			})
			.catch((err) => {
				dispatch(deleteExpenseFailure(err));
			});
	};
};
