import {
	fetchRepaymentRequest,
	fetchRepaymentSuccess,
	fetchRepaymentFailure,
	addRepaymentRequest,
	addRepaymentSuccess,
	addRepaymentFailure,
	editRepaymentRequest,
	editRepaymentSuccess,
	editRepaymentFailure,
	deleteRepaymentRequest,
	deleteRepaymentSuccess,
	deleteRepaymentFailure,
} from "./actions.js";

import axios from "axios";

// const userId = JSON.parse(localStorage.getItem("user")).user.id;
export const getRepayments = () => {
	return (dispatch) => {
		dispatch(fetchRepaymentRequest());
		axios
			.get("http://localhost:8000/api/user/63f361935a6870f14f57389d/repayments")
			.then((data) => {
				const repayments = data.data;
				// console.log(repayments)
				dispatch(fetchRepaymentSuccess(repayments));
			})
			.catch((err) => {
				dispatch(fetchRepaymentFailure(err));
			});
	};
};
export const addRepayment = (repayment) => {
	return (dispatch) => {
		dispatch(addRepaymentRequest());
		axios
			.post(
				"http://localhost:8000/api/repayment/63f361935a6870f14f57389d/addRepayment",
				repayment,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((data) => {
				dispatch(addRepaymentSuccess(data.data));
			})
			.catch((err) => {
				dispatch(addRepaymentFailure(err));
			});
	};
};
export const editRepayment = (repayment, repaymentId) => {
	return (dispatch) => {
		dispatch(editRepaymentRequest());
		axios
			.put(
				`http://localhost:8000/api/repayment/63f361935a6870f14f57389d/${repaymentId}/editRepayment`,
				repayment,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: JSON.parse(localStorage.getItem("user"))
							.access_token,
					},
				}
			)
			.then((data) => {
				console.log("printing edit repayment data", data);
				dispatch(editRepaymentSuccess(repayment, repaymentId));
			})
			.catch((err) => {
				dispatch(editRepaymentFailure());
			});
	};
};
export const deleteRepayment = (repaymentId) => {
	return (dispatch) => {
		dispatch(deleteRepaymentRequest());
		axios
			.delete(
				`http://localhost:8000/api/repayment/63f361935a6870f14f57389d/${repaymentId}/deleteRepayment`,
				{
					headers: {
						Authorization: JSON.parse(localStorage.getItem("user"))
							.access_token,
					},
				}
			)
			.then(() => {
				dispatch(deleteRepaymentSuccess(repaymentId));
			})
			.catch((err) => {
				dispatch(deleteRepaymentFailure(err));
			});
	};
};
