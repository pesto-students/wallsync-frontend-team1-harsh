import {
	fetchGroupFailure,
	fetchGroupSuccess,
	fetchGroupRequest,
	addShareRequest,
	addShareSuccess,
	addShareFailure,
	deleteShareRequest,
	deleteShareSuccess,
	deleteShareFailure,
} from "./actions";
import axios from "axios";
const userId = JSON.parse(localStorage.getItem("user")).user.id;

export const getGroups = () => {
	return (dispatch) => {
		dispatch(fetchGroupRequest());
		axios
			.get("http://localhost:8000/api/63f361935a6870f14f57389d/groups")
			.then((data) => {
				const groups = data.data;
				// console.log(groups)
				dispatch(fetchGroupSuccess(groups));
			})
			.catch((err) => {
				dispatch(fetchGroupFailure(err));
			});
	};
};
export const addShare = () => {
	return (dispatch) => {
		dispatch(addShareRequest());
	};
};
export const deleteShare = (contributionId) => {
	return (dispatch) => {
		dispatch(deleteShareRequest());
		axios
			.delete(
				`http://localhost:8000/api/${userId}/london/${contributionId}/deleteCont`,
				{
					headers: {
						Authorization: JSON.parse(localStorage.getItem("user"))
							.access_token,
					},
				}
			)
			.then(() => {
				dispatch(deleteShareSuccess(contributionId));
			})
			.catch((err) => {
				dispatch(deleteShareFailure(err));
			});
	};
};
