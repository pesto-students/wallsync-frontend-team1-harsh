import axios from "axios";
import config from "../../config/config";
import {
	getUsersFailure,
	getUsersRequest,
	getUsersSuccess,
	getGroupsRequest,
	getGroupsFailure,
	getGroupsSuccess,
	deleteGroupRequest,
	deleteGroupFailure,
	deleteGroupSuccess,
} from "./actions";

export const getUsers = () => {
	return (dispatch) => {
		dispatch(getUsersRequest());
		axios
			.get(`${config.apiUrl}/admin/${config.getUserId()}/users`)
			.then((data) => {
				dispatch(getUsersSuccess(data.data.users));
			})
			.catch((err) => {
				dispatch(getUsersFailure());
			});
	};
};

export const getGroups = () => {
	return (dispatch) => {
		dispatch(getGroupsRequest());
		axios
			.get(`${config.apiUrl}/admin/${config.getUserId()}/groups`)
			.then((data) => {
				dispatch(getGroupsSuccess(data.data.groups));
			})
			.catch((err) => {
				dispatch(getGroupsFailure());
			});
	};
};

export const deleteGroupFromAdmin = (groupName) => {
	return (dispatch) => {
		dispatch(deleteGroupRequest());
		axios
			.delete(
				`${config.apiUrl}/admin/${config.getUserId()}/deleteGroup/${groupName}`,
				{
					headers: {
						Authorization: JSON.parse(localStorage.getItem("user"))
							.access_token,
					},
				}
			)
			.then((data) => {
				console.log("admin delet group", data);
				dispatch(deleteGroupSuccess(data.data.deletedGroup.groupName));
			})
			.catch((err) => {
				dispatch(deleteGroupFailure());
			});
	};
};
