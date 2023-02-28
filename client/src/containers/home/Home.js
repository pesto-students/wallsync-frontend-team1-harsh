import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Panel from "./components/panel/Panel";
import "./home.css";
import pic1 from "../../assets/group.png";
import pic2 from "../../assets/expenseManager.png";
import pic3 from "../../assets/repayments.png";
import pic4 from "../../assets/stockCheck.png";
import Nav from "../../components/nav/Nav";
import Avatar from "../../components/avatar/Avatar";
const Home = () => {
	const [groupContent, setGroupContent] = useState([]);
	const [budgetContent, setBudgetContent] = useState([]);
	const [repaymentContent, setRepaymentContent] = useState([]);
	// const [a, setA] = useState({ type: "", date: "", amount: "" });

	useEffect(() => {
		const getHomeData = async () => {
			const group = await axios.get(
				"http://localhost:8000/api/63f361935a6870f14f57389d/groups"
			);
			const budget = await axios.get(
				"http://localhost:8000/api/63f361935a6870f14f57389d/budget"
			);
			const repayment = await axios.get(
				"http://localhost:8000/api/63f361935a6870f14f57389d/repayments"
			);
			setGroupContent(group.data[0]);
			setBudgetContent(budget.data[0]);
			setRepaymentContent(repayment.data);
			console.log(repayment.data);
		};
		getHomeData();
	}, []);
	let b = {};
	const latestRepayment = (data) => {
		let nearestDueDate;
		let repay;
		data.forEach((item) => {
			if (!nearestDueDate || nearestDueDate > item.dueDate) {
				nearestDueDate = item.dueDate;
				repay = item;
				b = {
					type: repay.description,
					date: repay.dueDate.toString().substr(0, 10),
					amount: repay.amount,
				};
			}
		});
		return b;
	};
	// let repaymentPanelData = latestRepayment(repaymentContent);

	console.log(latestRepayment(repaymentContent));

	return (
		<div>
			<Header className="landingButtons" children={<Avatar />} />
			<div className="homeBody">
				<div className="navigation">
					<Nav />
				</div>
				<div className="mainPanel">
					<Panel
						panelLogo={pic1}
						panelName="Add an activiy"
						panelData={
							<>
								<p>last activity : {groupContent.groupName}</p>
								<p>total group expense : {groupContent.groupTotal}</p>
							</>
						}
						linkTo="/split"
					/>
					<Panel
						panelLogo={pic2}
						panelName="Manage Budget"
						linkTo="/budget"
						panelData={
							<>
								<p>Spent : {budgetContent.total}</p>
								<p>Savings :{budgetContent.savings}</p>
							</>
						}
					/>
					<Panel
						panelLogo={pic3}
						panelName="Add Repayments"
						linkTo="/repayments"
						panelData={
							<p>
								type:{b.type}, date:{b.date}, amount:{b.amount}
							</p>
						}
					/>
					<Panel
						panelLogo={pic4}
						panelName="Check live market"
						linkTo="/live-market"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
