import Landing from "./containers/landing/Landing";
import "./app.css";
import Login from "./containers/login/Login";
import Signup from "./containers/signUp/SignUp";
import Home from "./containers/home/Home";
import Profile from "./containers/profile/Profile";
import Settings from "./containers/settings/Settings";
import Repayments from "./containers/Repayments/Repayments";
import LiveMarket from "./containers/LiveMarket/LiveMarket";
import { useSelector } from "react-redux";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Link,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import Budget from "./containers/Budget/Budget";
import Split from "./containers/split/Split";

// function RequireAuth({ children, redirectTo }) {
// 	let isAuthenticated = useSelector((state) => state.authentication.isSignedIn);
// 	console.log("65665655", isAuthenticated);
// 	return isAuthenticated ? children : <Navigate to={redirectTo} />;
// }

const App = () => {
	let user = useSelector((state) => state.authentication.isSignedIn);
	console.log("here", user);
	const router = createBrowserRouter([
		{
			path: "/",
			element: !user ? <Landing /> : <Navigate to="/home" />,
		},
		{
			path: "/signup",
			element: !user ? <Signup /> : <Navigate to="/home" />,
		},
		{
			path: "/login",
			element: !user ? <Login /> : <Navigate to="/home" />,
		},
		{
			path: "/home",
			element: user ? <Home /> : <Navigate to="/" />,
		},

		{
			path: "/settings",
			element: <Settings />,
		},
		{
			path: "/profile",
			element: <Profile />,
		},
		{
			path: "/repayments",
			element: <Repayments />,
		},
		{
			path: "/live-market",
			element: <LiveMarket />,
		},
		{
			path: "/budget",
			element: <Budget />,
		},
		{
			path: "/split",
			element: <Split />,
		},
	]);
	return <RouterProvider router={router} />;
};
export default App;
