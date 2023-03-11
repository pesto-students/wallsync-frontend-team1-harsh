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
import config from "../../config/config.js";
import axios from "axios";

export const getRepayments = () => {
	return (dispatch) => {
		dispatch(fetchRepaymentRequest());
		axios
			.get(`${config.apiUrl}/user/${config.getUserId()}/repayments`)
			.then((data) => {
				const repayments = data.data;
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
				`${config.apiUrl}/repayment/${config.getUserId()}/addRepayment`,
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
				`${
					config.apiUrl
				}/repayment/${config.getUserId()}/${repaymentId}/editRepayment`,
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
				`${
					config.apiUrl
				}/repayment/${config.getUserId()}/${repaymentId}/deleteRepayment`,
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
