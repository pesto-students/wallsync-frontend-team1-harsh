import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Panel from "../../components/panel/Panel";
import Nav from "../../components/nav/Nav";
import "./expensemanager.css";
import Button from "../../components/button/Button";
import pic1 from "../../assets/group.png";
import GridTable from "../../components/Table/GridTable";
import Avatar from "../../components/avatar/Avatar";
import axios from "axios";

const Expense = () => {
	const [content, setContent] = useState([]);
	useEffect(() => {
		const getGroup = () => {
			axios
				.get("http://localhost:8000/api/63f361935a6870f14f57389d/getSummary")
				.then((data) => {
					console.log(data.data);
					setContent(data.data.expensesArray);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getGroup();
	}, []);
	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{ field: "Description", headerName: "Description", width: 100 },
		{ field: "Amount", headerName: "Amount", width: 100, sortable: true },
		{
			field: "Date",
			headerName: "Date",
			type: "number",
			width: 100,
			sortable: true,
		},
	];
	const rows = [];
	{
		content.map((item, i) => {
			rows.push({
				id: i + 1,
				Description: item.description,
				Amount: item.amount,
				Date: item.date.substr(0, 10),
			});
		});
	}
	return (
		<div>
			<Header className="landingButtons" children={<Avatar />} />
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
								<GridTable rowData={rows} columnData={columns} />
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
							<div className="spendings">{content.groupTotal}</div>
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
