import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "../context/authentication/reducers";
import BudgetReducer from "../context/budget/reducers";
import GroupReducer from "../context/groups/reducers";
import RepaymentReducer from "../context/repayments/reducers";
import AdminReducer from "../context/admin/reducers";
const rootReducer = {
	reducer: {
		authentication: AuthenticationReducer,
		group: GroupReducer,
		repayment: RepaymentReducer,
		budget: BudgetReducer,
		admin: AdminReducer,
	},
};

const store = configureStore(rootReducer);

export default store;
