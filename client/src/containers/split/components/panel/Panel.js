import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import React from "react";
import "./panel.css";
import { IconButton } from "@mui/material";
import AddMemberPopover from "../popover/AddMember";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const Panel = ({
	panelName,
	panelClass,
	panelLogo,
	panelData,
	AddMemberPop,
}) => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<div className="splitPanels">
			<Accordion
				sx={{ borderRadius: "25px" }}
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography sx={{ width: "33%", flexShrink: 0 }}>
						{/* <img src={panelLogo} className="panelLogo"></img> */}
						<AddAPhotoIcon />
					</Typography>
					<Typography sx={{ color: "text.secondary" }}>{panelName}</Typography>
				</AccordionSummary>
				<AccordionSummary
					// expandIcon={<AddMemberPopover />}
					expandIcon={AddMemberPop}
				></AccordionSummary>
				<AccordionDetails>
					<Typography>{panelData}</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default Panel;
