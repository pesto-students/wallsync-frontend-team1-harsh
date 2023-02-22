import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Landing from "./containers/landing/Landing";
import "./app.css";
import Login from "./containers/login/Login";
import Signup from "./containers/signUp/SignUp";
import Home from "./containers/home/Home";
import GoogleB from "./components/GB/Google";
import Profile from "./containers/profile/Profile";
import Toggle from "./components/nav/toggle/Toggle";
import Settings from "./containers/settings/Settings";
import Expense from "./containers/ExpenseManager/Expense";
import { IconButton } from "@mui/material";
import SplitBills from "./containers/Splitbills/SplitBills";

function App() {
	return (
		<div className="App">
			{/* <Landing /> */}
			{/* <Login /> */}

			{/* <Signup /> */}
			{/* <Home /> */}
			<Expense />
			{/* <Profile /> */}
			{/* <Settings /> */}
			{/* <SplitBills /> */}
		</div>
	);
}

export default App;
