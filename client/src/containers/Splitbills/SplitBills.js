import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Panel from "./components/panel/Panel";
import Table from "./components/Table";
import ExpenseChart from "./components/Chart";
import "./splitbills.css";
import axios from "axios";
const SplitBills = () => {
	const [content, setContent] = useState([]);
	const [group, setGroup] = useState([]);
	const [groupContributions, setGroupContributions] = useState([]);
	const [finalContributions, setFinalContributions] = useState([]);
	const [balance, setBalance] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get(
				"http://localhost:8000/api/63f361935a6870f14f57389d/groups"
			);

			setContent(result.data);
			// setGroup(result.data);
			// setGroupContributions(result.data.contributions);
			// setFinalContributions(result.data.finalContributions);
			// setBalance(result.data.memberBalances);
		};

		getData();
	}, []);

	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{ field: "Name", headerName: "Name", width: 100 },

		{ field: "Description", headerName: "Description", width: 100 },
		{ field: "Amount", headerName: "Amount", width: 100, sortable: true },
	];
	const rows = [];

	content.map((i) => {
		setGroupContributions(groupContributions.push(i.contributions));
	});
	console.log(groupContributions);
	const data = {
		labels: content.map((i) => {
			i.finalContributions.map((j) => j.name);
		}),
		datasets: [
			{
				label: "My First Dataset",
				data: content.map((i) => {
					i.finalContributions.map((j) => j.share);
				}),
				backgroundColor: [
					"rgb(255, 99, 132)",
					"rgb(54, 162, 235)",
					"rgb(255, 205, 86)",
					"#1f1f1f",
					"#ffffff",
				],
				hoverOffset: 4,
			},
		],
	};

	return (
		<div>
			<Header />
			<div className="splitBody">
				<Nav />
				<div className="splitDashboard">
					{/* <Panel
						panelName={group.groupName}
						panelData={
							<div className="splitPanelData">
								<Table columnData={columns} rowData={rows} />
								<ExpenseChart pieData={data} />
								<div className="summaryTable">
									<ul>
										{balance.map((i) => {
											return (
												<p>
													{i.name}{" "}
													{i.toSettle
														? `settle: ${i.toSettle} `
														: ` owed: ${i.owed}`}
												</p>
											);
										})}
									</ul>
								</div>
							</div>
						}
					/> */}
					{content.map((i) => {
						return (
							<Panel
								panelName={i.groupName}
								panelData={
									<div className="splitPanelData">
										<Table columnData={columns} rowData={rows} />;
										<ExpenseChart pieData={data} />
									</div>
								}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SplitBills;
