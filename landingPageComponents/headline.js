import { Typography } from "@mui/material";

export default function Headline({ headline, subText }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "60px",
        overflow: "hidden",
      }}
    >
      <div style={{ flexBasis: "30vw", minWidth: "5vw" }}></div>
      <div>
        <Typography variant="h3" style={{ textAlign: "center" }}>
          {headline}
        </Typography>
        <Typography variant="h2" style={{ textAlign: "center" }}>
          {subText}
        </Typography>
      </div>
      <div style={{ flexBasis: "30vw", minWidth: "5vw" }}></div>
    </div>
  );
}
