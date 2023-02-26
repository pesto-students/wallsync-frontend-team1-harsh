import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
export const login = async (user, dispatch) => {
	dispatch(loginStart());
	try {
		const res = await axios.post("http://localhost:8000/api/login", user);
		res.data.accessToken && dispatch(loginSuccess(res.data));
		console.log(res.data);
	} catch (err) {
		dispatch(loginFailure());
	}
};
