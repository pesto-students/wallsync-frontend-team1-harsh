import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Panel from "./components/panel/Panel";
import Table from "./components/Table";
import ExpenseChart from "./components/Chart";
import "./split.css";
import axios from "axios";
import Avatar from "../../components/avatar/Avatar";
import Button from "../../components/button/Button";

const Split = () => {
	const [content, setContent] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get(
				"http://localhost:8000/api/63f361935a6870f14f57389d/groups"
			);

			setContent(result.data);
		};

		getData();
	}, []);
	console.log(content);
	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{ field: "name", headerName: "Name", width: 100 },

		{ field: "desc", headerName: "Description", width: 100 },
		{ field: "share", headerName: "Amount", width: 100, sortable: true },
	];
	return (
		<div>
			<Header children={<Avatar />} />
			<div className="sBody">
				<Nav />
				<div className="sDash">
					{content.map((i) => {
						return (
							<Panel
								className="Panel"
								panelName={i.groupName}
								panelData={
									<div className="cont">
										<div className="first">
											<Table columnData={columns} rowData={i.contributions} />
											<ExpenseChart
												pieData={{
													labels: i.finalContributions.map((item) => item.name),
													datasets: [
														{
															label: "",
															data: i.finalContributions.map(
																(item) => item.share
															),
															backgroundColor: [
																"rgb(255, 99, 132)",
																"rgb(54, 162, 235)",
																"rgb(255, 205, 86)",
																"#d57ad4",
																"#ffffff",
															],
															hoverOffset: 4,
														},
													],
												}}
											/>

											<ul>
												{i.memberBalances.map((item) => {
													return (
														<p>
															{item.name}{" "}
															{item.toSettle
																? `settle: ${item.toSettle} `
																: ` owed: ${item.owed}`}
														</p>
													);
												})}
												<form action="">
													<select name="SplitType" id="">
														<option value="Equal">Equal</option>
														<option value="UnEqual">UnEqual By %</option>
													</select>
													<Button buttonName="Simplify" />
												</form>
											</ul>
										</div>
										<div className="second">
											<form action="">
												<select name="Members">
													{i.groupMembers.map((member) => {
														return (
															<option className="options" value={member}>
																{member}
															</option>
														);
													})}
												</select>
												<input type="text" name="Description" />
												<input type="number" name="Amount" />
												<button type="Submit">Submit</button>
											</form>
										</div>
									</div>
								}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Split;
