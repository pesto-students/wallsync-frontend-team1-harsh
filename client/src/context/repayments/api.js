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

export const getRepayments = () => {
	return (dispatch) => {
		dispatch(fetchRepaymentRequest());
		axios
			.get("http://localhost:8000/api/63f361935a6870f14f57389d/repayments")
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
				"http://localhost:8000/api/63f361935a6870f14f57389d/addRepayment",
				repayment,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((data) => {
				dispatch(addRepaymentSuccess(data));
			})
			.catch((err) => {
				dispatch(addRepaymentFailure(err));
			});
	};
};
export const editRepayment = async (id, dispatch) => {
	dispatch(editRepaymentRequest());
	try {
		await axios.put("" + id, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		dispatch(editRepaymentSuccess(id));
	} catch (err) {
		dispatch(editRepaymentFailure());
	}
};

export const deleteRepayment = (id, dispatch) => {
	dispatch(deleteRepaymentRequest());
	axios
		.delete(`http://localhost:8000/api/63f361935a6870f14f57389d/${id}/delete`)
		.then(() => {
			dispatch(deleteRepaymentSuccess(id));
		})
		.catch((err) => {
			dispatch(deleteRepaymentFailure(err));
		});
};
