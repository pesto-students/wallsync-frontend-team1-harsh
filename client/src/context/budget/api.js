import {
	fetchBudgetFailure,
	fetchBudgetSuccess,
	fetchBudgetRequest,
	addExpenseRequest,
	addExpenseFailure,
	addExpenseSuccess,
} from "./actions";
import axios from "axios";

export const getBudget = () => {
	return (dispatch) => {
		dispatch(fetchBudgetRequest());
		axios
			.get("http://localhost:8000/api/63f361935a6870f14f57389d/budget")
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
				"http://localhost:8000/api/63f361935a6870f14f57389d/addExpense",
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