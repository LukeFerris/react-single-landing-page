import { Box, Typography } from "@mui/material";
import SignupBox from "./signupBox";

export default function TrailingSignup() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: "0px",
        paddingBottom: "80px",
        marginBottom: "60px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flexBasis: { xs: "", md: "10vw" },
          minWidth: { xs: "", md: "5vw" },
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "#2E2E33",
          minHeight: "235px",
          flexGrow: 1,
          position: "relative",
          paddingLeft: "5vw",
          paddingRight: "5vw",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            height: "100%",
          }}
        >
          <svg
            width="400"
            height="100%"
            viewBox="0 0 400 232"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="box-gr-a"
              >
                <stop stopColor="#667EEA" offset="0%"></stop>
                <stop stopColor="#667EEA" stopOpacity="0" offset="100%"></stop>
              </radialGradient>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="box-gr-b"
              >
                <stop stopColor="#3ABAB4" offset="0%"></stop>
                <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%"></stop>
              </radialGradient>
            </defs>
            <g transform="translate(-85 -369)" fill="none" fillRule="evenodd">
              <circle
                fillOpacity=".16"
                fill="url(#box-gr-a)"
                cx="413"
                cy="688"
                r="240"
              ></circle>
              <circle
                fillOpacity=".24"
                fill="url(#box-gr-b)"
                cx="400"
                cy="400"
                r="400"
              ></circle>
            </g>
          </svg>
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Typography variant="h4" style={{ flexBasis: "40%", color: "#FFF" }}>
            What are you waiting for?
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <SignupBox isDark={true} />
          </div>
          <div style={{ height: "50px" }}>&nbsp;</div>
        </div>
      </Box>
      <Box
        sx={{
          flexBasis: { xs: "", md: "10vw" },
          minWidth: { xs: "", md: "5vw" },
        }}
      ></Box>
    </div>
  );
}
