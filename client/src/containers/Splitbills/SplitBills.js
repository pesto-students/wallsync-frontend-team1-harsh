import React, { useEffect ,useState} from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Panel from "./components/panel/Panel";
import Table from "./components/Table";
import "./splitbills.css";
import axios from "axios";
const SplitBills = () => {
	const [content,setContent] = useState([]);
	const [group,setGroup] = useState([]);
	useEffect(()=>{
		const getData= async()=>{
			const result = await axios.get('http://localhost:8000/api/GoaTrip')
			setGroup(result.data)
		}
		getData()
	},[])
	console.log(group)
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
	return (
		<div>
			<Header />
			<div className="splitBody">
				<Nav />
				<div className="splitDashboard">
					<Panel panelName={group.groupName} panelData={<Table columnData={columns} rowData={rows}/>}/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SplitBills;
