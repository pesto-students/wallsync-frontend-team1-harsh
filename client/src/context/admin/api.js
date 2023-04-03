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
	deleteUserRequest,
	deleteUserFailure,
	deleteUserSuccess,
	editUserRequest,
	editUserSuccess,
	editUserFailure,
	editGroupRequest,
	editGroupSuccess,
	editGroupFailure,
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

export const deleteUserFromAdmin = (email) => {
	return (dispatch) => {
		dispatch(deleteUserRequest());
		axios
			.delete(`${config.apiUrl}/admin/${config.getUserId()}/delete/${email}`, {
				headers: {
					Authorization: JSON.parse(localStorage.getItem("user")).access_token,
				},
			})
			.then((data) => {
				console.log("admin delet user", data);
				dispatch(deleteUserSuccess(data.data.deletedUser.email));
			})
			.catch((err) => {
				dispatch(deleteUserFailure());
			});
	};
};

export const editUserFromAdmin = (email, user) => {
	return (dispatch) => {
		dispatch(editUserRequest());

		axios
			.put(
				`${config.apiUrl}/admin/${config.getUserId()}/editUser/${email}`,
				user,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: JSON.parse(localStorage.getItem("user"))
							.access_token,
					},
				}
			)
			.then((data) => {
				console.log("editedUseradmin", data.data);
				dispatch(editUserSuccess(email, data.data.editedUser));
			})
			.catch((err) => {
				dispatch(editUserFailure(err));
			});
	};
};

export const editGroupFromAdmin = (groupName, group) => {
	return (dispatch) => {
		dispatch(editGroupRequest());
		axios
			.put(
				`${config.apiUrl}/admin/${config.getUserId()}/editGroup/${groupName}`,
				group,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: JSON.parse(localStorage.getItem("user"))
							.access_token,
					},
				}
			)
			.then((data) => {
				console.log("edit group admin", data.data);
				dispatch(editGroupSuccess(groupName, data.data.editedGroup));
			})
			.catch((err) => {
				dispatch(editGroupFailure(err));
			});
	};
};
