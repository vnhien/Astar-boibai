import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import logo and card images
import astarLogo from "../../assets/images/astar-logo.png";
import ophiuchusCard from "../../assets/cards/zodiac/ophiuchus.png";
import { IconTitle } from "../../assets/icons/IconTitle";

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#B172FF",
  color: "#F6F2FF",
  fontFamily: "Inter Tight, sans-serif",
  fontWeight: 600,
  fontSize: "16px",
  textTransform: "none",
  borderRadius: "8px",
  padding: "15px 16px",
  width: "346px",
  height: "48px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#9B5FE6",
    boxShadow: "none",
  },
}));

const FloatingCard = styled(Box)<{ top?: string; left?: string; rotation?: string }>(
  ({ top, left, rotation }) => ({
    position: "absolute",
    top: top || "50%",
    left: left || "50%",
    transform: `translate(-50%, -50%) rotate(${rotation || "0deg"})`,
    width: "120px",
    height: "140px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.8,
    zIndex: 1,
  })
);

const GradientOverlay = styled(Box)({
  position: "absolute",
  top: "354px",
  left: "295px",
  width: "850px",
  height: "251px",
  background: "linear-gradient(135deg, #FFF5D8 0%, #FFBB00 100%)",
  borderRadius: "16px",
  opacity: 0.7,
  zIndex: 0,
});

const LogoContainer = styled(Box)({
  position: "relative",
  width: "268px",
  height: "106px",
  margin: "0 auto",
  marginBottom: "60px",
  zIndex: 3,
});

const LogoBackground = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "152px",
  height: "106px",
  background: "linear-gradient(135deg, #C10B28 0%, #FF2E2C 100%)",
  borderRadius: "8px",
});

const LogoText = styled(Box)({
  position: "absolute",
  top: "45px",
  left: "137px",
  display: "flex",
  gap: "4px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#FFFFFF",
  fontFamily: "Inter, sans-serif",
});

const AstarLogo = styled("img")({
  position: "absolute",
  top: "-241px",
  left: "-339px",
  width: "200px",
  height: "auto",
  zIndex: 10,
});

interface IntroProps {
  onContinue?: () => void;
}

export default function Intro({ onContinue }: IntroProps) {
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
