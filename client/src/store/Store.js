import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../context/auth/AuthReducer";
import groupReducer from "../context/groups/reducers";

const rootReducer = {
	reducer: {
		auth: AuthReducer,
		group:groupReducer,
	},
};

const store = configureStore(rootReducer);

export default store;
