import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../../../components/button/Button";
import "./reportform.css";
import config from "../../../../config/config";
const ReportForm = () => {
	const form = useRef();
	const nameInput = useRef();
	const emailInput = useRef();
	const messageInput = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				config.emailServiceId,
				config.emailTemplateId,
				form.current,
				config.emailPublicKey
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
