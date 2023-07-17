import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

export default function CheckedListItem({ checkListItemText }) {
  return (
    <ListItem disableGutters={true} style={{ justifyContent: "flex-start" }}>
      <ListItemIcon style={{ minWidth: "22px" }}>
        <svg
          style={{
            width: "12px",
            color: "#3ABAB4",
            fill: "#3ABAB4",
          }}
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
        </svg>
      </ListItemIcon>
      <ListItemText primary={checkListItemText} />
    </ListItem>
  );
}
