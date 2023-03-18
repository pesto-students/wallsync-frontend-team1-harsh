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
	addBudgetRequest,
	addBudgetSuccess,
	addBudgetFailure,
	editExpenseRequest,
	editExpenseSuccess,
	editExpenseFailure,
	editBudgetRequest,
	editBudgetSuccess,
	editBudgetFailure,
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
export const addExpense = (id,expense) => {
	return (dispatch) => {
		dispatch(addExpenseRequest());
		axios
			.post(
				`${config.apiUrl}/budget/${id}/addExpense`,
				expense,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((data) => {
				dispatch(
					addExpenseSuccess(
						id,
						data.data.newTransaction,
						data.data.savings,
						data.data.total
					)
				);
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

				dispatch(
					deleteExpenseSuccess(
						data.data.deletedId,
						data.data.savings,
						data.data.total
					)
				);
			})
			.catch((err) => {
				dispatch(deleteExpenseFailure(err));
			});
	};
};
export const addBudget = (budget) => {
	return (dispatch) => {
		dispatch(addBudgetRequest());
		axios
			.post(`${config.apiUrl}/budget/${config.getUserId()}/addBudget`, budget, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((data) => {
				console.log("new budget datsss", data);
				dispatch(
					addBudgetSuccess({ income: data.data.income, limit: data.data.limit })
				);
			})
			.catch((err) => {
				dispatch(addBudgetFailure(err));
			});
	};
};
export const editExpense = (expenseId, expense) => {
	return (dispatch) => {
		dispatch(editExpenseRequest());
		axios
			.put(
				`${
					config.apiUrl
				}/budget/${config.getUserId()}/${expenseId}/editExpense`,
				expense,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: JSON.parse(localStorage.getItem("user"))
							.access_token,
					},
				}
			)
			.then((data) => {
				console.log("edited expenseeee", data);
				dispatch(
					editExpenseSuccess(
						data.data.newTransaction._id,
						data.data.newTransaction,
						data.data.savings,
						data.data.total
					)
				);
			})
			.catch((err) => {
				dispatch(editExpenseFailure());
			});
	};
};
export const editBudget = (id, data) => {
	return (dispatch) => {
		dispatch(editBudgetRequest());
		axios
			.put(`${config.apiUrl}/budget/${id}/editBudget`, data, {
				headers: {
					"Content-Type": "application/json",
					Authorization: JSON.parse(localStorage.getItem("user")).access_token,
				},
			})
			.then((data) => {
				console.log("edited budget", data);
				dispatch(editBudgetSuccess(id, data.data.updatedBudgetData));
			})
			.catch((err) => {
				dispatch(editBudgetFailure());
			});
	};
};
