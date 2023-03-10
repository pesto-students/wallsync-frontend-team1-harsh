import {
	FETCH_GROUP_REQUEST,
	FETCH_GROUP_SUCCESS,
	FETCH_GROUP_FAILURE,
	ADD_SHARE_REQUEST,
	ADD_SHARE_SUCCESS,
	ADD_SHARE_FAILURE,
	EDIT_SHARE_REQUEST,
	EDIT_SHARE_SUCCESS,
	EDIT_SHARE_FAILURE,
	DELETE_SHARE_REQUEST,
	DELETE_SHARE_SUCCESS,
	DELETE_SHARE_FAILURE,
} from "./types";

export const fetchGroupRequest = () => {
	return {
		type: FETCH_GROUP_REQUEST,
	};
};
export const fetchGroupSuccess = (groups) => {
	return {
		type: FETCH_GROUP_SUCCESS,
		payload: groups,
	};
};
export const fetchGroupFailure = (error) => {
	return {
		type: FETCH_GROUP_FAILURE,
		payload: error,
	};
};
export const addShareRequest = () => {
	return {
		type: ADD_SHARE_REQUEST,
	};
};
export const addShareSuccess = (groupName, share) => {
	return {
		type: ADD_SHARE_SUCCESS,
		payload: groupName,
		share,
	};
};
export const addShareFailure = (error) => {
	return {
		type: ADD_SHARE_FAILURE,
		payload: error,
	};
};
export const editShareRequest = () => {
	return {
		type: EDIT_SHARE_REQUEST,
	};
};
export const editShareSuccess = (groups) => {
	return {
		type: EDIT_SHARE_SUCCESS,
		payload: groups,
	};
};
export const editShareFailure = (error) => {
	return {
		type: EDIT_SHARE_FAILURE,
		payload: error,
	};
};
export const deleteShareRequest = () => {
	return {
		type: DELETE_SHARE_REQUEST,
	};
};
export const deleteShareSuccess = (groupName, contributionId) => {
	return {
		type: DELETE_SHARE_SUCCESS,
		payload: groupName,
		contributionId,
	};
};
export const deleteShareFailure = (error) => {
	return {
		type: DELETE_SHARE_FAILURE,
		payload: error,
	};
};
