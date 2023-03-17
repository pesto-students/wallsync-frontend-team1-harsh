import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Panel from "./components/panel/Panel";
import "./home.css";
import pic1 from "../../assets/group.png";
import pic2 from "../../assets/expenseManager.png";
import pic3 from "../../assets/repayments.png";
import pic4 from "../../assets/stockCheck.png";
import Nav from "../../components/nav/Nav";
import { getGroups } from "../../context/groups/api";
import { getBudget } from "../../context/budget/api";
import { getRepayments } from "../../context/repayments/api";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const firstGroupData = useSelector((state) => state.group.group);
  const firstBudgetData = useSelector((state) => state.budget.budget);
  const firstRepaymentData = useSelector((state) => state.repayment.repayment);

  useEffect(() => {
    dispatch(getGroups());
    dispatch(getBudget());
    dispatch(getRepayments());
  }, []);
  let b = {};
  const latestRepayment = (data) => {
    let nearestDueDate;
    let repay;
    if (Array.isArray(data) && data.length > 0) {
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
    }

    return b;
  };
  let repaymentPanelData = latestRepayment(firstRepaymentData);
  return (
    <div className="home">
      <Header className="landingButtons" />
      <div className="homeBody">
        <div className="navigation">
          <Nav />
        </div>
        <div className="mainPanel">
          <Panel
            panelLogo={pic1}
            panelName={
              <Link to="/split">
                <p className="homeHeadingText">Split Bills</p>
              </Link>
            }
            panelData={
              <div className="homePanelData">
                <p>
                  Latest activity :
                  {firstGroupData[firstGroupData.length - 1]?.groupName}
                </p>
                <p className="panelDataInner">
                  Total Group expense :&nbsp;
                  <p className="amount">
                    {" "}
                    ₹ {firstGroupData[firstGroupData.length - 1]?.groupTotal}
                  </p>{" "}
                </p>
              </div>
            }
            linkTo="/split"
          />
          <Panel
            panelLogo={pic2}
            panelName={
              <Link to="/budget">
                <p className="homeHeadingText">Expenses</p>
              </Link>
            }
            linkTo="/budget"
            panelData={
              <div className="homePanelData">
                <p className="panelDataInner">
                  Spent : &nbsp;
                  <p className="amount">
                    ₹ {firstBudgetData && firstBudgetData.total}
                  </p>{" "}
                </p>
                <p className="panelDataInner">
                  Savings : &nbsp;
                  <p className="amount">
                    ₹ {firstBudgetData && firstBudgetData.savings}
                  </p>{" "}
                </p>
              </div>
            }
          />
          <Panel
            panelLogo={pic3}
            panelName={
              <Link to="/repayments">
                <p className="homeHeadingText">Repayments</p>
              </Link>
            }
            linkTo="/repayments"
            panelData={
              <div className="homePanelData">
                <p>
                  Description : {repaymentPanelData && repaymentPanelData.type}
                </p>
                <p>
                  Due-Date : {repaymentPanelData && repaymentPanelData.date}
                </p>
                <p className="panelDataInner">
                  Amount : &nbsp;
                  <p className="amount">
                    ₹ {repaymentPanelData && repaymentPanelData.amount}
                  </p>
                </p>
              </div>
            }
          />
          <Panel
            panelLogo={pic4}
            panelName={
              <Link to="/live-market">
                <p className="homeHeadingText">Live Market</p>
              </Link>
            }
            linkTo="/live-market"
          />
        </div>
      </div>
      <Footer className="homeFooter" />
    </div>
  );
};

export default Home;
