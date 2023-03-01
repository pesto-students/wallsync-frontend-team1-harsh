import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logoutStart } from "./AuthActions";
export const login = async (user, dispatch) => {
	dispatch(loginStart());
	try {
		const res = await axios.post("http://localhost:8000/api/login", user);
		res.data.accessToken && dispatch(loginSuccess(res.data));
		// localStorage.setItem("user", JSON.stringify(res.data));
		// console.log(res.data);
		
	} catch (err) {
		dispatch(loginFailure());
	}
};

export const logout = (dispatch)=>{
	localStorage.remove();
	dispatch(logoutStart());
}