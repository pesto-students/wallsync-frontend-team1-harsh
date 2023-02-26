import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import './panel.css'

const Panel = ({ panelName,panelClass, panelLogo, panelData }) => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<div className='homePanels'>
			<Accordion sx={{borderRadius:"25px"}}
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography sx={{ width: "33%", flexShrink: 0 }}>
						<img src={panelLogo} className="panelLogo"></img>
					</Typography>
					<Typography sx={{ color: "text.secondary" }}>{panelName}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{panelData}</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default Panel;
