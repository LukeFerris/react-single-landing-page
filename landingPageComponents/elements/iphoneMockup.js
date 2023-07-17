import { Box } from "@mui/material";
import iphoneMockup from "../../assets/static-images/iphone-mockup.png";

export default function IPhoneMockup({ screenMockUpSrc, imageAltTag }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", sm: "inherit" },
      }}
    >
      <svg
        style={{ position: "absolute", opacity: "0.8", zIndex: "-1" }}
        width="678"
        height="634"
        viewBox="0 0 678 634"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="240"
          cy="394"
          r="240"
          fill="url(#piphoneill_paint0_radial)"
          fillOpacity=".4"
        />
        <circle
          cx="438"
          cy="240"
          r="240"
          fill="url(#piphoneill_paint1_radial)"
          fillOpacity=".6"
        />
        <defs>
          <radialGradient
            id="piphoneill_paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90 -77 317) scale(189.054)"
          >
            <stop stopColor="#667EEA" />
            <stop offset="1" stopColor="#667EEA" stopOpacity=".01" />
          </radialGradient>
          <radialGradient
            id="piphoneill_paint1_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90 99 339) scale(189.054)"
          >
            <stop stopColor="#9F7AEA" />
            <stop offset="1" stopColor="#9F7AEA" stopOpacity=".01" />
          </radialGradient>
        </defs>
      </svg>
      <img
        src={screenMockUpSrc}
        width="290"
        height="624"
        style={{ position: "absolute", maxWidth: "84.33%" }}
        alt={imageAltTag}
      />
      <img
        style={{ position: "relative" }}
        src={iphoneMockup}
        width="344"
        height="674"
        alt="iPhone mockup"
        aria-hidden="true"
      />
    </Box>
  );
}
