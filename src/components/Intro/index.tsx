import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import logo and card images
import { IconTitle } from "../../assets/icons/IconTitle";
import astarLogo from "../../assets/images/astar-logo.png";

const AstarLogo = styled("img")({
  position: "absolute",
  top: "-241px",
  left: "-339px",
  width: "200px",
  height: "auto",
  zIndex: 10,
});

export default function Intro() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AstarLogo src={astarLogo} alt="Astar Logo" />

      <IconTitle sx={{ fontSize: "60rem" }} />
    </Box>
  );
}
