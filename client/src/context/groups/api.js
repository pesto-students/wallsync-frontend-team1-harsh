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
	addGroupRequest,
	addGroupSuccess,
	addGroupFailure,
	addUserRequest,
	addUserSuccess,
	addUserFailure,
	simplifyRequest,
	simplifySuccess,
	simplifyFailure,
} from "./actions";
import axios from "axios";
import config from "../../config/config";

// const userId = JSON.parse(localStorage.getItem("user")).user.id;

export const getGroups = () => {
	return (dispatch) => {
		dispatch(fetchGroupRequest());
		axios
			.get(`${config.apiUrl}/user/${config.getUserId()}/groups`)
			.then((data) => {
				const groups = data.data;

				dispatch(fetchGroupSuccess(groups));
			})
			.catch((err) => {
				dispatch(fetchGroupFailure(err));
			});
	};
};

export const addShare = (groupName, share) => {
	return (dispatch) => {
		dispatch(addShareRequest());
		axios
			.post(
				`${
					config.apiUrl
				}/contribution/${config.getUserId()}/${groupName}/addCont`,
				share,
				{
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
					},
				}
			)
			.then((data) => {
				dispatch(addShareSuccess(groupName, data.data.contributions));
			})
			.catch((err) => {
				dispatch(addShareFailure(err));
			});
	};
};
export const deleteShare = (groupName, contributionId) => {
	return (dispatch) => {
		dispatch(deleteShareRequest());
		axios
			.delete(
				`${
					config.apiUrl
				}/contribution/${config.getUserId()}/${groupName}/${contributionId}/deleteCont`,
				{
					headers: {
						Authorization: JSON.parse(localStorage.getItem("user"))
							.access_token,
					},
				}
			)
			.then((data) => {
				dispatch(deleteShareSuccess(groupName, data.data.message));
			})
			.catch((err) => {
				dispatch(deleteShareFailure(err));
			});
	};
};

export const addGroup = (group) => {
	return (dispatch) => {
		dispatch(addGroupRequest());
		axios
			.post(`${config.apiUrl}/group/${config.getUserId()}/createGroup`, group, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((data) => {
				dispatch(addGroupSuccess(data.data));
			})
			.catch((err) => {
				dispatch(addGroupFailure(err));
			});
	};
};
export const addUser = (groupName, user) => {
	return (dispatch) => {
		dispatch(addUserRequest());
		axios
			.post(
				`${config.apiUrl}/group/${config.getUserId()}/${groupName}/adduser`,
				user,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((data) => {
				dispatch(addUserSuccess(groupName, data.data.newUser.firstName));
			})
			.catch((err) => {
				dispatch(addUserFailure(err));
			});
	};
};
export const simplify = (groupName) => {
	return (dispatch) => {
		dispatch(simplifyRequest());
		axios
			.get(
				`${config.apiUrl}/group/${config.getUserId()}/${groupName}/settle/equal`
			)
			.then((data) => {
				dispatch(simplifySuccess(data.data.simplified));
			})
			.catch((err) => {
				dispatch(simplifyFailure(err));
			});
	};
};

export const addPercentageArray = () => {};
