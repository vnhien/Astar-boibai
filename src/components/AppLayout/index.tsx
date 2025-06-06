import { Box } from "@mui/material";
import backgroundImage from "../../assets/images/backgroundTarrot.png";
// import backgroundComponent from "../../assets/images/backgroundComponent1.png";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
}
