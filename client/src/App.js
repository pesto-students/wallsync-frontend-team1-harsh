import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import "./app.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signUp/SignUp";
import SigninWithGoogle from "./components/googleButton/GoogleButton";
import Nav from './components/nav/Nav'
function App() {
	return (
		<div className="App">
			<Landing/>
			{/* <Login /> */}
			{/* <Nav/> */}
			{/* <Signup /> */}
		</div>
	);
}

export default App;
