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
import { IconButton } from "@mui/material";

function App() {
	return (
		<div className="App">
			<Landing />
			{/* <Login /> */}
			{/* <GoogleB/> */}
			{/* <Signup /> */}
			{/* <Home /> */}
			{/* <Profile /> */}

			{/* <Toggle /> */}
		</div>
	);
}

export default App;
