// INSTRUCTIONS:
// - Change the CustomerSectionName to the name mentioned in the specification
// - Complete any custom html / UI required in the div marked for this purpose below
// - Add any require javascript functions and React functions as required
// - Ensure that any imports are included.
// - Add a detailed specification of what you've built in the comment directly above the function name
// - Make sure you add any required headings or labels to ensure the section is properly understood by the user
// - Do not change the styling in the container div below.

// STYLING:
// - A header that explains the section should use typography variant h3
// - Normal text content should use typography variant h2

// You can assume Material UI (MUI) components and anything present as standard in CreateReactApp
import { Typography } from "@mui/material";

// a description of what the custom section does goes here
export default function CustomSectionName() {
  return (
    // the styles in this div should not be udpated
    // under no circumstances should you change the styling in this div
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: "60px",
      }}
    >
      {/* This div makes the left hand border and should remain */}
      <div style={{ flexBasis: "30vw", minWidth: "5vw" }}></div>
      <div>{/* This div should contain any additional UI content */}</div>
      {/* This div makes the right hand border and should remain */}
      <div style={{ flexBasis: "30vw", minWidth: "5vw" }}></div>
    </div>
  );
}
