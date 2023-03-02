import {
	FETCH_GROUP_REQUEST,
	FETCH_GROUP_SUCCESS,
	FETCH_GROUP_FAILURE,
	ADD_SHARE_REQUEST,
	ADD_SHARE_SUCCESS,
	ADD_SHARE_FAILURE,
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
export const addShareSuccess = (groups) => {
	return {
		type: ADD_SHARE_SUCCESS,
		payload: groups,
	};
};
export const addShareFailure = (error) => {
	return {
		type: ADD_SHARE_FAILURE,
		payload: error,
	};
};
