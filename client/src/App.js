import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import "./app.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
import GoogleB from "./components/GB/Google";
import Profile from "./pages/profile/Profile";
import Toggle from "./components/nav/toggle/Toggle";
import Settings from "./pages/settings/Settings";
import Expense from "./pages/ExpenseManager/Expense";
import { IconButton } from "@mui/material";
import SplitBills from "./pages/Splitbills/SplitBills";

function App() {
	return (
		<div className="App">
			{/* <Landing /> */}
			{/* <Login /> */}

			{/* <Signup /> */}
			{/* <Home /> */}
			{/* <Expense /> */}
			{/* <Profile /> */}
			{/* <Settings /> */}
			<SplitBills />
		</div>
	);
}

export default App;
