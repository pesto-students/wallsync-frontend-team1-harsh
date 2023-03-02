import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "../context/authentication/reducers";
import groupReducer from "../context/groups/reducers";
import repaymentReducer from "../context/repayments/reducers";
const rootReducer = {
	reducer: {
		authentication: AuthenticationReducer,
		group: groupReducer,
		repayment: repaymentReducer,
	},
};

const store = configureStore(rootReducer);

export default store;
