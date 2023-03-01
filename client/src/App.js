import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Landing from "./containers/landing/Landing";
import "./app.css";
import Login from "./containers/login/Login";
import Signup from "./containers/signUp/SignUp";
import Home from "./containers/home/Home";
import Profile from "./containers/profile/Profile";
import Settings from "./containers/settings/Settings";
import Repayments from "./containers/Repayments/Repayments";
import LiveMarket from "./containers/LiveMarket/LiveMarket";
import axios from "axios";
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
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/auth/AuthContext";

const App = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Landing />,
		},
		{
			path: "/home",
			element: <Home />,
		},
		{
			path: "/signup",
			element: <Signup />,
		},
		{
			path: "/login",
			element: <Login />,
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
