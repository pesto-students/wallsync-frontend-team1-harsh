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
