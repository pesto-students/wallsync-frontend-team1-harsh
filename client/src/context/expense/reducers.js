// import {
//   FETCH_EXPENSE_REQUEST,
//   FETCH_EXPENSE_SUCCESS,
//   FETCH_EXPENSE_FAILURE,
//   ADD_EXPENSE_REQUEST,
//   ADD_EXPENSE_SUCCESS,
//   ADD_EXPENSE_FAILURE,
//   ADD_LIMIT_REQUEST,
//   ADD_LIMIT_SUCCESS,
//   ADD_LIMIT_FAILURE,
//   ADD_INCOME_REQUEST,
//   ADD_INCOME_SUCCESS,
//   ADD_INCOME_FAILURE,
// } from "./types";

// const INITIAL_STATE = {
//   loading: true,
//   expenses: [],
//   limit: null,
//   income: null,
//   error: false,
// };

// const expenserReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case FETCH_EXPENSE_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         expenses: [],
//         limit: null,
//         income: null,
//         error: false,
//       };
//   case FETCH_EXPENSE_SUCCESS:
//     return{
//         loading:false,
//         expenses:action.payload,
//         limit:action.payload,

//     }
// };

// // export default expenserReducer;
