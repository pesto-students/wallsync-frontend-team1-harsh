import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../context/auth/AuthReducer";

const rootReducer = {
	reducer: {
		auth: AuthReducer,
	},
};

const store = configureStore(rootReducer);

export default store;
