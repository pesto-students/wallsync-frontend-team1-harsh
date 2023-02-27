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
import Popover from "./components/popover/PopOver";
import Heading from "./components/Heading/Heading";
import AddMemberPopover from "./components/popover/AddMember";

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
								panelName={
									<Heading className="headingText" text={i.groupName} />
								}
								AddMemberPop={
									<AddMemberPopover
										addMemberPopData={
											<form>
												<input placeholder="add email or phone number "></input>
												<Button
													buttonName="add member"
													className="addMemberB"
												/>
											</form>
										}
									/>
								}
								panelData={
									<div className="cont">
										<div className="first">
											<div className="activityTable">
												<Table columnData={columns} rowData={i.contributions} />
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
													<Button
														className="addShareB"
														buttonName={"Add Share"}
													/>
												</form>
											</div>
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
															cutout: 70,
															// margintop:50,
															borderRadius: 5,
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
												<p>
													<Popover
														className="popverSection"
														popdata={
															<form className="popupForm">
																{i.finalContributions.map((item) => {
																	return (
																		<input
																			type="number"
																			placeholder={item.name}
																		/>
																	);
																})}
																<Button
																	className="addPercentB"
																	buttonName="addPercent"
																/>
															</form>
														}
													/>
													<Button className="simplifyB" buttonName="Simplify" />
												</p>
											</ul>
										</div>
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

export default Split;
