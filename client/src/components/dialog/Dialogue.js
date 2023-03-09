import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";

const notifications = [
  "Car payment DUE on 03/2/23",
  "Spendings exceeding limit (FEB)",
  "Car payment DUE on 03/2/23",
  "Spendings exceeding limit (FEB)",
  "Car payment DUE on 03/2/23",
  "Spendings exceeding limit (FEB)",
  "Car payment DUE on 03/2/23",
  "Spendings exceeding limit (FEB)",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog sx={{ width: 1000 }} onClose={handleClose} open={open}>
      <DialogTitle>
        NOTIFICATIONS
        <p style={{ 
          
          backgroundColor: "red",
          width:20,
          textAlign:"center",
          borderRadius:10

        }}>{notifications.length}</p>
      </DialogTitle>
      <List
        sx={{
          textAlign: "center",
          color: "white",
          fontSize: 34,
          display: "flex",
          padding: 5,
          flexDirection: "column",
          alignItems: "center",
          fontWeight: "medium",
          backgroundColor: "black",
        }}
      >
        {notifications.map((notif) => (
          <ListItem
            sx={{
              backgroundColor: "grey",
              borderRadius: 5,
              padding: 5,
              display: "flex",
              // alignItems:'center',
              justifyContent: "space-between",
              fontSize: 6,
            }}
            disableGutters
          >
            <ListItemText sx={{}} primary={notif} />
            <ClearIcon
              sx={{
                backgroundColor: "black",
                borderRadius: 10,
              }}
              onClick={() => handleListItemClick(notif)}
            />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p onClick={handleClickOpen}>Notifications</p>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
