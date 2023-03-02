import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../context/auth/AuthReducer";
import groupReducer from "../context/groups/reducers";
import repaymentReducer from "../context/repayments/reducers";
const rootReducer = {
	reducer: {
		auth: AuthReducer,
		group: groupReducer,
		repayment: repaymentReducer,
	},
};

const store = configureStore(rootReducer);

export default store;
