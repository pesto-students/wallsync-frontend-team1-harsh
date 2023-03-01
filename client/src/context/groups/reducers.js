import {
  FETCH_GROUP_REQUEST,
  FETCH_GROUP_SUCCESS,
  FETCH_GROUP_FAILURE,
} from "./types";

const INITIAL_STATE = {
  loading: true,
  group: [],
  error: false,
};

const groupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_GROUP_REQUEST:
      return {
        ...state,
        loading: true,
        group: [],
        error: false,
      };
    case FETCH_GROUP_SUCCESS:
      return {
        loading: false,
        group: action.payload,
        error: false,
      };
    case FETCH_GROUP_FAILURE:
      return {
        loading: false,
        group: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default groupReducer;