import React from "react";
import "./button.css";
const Button = ({ type, onSubmit, onClick, buttonName, className }) => {
	return (
		<div>
			<button
				type={type}
				onSubmit={onSubmit}
				onClick={onClick}
				className={className}
			>
				{buttonName}
			</button>
		</div>
	);
};

export default Button;
