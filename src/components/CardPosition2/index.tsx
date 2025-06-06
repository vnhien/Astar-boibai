import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import image from "../../assets/cards/tarrotBack.png";
import { useAppContext } from "../../Context/AppContext";

export default function CardPosition2() {
  const [init, setInit] = useState(false);
  const { step } = useAppContext();
  const show = init && step < 2;

  useEffect(() => {
    setTimeout(() => {
      setInit(true);
    }, 500);
  }, []);
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "250px",
          zIndex: 3,
          transform: show
            ? "translate(-70%, 40%) rotate(30deg)"
            : "translate(-100%, 100%) rotate(90deg)",
          transition: "all 0.3s ease-in-out",
          position: "absolute",
          right: "0px",
          bottom: "0px",
        }}
      >
        <Card />
      </Box>
      <Box
        sx={{
          width: "250px",
          zIndex: 2,
          transform: show
            ? "translate(10%, 20%) rotate(-20deg)"
            : "translate(100%, 0%) rotate(0deg)",
          transition: "all 0.3s ease-in-out",
          transitionDelay: "0.05s",
          position: "absolute",
          right: "0px",
          bottom: "0px",
        }}
      >
        <Card />
      </Box>
      <Box
        sx={{
          width: "250px",
          zIndex: 1,
          transform: show
            ? "translate(50%, -40%) rotate(20deg)"
            : "translate(100%, -50%) rotate(0deg)",
          transition: "all 0.3s ease-in-out",
          transitionDelay: "0.1s",
          position: "absolute",
          right: "0px",
          bottom: "0px",
        }}
      >
        <Card />
      </Box>
    </Box>
  );
}

function Card() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <img src={image} alt="card" style={{ width: "100%", height: "auto" }} />
    </Box>
  );
}
