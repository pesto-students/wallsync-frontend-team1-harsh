import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Panel from "./components/panel/Panel";
import Table from "./components/Table";
import ExpenseChart from "./components/Chart";
import "./split.css";
import Avatar from "../../components/avatar/Avatar";
import Button from "../../components/button/Button";
import Popover from "./components/popover/PopOver";
import Heading from "./components/Heading/Heading";
import AddMemberPopover from "./components/popover/AddMember";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { deleteShare, getGroups } from "../../context/groups/api";
import SkeletonComp from "./components/skeleton/Skeleton";
import { useDispatch, useSelector } from "react-redux";

const Split = () => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.group.loading);
	const groupData = useSelector((state) => state.group.group);
	useEffect(() => {
		dispatch(getGroups());
	}, [dispatch]);
	const handleDelete = (groupName, contributionId) => {
		console.log(contributionId);
		dispatch(deleteShare(groupName, contributionId));
	};
	// console.log("============>",useSelector(state=>state.group.contributions));
	console.log(groupData);
	const columns = [
		{ field: "id", headerName: "ID", width: 100, hide: true },
		{ field: "name", headerName: "Name", width: 100 },
		{ field: "desc", headerName: "Description", width: 150, sortable: true },
		{ field: "share", headerName: "Amount", width: 100, sortable: true },
		{ field: "groupName", headerName: "GroupName", width: 70, hide: true },

		{
			field: "Actions",
			headerName: "Actions",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<IconButton>
							<EditIcon />
						</IconButton>
						<IconButton>
							<DeleteOutlineIcon
								onClick={() =>
									handleDelete(params.row.groupName, params.row.id)
								}
							/>
						</IconButton>
					</>
				);
			},
		},
	];
	return (
		<div>
			<Header />
			<div className="sBody">
				<Nav />
				<div className="sDash">
					<Panel
						panelName={<Heading text="+ Add a group" />}
						panelData={
							<div className="addGroup">
								<form action="">
									<input type="text" placeholder="Group Name" />
									<input type="text" placeholder="Description" />
									<input type="text" placeholder="Some shit" />
									<button type="Submit">Create</button>
								</form>
							</div>
						}
					/>

					{loading && <SkeletonComp />}
					{groupData.map((i) => {
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
												<Table
													columnData={columns}
													rowData={i.contributions.map((item) => ({
														...item,
														groupName: i.groupName,
													}))}
												/>
												<form action="" className="addControForm">
													<select name="Members">
														{i.groupMembers.map((member) => {
															return (
																<option className="options" value={member}>
																	{member}
																</option>
															);
														})}
													</select>
													<input
														type="text"
														name="Description"
														placeholder="Description"
													/>
													<input
														type="number"
														name="Amount"
														placeholder="Amount"
													/>
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
