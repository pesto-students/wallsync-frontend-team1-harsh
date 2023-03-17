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
import SaveIcon from "@mui/icons-material/Save";
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
import { editShare } from "../../context/groups/api";

const Split = () => {
	const dispatch = useDispatch();
	const [type, setType] = useState("equal");
	const [editedRowData, setEditedRowData] = useState({
		id: "",
		name: "",
		desc: "",
		share: "",
		group: "",
	});
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

	const handleType = (type) => {
		setType(type);
	};
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
	const handleSimplify = (e, groupName, type) => {
		e.preventDefault();
		console.log("tis the type", type);
		dispatch(simplify(groupName, type));
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
	const handleCellEditCommit = (params) => {
		const { field, value } = params;
		// const { id, name, share, desc, ...rest } = params.row;
		// const updatedRowData = { id, name, share, desc, [field]: value };
		const updatedRowData = { ...params.row, [field]: value };
		dispatch(editShare(params.row.groupName, params.row.id, updatedRowData));
	};
	const handleEdit = (rowData) => {
		setEditedRowData(rowData);
	};
	useEffect(() => {
		dispatch(getGroups());
	}, []);

	const columns = [
		{ field: "id", headerName: "ID", width: 100, hide: true },
		{ field: "name", headerName: "Name", width: 100, editable: true },

		{
			field: "desc",
			headerName: "Description",
			width: 150,
			sortable: true,
			editable: true,
		},
		{
			field: "share",
			headerName: "Amount",
			width: 100,
			sortable: true,
			editable: true,
		},
		{ field: "group", headerName: "GroupName", width: 70, hide: true },
		{
			field: "edit",
			headerName: "Edit",
			width: 100,
			renderCell: (params) => {
				return (
					<>
						<IconButton>
							<SaveIcon onClick={() => handleEdit(params.row)} />
						</IconButton>
					</>
				);
			},
		},
		{
			field: "delete",
			headerName: "Delete",
			width: 150,
			renderCell: (params) => {
				return (
					<>
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
									<Button
										type="submit"
										className="createB"
										buttonName="Create"
									/>
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
										className="splitPanel"
										panelName={
											<Heading className="headingText" text={i.groupName} />
										}
										AddMemberPop={
											<AddMemberPopover
												addMemberPopData={
													<form
														className="inviteForm"
														onSubmit={(e) => handleAddMember(e, i.groupName)}
													>
														<input
															value={newMember}
															placeholder="add email"
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
																onCellEditCommit={handleCellEditCommit}
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
																	placeholder="Members"
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
																	handleType={handleType}
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
																		handleSimplify(e, i.groupName, type)
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
