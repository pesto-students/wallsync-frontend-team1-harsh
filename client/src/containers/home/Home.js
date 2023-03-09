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
import { getGroups } from "../../context/groups/api";
import { getBudget } from "../../context/budget/api";
import { getRepayments } from "../../context/repayments/api";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
	const [groupContent, setGroupContent] = useState([]);
	const [budgetContent, setBudgetContent] = useState([]);
	const [repaymentContent, setRepaymentContent] = useState([]);

	const dispatch = useDispatch();
	const firstGroupData = useSelector((state) => state.group.group);
	const firstBudgetData = useSelector(state=>state.budget.budget)
	const firstRepaymentData = useSelector(state=>state.repayment.repayment)

	useEffect(() => {
		dispatch(getGroups());
		dispatch(getBudget());
		dispatch(getRepayments());
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
	let repaymentPanelData = latestRepayment(firstRepaymentData);
	return (
		<div>
			<Header className="landingButtons" />
			<div className="homeBody">
				<div className="navigation">
					<Nav />
				</div>
				<div className="mainPanel">
					<Panel
						panelLogo={pic1}
						panelName={<p className="homeHeadingText">Split Bills</p>}
						panelData={
							<div className="homePanelData">
								<p>
									Latest activity :
									{firstGroupData[firstGroupData.length - 1]?.groupName}
								</p>
								<p className="panelDataInner">
									Total Group expense :&nbsp;
									<p className="amount"> ₹ {firstGroupData[firstGroupData.length - 1]?.groupTotal}</p>{" "}
								</p>
							</div>
						}
						linkTo="/split"
					/>
					<Panel
						panelLogo={pic2}
						panelName={<p className="homeHeadingText">Expense Management</p>}
						linkTo="/budget"
						panelData={
							<div className="homePanelData">
								<p className="panelDataInner">
									Spent : &nbsp;
									<p className="amount">₹ {firstBudgetData.total}</p>{" "}
								</p>
								<p className="panelDataInner">
									Savings : &nbsp;
									<p className="amount">₹ {firstBudgetData.savings}</p>{" "}
								</p>
							</div>
						}
					/>
					<Panel
						panelLogo={pic3}
						panelName={<p className="homeHeadingText">Repayments</p>}
						linkTo="/repayments"
						panelData={
							<div className="homePanelData">
								<p>Description : {repaymentPanelData.type}</p>
								<p>Due-Date : {repaymentPanelData.date}</p>
								<p className="panelDataInner">
									Amount : &nbsp;<p className="amount">₹ {repaymentPanelData.amount}</p>
								</p>
							</div>
						}
					/>
					<Panel
						panelLogo={pic4}
						panelName={<p className="homeHeadingText">Live Market</p>}
						linkTo="/live-market"
						// panelData={}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
