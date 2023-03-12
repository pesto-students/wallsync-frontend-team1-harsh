import React, { useEffect, useState, useCallback } from "react";
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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	deleteShare,
	getGroups,
	addShare,
	addGroup,
	addUser,
	simplify,
	deleteGroup,
	addPercentageArray,
} from "../../context/groups/api";
import SkeletonComp from "./components/skeleton/Skeleton";
import { useDispatch, useSelector } from "react-redux";

const Split = () => {
	const dispatch = useDispatch();
	const [percentageArray, setPercentageArray] = useState([]);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState("");
	const [newGroupName, setNewGroupName] = useState("");
	const [newGroupDescription, setNewGroupDescription] = useState("");
	const [newMember, setNewMember] = useState("");
	const [simplified, setSimplified] = useState(false);
	// const loading = useSelector((state) => state.group.loading);
	const groupData = useSelector((state) => state.group.group);
	const simplifiedData = useSelector((state) => state.group.simplified);

	// let percentageArray = [];

	const handleSubmit = (e, groupName) => {
		e.preventDefault();

		dispatch(
			addShare(groupName, {
				group: groupName,
				contributedBy: name,
				description: description,
				amount: amount,
			})
		);
		notifyAddShare();
		setDescription("");
		setName("");
		setAmount("");
	};
	const handleCreateGroup = (e) => {
		e.preventDefault();
		dispatch(
			addGroup({
				groupName: newGroupName,
				groupDescription: newGroupDescription,
			})
		);
		notifyGroupAdd();
		setNewGroupName("");
		setNewGroupDescription("");
	};
	const handleDeleteShare = (groupName, contributionId) => {
		console.log(contributionId);
		dispatch(deleteShare(groupName, contributionId));
		notifyDeleteShare();
	};
	const handleAddMember = (e, groupName) => {
		e.preventDefault();
		console.log("findinggroup", groupName);
		dispatch(addUser(groupName, { email: newMember }));
		notifyAddMember();
		setNewMember("");
	};
	const handleSimplify = (e, groupName) => {
		e.preventDefault();
		dispatch(simplify(groupName));
		setSimplified(true);
	};
	const handleGroupDelete = (e, groupName) => {
		e.preventDefault();
		dispatch(deleteGroup(groupName));
	};
	const handlePercentageArray = (e, groupName) => {
		e.preventDefault();
		setPercentageArray(percentageArray);
		const totalPercent = percentageArray.reduce(
			(acc, curr) => acc + curr.percent,
			0
		);
		if (totalPercent !== 100) {
			alert("Percentages should add up to 100");
			return;
		}
		dispatch(addPercentageArray(groupName, percentageArray));
	};
	useEffect(() => {
		dispatch(getGroups());
	}, [newGroupDescription /*addUser, handleDeleteShare*/]);

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
									handleDeleteShare(params.row.groupName, params.row.id)
								}
							/>
						</IconButton>
					</>
				);
			},
		},
	];
	const notifyAddShare = () => {
		toast("Share added");
	};
	const notifyDeleteShare = () => {
		toast("Share deleted");
	};
	const notifyGroupAdd = () => {
		toast("New group Added");
	};
	const notifyAddMember = () => {
		toast("New group member added");
	};
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
								<form onSubmit={(e) => handleCreateGroup(e)}>
									<input
										value={newGroupName}
										type="text"
										placeholder="Group Name"
										name="Group Name"
										onChange={(e) => setNewGroupName(e.target.value)}
									/>
									<input
										value={newGroupDescription}
										type="text"
										name="Description"
										placeholder="Description"
										onChange={(e) => setNewGroupDescription(e.target.value)}
									/>
									{/* <input type="text" placeholder="Some shit" /> */}
									<button type="submit">Create</button>
								</form>
							</div>
						}
					/>

					{/* {loading && <SkeletonComp />} */}
					{groupData &&
						groupData.map((i) => {
							return (
								i && (
									<Panel
										className="Panel"
										panelName={
											<Heading className="headingText" text={i.groupName} />
										}
										AddMemberPop={
											<AddMemberPopover
												addMemberPopData={
													<form
														onSubmit={(e) => handleAddMember(e, i.groupName)}
													>
														<input
															value={newMember}
															placeholder="add email or phone number"
															name="email"
															onChange={(e) => setNewMember(e.target.value)}
														></input>
														<Button
															type="submit"
															buttonName="add member"
															className="addMemberB"
														/>
													</form>
												}
											/>
										}
										deleteIcon={
											<IconButton>
												<DeleteOutlineIcon
													onClick={(e) => handleGroupDelete(e, i.groupName)}
												/>
											</IconButton>
										}
										panelData={
											<>
												<div className="cont">
													<div className="first">
														<div className="activityTable">
															<Table
																columnData={columns}
																rowData={
																	i.contributions
																		? i.contributions.map((item) => ({
																				...item,
																				groupName: i.groupName,
																		  }))
																		: []
																}
															/>
															<form
																action=""
																className="addControForm"
																onSubmit={(e) => handleSubmit(e, i.groupName)}
															>
																<select
																	name="Members"
																	onChange={(e) => setName(e.target.value)}
																>
																	{i.groupMembers &&
																		i.groupMembers.map((member) => {
																			return (
																				<>
																					<option
																						value="none"
																						selected
																						disabled
																						hidden
																					></option>
																					<option
																						className="options"
																						value={member}
																					>
																						{member}
																					</option>
																				</>
																			);
																		})}
																</select>
																<input
																	value={description}
																	type="text"
																	name="Description"
																	placeholder="Description"
																	onChange={(e) =>
																		setDescription(e.target.value)
																	}
																/>
																<input
																	value={amount}
																	type="number"
																	name="Amount"
																	placeholder="Amount"
																	onChange={(e) => setAmount(e.target.value)}
																/>
																<Button
																	className="addShareB"
																	buttonName={"Add Share"}
																/>
															</form>
														</div>
														<ExpenseChart
															// generateButton={
															// 	<Button buttonName="show stats" className="statB"/>
															// }
															pieData={{
																labels:
																	i.finalContributions &&
																	i.finalContributions.map((item) => item.name),
																datasets: [
																	{
																		label: "",
																		data:
																			i.finalContributions &&
																			i.finalContributions.map(
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
															{!simplified
																? i.memberBalances &&
																  i.memberBalances.map((item) => {
																		return (
																			<p>
																				{item.name}{" "}
																				{item.toSettle
																					? `settle: ${item.toSettle} `
																					: `owed: ${item.owed}`}
																			</p>
																		);
																  })
																: simplifiedData &&
																  simplifiedData.map((data) => {
																		return <p>{data}</p>;
																  })}
															<p>
																<Popover
																	className="popverSection"
																	popdata={
																		<form className="popupForm">
																			{i.groupMembers &&
																				i.groupMembers.map((item) => {
																					return (
																						<>
																							<span>{item}:</span>
																							<input
																								type="number"
																								placeholder="percent"
																								onChange={(event) => {
																									const index =
																										percentageArray.findIndex(
																											(el) => el.name === item
																										);
																									if (index === -1) {
																										percentageArray.push({
																											name: item,
																											percent: parseInt(
																												event.target.value
																											),
																										});
																									} else {
																										percentageArray[
																											index
																										].percent = parseInt(
																											event.target.value
																										);
																									}
																								}}
																							/>
																							<br />
																						</>
																					);
																				})}
																			<Button
																				className="addPercentB"
																				buttonName="addPercent"
																				onClick={(e) =>
																					handlePercentageArray(e, i.groupName)
																				}
																			/>
																		</form>
																	}
																/>
																<Button
																	type="button"
																	onClick={(e) =>
																		handleSimplify(e, i.groupName)
																	}
																	className="simplifyB"
																	buttonName="Simplify"
																/>
															</p>
														</ul>
													</div>
												</div>
											</>
										}
									/>
								)
							);
						})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Split;
