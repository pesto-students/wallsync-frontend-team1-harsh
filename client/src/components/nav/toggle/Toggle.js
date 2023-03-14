import React, { useEffect, useState } from "react";
import "./toggle.css";
// import "./lightmode.css";
import "../../../darkMode.scss";
import MaterialUISwitch from "./MuiSwitch";
const Toggle = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
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
		// <img
		// 	className={`toggleSwitch ${theme}`}
		// 	onClick={toggleTheme}
		// 	src={toggle}
		// ></img>
		<MaterialUISwitch onChange={toggleTheme} sx={{ m: 1 }} defaultChecked />
	);
};

export default Toggle;
