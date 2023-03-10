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
// const userId = JSON.parse(localStorage.getItem("user")).user.id;

export const getGroups = () => {
	return (dispatch) => {
		dispatch(fetchGroupRequest());
		axios
			.get("http://localhost:8000/api/user/63f361935a6870f14f57389d/groups")
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
//work under progess
export const addShare = (groupName, share) => {
	return (dispatch) => {
		dispatch(addShareRequest());
		axios
			.post(
				`http://localhost:8000/api/contribution/63f361935a6870f14f57389d/${groupName}/addCont`,
				share,
				{
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
					},
				}
			)
			.then((data) => {
				dispatch(addShareSuccess(groupName, share));
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
				`http://localhost:8000/api/contribution/63f361935a6870f14f57389d/${groupName}/${contributionId}/deleteCont`,
				{
					headers: {
						Authorization: JSON.parse(localStorage.getItem("user"))
							.access_token,
					},
				}
			)
			.then(() => {
				dispatch(deleteShareSuccess(groupName, contributionId));
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
			.post(
				`http://localhost:8000/api/group/63f361935a6870f14f57389d/createGroup`,
				group,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then(() => {
				dispatch(addGroupSuccess(group));
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
				`http://localhost:8000/api/group/63f361935a6870f14f57389d/${groupName}/adduser`,
				user,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((data) => {
				console.log("checking add user data", data);

				dispatch(addUserSuccess(groupName, data.data.members));
			})
			.catch((err) => {
				console.log("?????", err);
				dispatch(addUserFailure(err));
			});
	};
};
export const simplify = (groupName) => {
	return (dispatch) => {
		dispatch(simplifyRequest());
		axios
			.get(
				`http://localhost:8000/api/group/63f361935a6870f14f57389d/${groupName}/settle/equal`
			)
			.then((data) => {
				dispatch(simplifySuccess(data.data.simplified));
			})
			.catch((err) => {
				dispatch(simplifyFailure(err));
			});
	};
};
