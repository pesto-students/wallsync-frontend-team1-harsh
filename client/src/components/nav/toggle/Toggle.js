import React, { useEffect, useState } from "react";
import "./toggle.css";
import "./lightmode.css";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import toggle from "../../../assets/icons8-toggle-on-50.png";
import Button from "../../button/Button";
const Toggle = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};
	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.body.className = theme;
	}, [theme]);
	return (
		<img
			className={`toggleSwitch ${theme}`}
			onClick={toggleTheme}
			src={toggle}
		></img>
	);
};

export default Toggle;
