import Landing from "./containers/landing/Landing";
import "./app.css";
import "./darkMode.scss";
import Login from "./containers/login/Login";
import Signup from "./containers/signUp/SignUp";
import Home from "./containers/home/Home";
import Profile from "./containers/profile/Profile";
import Settings from "./containers/settings/Settings";
import Repayments from "./containers/Repayments/Repayments";
import LiveMarket from "./containers/LiveMarket/LiveMarket";
import AdminGroups from "./containers/Admin/AdminGroups";
import AdminUsers from "./containers/Admin/AdminUsers";
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
import TermsConditions from "./containers/TermsConditions/TermsConditions";

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
			path: "/termsAndConditions",
			element: <TermsConditions />,
		},
		{
			path: "/adminUsers",
			element: user ? <AdminUsers /> : <Navigate to="/" />,
		},
		{
			path: "/adminGroups",
			element: user ? <AdminGroups /> : <Navigate to="/" />,
		},
		// {
		// 	path: "/adminUsers",
		// 	element: user.isAdmin ? <AdminUsers /> : <Navigate to="/" />,
		// },{
		// 	path: "/adminGroups",
		// 	element: user.isAdmin ? <AdminGroups /> : <Navigate to="/" />,
		// },


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
