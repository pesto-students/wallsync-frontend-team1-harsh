import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "./panel.css";
import { Link } from "react-router-dom";

const Panel = ({ panelName, panelClass, panelLogo, panelData, linkTo }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="homePanels">
      <Accordion
        sx={{ borderRadius: "25px" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            <Link to={linkTo}>
              <KeyboardDoubleArrowRightIcon />
            </Link>
          }
          sx={{
            "& .MuiAccordionSummary-expandIconWrapper ": {
              transition: "none",
              "&.Mui-expanded": {
                transform: "none",
              },
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{
              "& .MuiAccordionSummary-expandIconWrapper ": {
                transition: "0.2s",
                "&.Mui-expanded": {
                  transform: "rotate(180deg)",
                },
              },
            }}
          ></AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <img src={panelLogo} alt="Home Dashboard Images" className="panelLogo"></img>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>{panelName}</Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ textAlignLast: "true" }}>
          <Typography>{panelData}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Panel;
