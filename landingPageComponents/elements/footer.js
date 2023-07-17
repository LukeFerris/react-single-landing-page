import { Typography } from "@mui/material";

export default function Footer({ companyName }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: "0px",
        marginBottom: "40px",
        overflow: "hidden",
      }}
    >
      <div style={{ flexBasis: "10vw", minWidth: "5vw" }}></div>
      <div>
        <Typography>© {companyName}. All rights reserved.</Typography>
      </div>
      <div style={{ flexBasis: "10vw", minWidth: "5vw" }}></div>
    </div>
  );
}
