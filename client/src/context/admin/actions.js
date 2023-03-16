import {
	GET_USERS_REQUEST,
	GET_USERS_SUCCESS,
	GET_USERS_FAILURE,
	GET_GROUPS_REQUEST,
	GET_GROUPS_SUCCESS,
	GET_GROUPS_FAILURE,
	DELETE_GROUP_REQUEST,
	DELETE_GROUP_SUCCESS,
	DELETE_GROUP_FAILURE,
	DELETE_USER_REQUEST,
	DELETE_USER_FAILURE,
	DELETE_USER_SUCCESS,
	EDIT_USER_REQUEST,
	EDIT_USER_SUCCESS,
	EDIT_USER_FAILURE,
	EDIT_GROUP_REQUEST,
	EDIT_GROUP_SUCCESS,
	EDIT_GROUP_FAILURE,
} from "./types";
export const getUsersRequest = () => {
	return {
		type: GET_USERS_REQUEST,
	};
};
export const getUsersSuccess = (users) => {
	return {
		type: GET_USERS_SUCCESS,
		payload: users,
	};
};
export const getUsersFailure = (error) => {
	return {
		type: GET_USERS_FAILURE,
		payload: error,
	};
};
export const getGroupsRequest = () => {
	return {
		type: GET_GROUPS_REQUEST,
	};
};
export const getGroupsSuccess = (groups) => {
	return {
		type: GET_GROUPS_SUCCESS,
		payload: groups,
	};
};
export const getGroupsFailure = (error) => {
	return {
		type: GET_GROUPS_FAILURE,
		payload: error,
	};
};
export const deleteGroupRequest = () => {
	return {
		type: DELETE_GROUP_REQUEST,
	};
};
export const deleteGroupSuccess = (groupName) => {
	return {
		type: DELETE_GROUP_SUCCESS,
		payload: groupName,
	};
};
export const deleteGroupFailure = (error) => {
	return {
		type: DELETE_GROUP_FAILURE,
		payload: error,
	};
};
export const deleteUserRequest = () => {
	return {
		type: DELETE_USER_REQUEST,
	};
};
export const deleteUserSuccess = (email) => {
	return {
		type: DELETE_USER_SUCCESS,
		payload: email,
	};
};
export const deleteUserFailure = (error) => {
	return {
		type: DELETE_USER_FAILURE,
		payload: error,
	};
};
export const editUserRequest = () => {
	return {
		type: EDIT_USER_REQUEST,
	};
};
export const editUserSuccess = (email, user) => {
	return {
		type: EDIT_USER_SUCCESS,
		payload: { email, user },
	};
};
export const editUserFailure = (error) => {
	return {
		type: EDIT_USER_FAILURE,
		payload: error,
	};
};
export const editGroupRequest = () => {
	return {
		type: EDIT_GROUP_REQUEST,
	};
};
export const editGroupSuccess = (groupName, group) => {
	return {
		type: EDIT_GROUP_SUCCESS,
		payload: { groupName, group },
	};
};
export const editGroupFailure = (error) => {
	return {
		type: EDIT_GROUP_FAILURE,
		payload: error,
	};
};
