import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../../../components/button/Button";
import "./reportform.css";

const ReportForm = () => {
	const form = useRef();
	const nameInput = useRef();
	const emailInput = useRef();
	const messageInput = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_t0tni14",
				"template_zzmxwfl",
				form.current,
				"vgrEB-gEpoXI2lqUv"
			)
			.then(
				(result) => {
					console.log(result.text);
					nameInput.current.value = "";
					emailInput.current.value = "";
					messageInput.current.value = "";
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div>
			<form className="reportform" ref={form} onSubmit={sendEmail}>
				<label>Name :</label>
				<input type="text" name="user_name" ref={nameInput} />
				<label>Email :</label>
				<input type="email" name="user_email" ref={emailInput} />
				<label>Message :</label>
				<textarea name="message" ref={messageInput} />
				<Button type="submit" buttonName="Send" className="sendB" />
			</form>
		</div>
	);
};

export default ReportForm;
