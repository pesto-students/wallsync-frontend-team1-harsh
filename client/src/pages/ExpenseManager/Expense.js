import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Panel from "../../components/panel/Panel";
import Nav from "../../components/nav/Nav";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./expensemanager.css";
import Button from "../../components/button/Button";
import pic1 from "../../assets/group.png";
import GridTable from "../../components/Table/GridTable";

const Expense = () => {
	return (
		<div>
			<Header className="landingButtons" children={<AccountCircleIcon />} />
			<div className="ExpenseBody">
				<div className="navigation">
					<Nav />
				</div>
				<div className="mainDashBoard">
					<div className="board">
						<div className="topButtons">
							<Button buttonName="weekly" />
							<Button buttonName="summary" />
						</div>
						<div className="mainChart">
							<div className="spendingsTable">
								<GridTable />
							</div>
							<div className="spendingsDoughnut">
								<img src={pic1} alt="" />
							</div>
						</div>
						<div className="middleLayer">
							<input type="text" placeholder="add exp" />
							<Button buttonName="limit" />
							{/* <Button className={"Input"}/> */}
							<Button buttonName="income" />
						</div>
						<div className="LowerCharts">
							<div className="spendings">August spendings</div>
							<div className="BigChart"></div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Expense;
