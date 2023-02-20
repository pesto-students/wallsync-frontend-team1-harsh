import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import "./app.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";

function App() {
	return (
		<div className="App">
			{/* <Landing/> */}
			{/* <Login /> */}
			{/* <Signup /> */}
			<Home />
		</div>
	);
}

export default App;
