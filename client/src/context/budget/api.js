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

export const getBudget = () => {
	return (dispatch) => {
		dispatch(fetchBudgetRequest());
		axios
			.get("http://localhost:8000/api/user/63f361935a6870f14f57389d/budget")
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
				"http://localhost:8000/api/budget/63f361935a6870f14f57389d/addExpense",
				expense,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((data) => {
				addExpenseSuccess(data);
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
				`http://localhost:8000/api/budget/63f361935a6870f14f57389d/${expenseId}/deleteExpense`,
				{
					headers: {
						Authorization: JSON.parse(localStorage.getItem("user"))
							.access_token,
					},
				}
			)
			.then(() => {
				dispatch(deleteExpenseSuccess(expenseId));
			})
			.catch((err) => {
				dispatch(deleteExpenseFailure(err));
			});
	};
};
