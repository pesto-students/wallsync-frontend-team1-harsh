import {
    FETCH_GROUP_REQUEST,
    FETCH_GROUP_SUCCESS,
    FETCH_GROUP_FAILURE,
  } from "./types";

export const fetchGroupRequest = () => {
    return {
      type: FETCH_GROUP_REQUEST
    };
  };
  export const fetchGroupSuccess = (groups) => {
    return {
      type: FETCH_GROUP_SUCCESS,
      payload: groups
    };
  };
  export const fetchGroupFailure = (error) => {
    return {
      type: FETCH_GROUP_FAILURE,
      payload: error
    };
  };