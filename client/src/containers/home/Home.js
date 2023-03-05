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
            panelName={
				<p className="homeHeadingText" >Split Bills</p>
			}
            panelData={
              <div className="homePanelData">
                <p>Latest activity : {groupContent.groupName}</p>
                <p className="panelDataInner">Total Group expense :&nbsp;<p className="amount">  ₹ {groupContent.groupTotal}</p> </p>
              </div>
            }
            linkTo="/split"
          />
          <Panel
            panelLogo={pic2}
            panelName={
				<p className="homeHeadingText" >Expense Management</p>
			}
            linkTo="/budget"
            panelData={
              <div className="homePanelData">
                <p className="panelDataInner" >Spent  : &nbsp;<p className="amount">₹  {budgetContent.total}</p> </p>
                <p className="panelDataInner">Savings  : &nbsp;<p className="amount">₹  {budgetContent.savings}</p> </p>
              </div>
            }
          />
          <Panel
            panelLogo={pic3}
            panelName={
				<p className="homeHeadingText" >Repayments</p>
			}
            linkTo="/repayments"
            panelData={
              <div className="homePanelData">
                <p>Description  :  {b.type}</p>
                <p>Due-Date  :  {b.date}</p>
                <p className="panelDataInner">Amount  : &nbsp;<p className="amount">₹  {b.amount}</p></p>
              </div>
            }
          />
          <Panel
            panelLogo={pic4}
            panelName={
				<p className="homeHeadingText" >Live Market</p>
			}
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
