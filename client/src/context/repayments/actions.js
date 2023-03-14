import { useSelector } from "react-redux";
import {
	FETCH_REPAYMENT_REQUEST,
	FETCH_REPAYMENT_SUCCESS,
	FETCH_REPAYMENT_FAILURE,
	ADD_REPAYMENT_REQUEST,
	ADD_REPAYMENT_SUCCESS,
	ADD_REPAYMENT_FAILURE,
	EDIT_REPAYMENT_REQUEST,
	EDIT_REPAYMENT_SUCCESS,
	EDIT_REPAYMENT_FAILURE,
	DELETE_REPAYMENT_REQUEST,
	DELETE_REPAYMENT_SUCCESS,
	DELETE_REPAYMENT_FAILURE,
} from "./types";
export const fetchRepaymentRequest = () => {
	return {
		type: FETCH_REPAYMENT_REQUEST,
	};
};
export const fetchRepaymentSuccess = (repayments) => {
	return {
		type: FETCH_REPAYMENT_SUCCESS,
		payload: repayments,
	};
};
export const fetchRepaymentFailure = (error) => {
	return {
		type: FETCH_REPAYMENT_FAILURE,
		payload: error,
	};
};
export const addRepaymentRequest = () => {
	return {
		type: ADD_REPAYMENT_REQUEST,
	};
};
export const addRepaymentSuccess = (repayments) => {
	return {
		type: ADD_REPAYMENT_SUCCESS,
		payload: repayments,
	};
};
export const addRepaymentFailure = (error) => {
	return {
		type: ADD_REPAYMENT_FAILURE,
		payload: error,
	};
};
export const editRepaymentRequest = () => {
	return {
		type: EDIT_REPAYMENT_REQUEST,
	};
};
export const editRepaymentSuccess = (repayment, repaymentId) => {
	return {
		type: EDIT_REPAYMENT_SUCCESS,
		payload: { repayment, repaymentId },
	};
};
export const editRepaymentFailure = (error) => {
	return {
		type: EDIT_REPAYMENT_FAILURE,
		payload: error,
	};
};
export const deleteRepaymentRequest = () => {
	return {
		type: DELETE_REPAYMENT_REQUEST,
	};
};
export const deleteRepaymentSuccess = (repaymentId) => {
	return {
		type: DELETE_REPAYMENT_SUCCESS,
		payload: repaymentId,
	};
};
export const deleteRepaymentFailure = (error) => {
	return {
		type: DELETE_REPAYMENT_FAILURE,
		payload: error,
	};
};
