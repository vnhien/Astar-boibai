import { Box, Button } from "@mui/material";
import { IconTitle } from "./assets/icons/IconTitle";
import { useAppContext } from "./Context/AppContext";
import { IconLogo } from "./assets/icons/IconLogo";
import Form from "./components/Form";
import imageTalisman from "./assets/images/talisman.png";
import CardPosition1 from "./components/CardPosition1";
import CardPosition2 from "./components/CardPosition2";
import CardSelect from "./components/CardSelect";

function App() {
  const { step, setStep } = useAppContext();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",

        // add Fade animation
      }}
    >
      <Box
        sx={{
          minWidth: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box sx={{ position: "fixed", left: "0px", top: "0px" }}>
          <CardPosition1 />
        </Box>
        <Box sx={{ position: "fixed", right: "0px", bottom: "0px" }}>
          <CardPosition2 />
        </Box>
        <Box
          sx={{ position: "fixed", right: "0px", top: "0px", transform: "translate(50%, -50%)" }}
        >
          <Box
            sx={{
              animation: "rotate 16s linear infinite",
              "@keyframes rotate": {
                "0%": {
                  transform: "rotate(0deg)",
                  opacity: 0.5,
                },
                "25%": {
                  transform: "rotate(90deg)",
                  opacity: 0.1,
                },
                "50%": {
                  transform: "rotate(180deg)",
                  opacity: 0.5,
                },
                "75%": {
                  transform: "rotate(270deg)",
                  opacity: 0.1,
                },
                "100%": {
                  transform: "rotate(360deg)",
                  opacity: 0.5,
                },
              },
            }}
          >
            <img
              src={imageTalisman}
              style={{
                width: "65vw",
                height: "65vw",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{ position: "fixed", left: "0px", bottom: "0px", transform: "translate(-50%, 50%)" }}
        >
          <Box
            sx={{
              animation: "rotate 16s linear infinite",
              "@keyframes rotate": {
                "0%": {
                  transform: "rotate(0deg)",
                  opacity: 0.5,
                },
                "25%": {
                  transform: "rotate(90deg)",
                  opacity: 0.1,
                },
                "50%": {
                  transform: "rotate(180deg)",
                  opacity: 0.5,
                },
                "75%": {
                  transform: "rotate(270deg)",
                  opacity: 0.1,
                },
                "100%": {
                  transform: "rotate(360deg)",
                  opacity: 0.5,
                },
              },
              opacity: 0.5,
            }}
          >
            <img
              src={imageTalisman}
              style={{
                width: "65vw",
                height: "65vw",
              }}
            />
          </Box>
        </Box>
        <IconLogo
          sx={{
            fontSize: "10rem",
            mt: 10,
            opacity: step === 0 ? 1 : 0,
            transition: "all 0.5s ease-in-out",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "250px",
              position: "absolute",
              top: step === 0 ? "50%" : "200px",
              left: "50%",
              transform: step === 0 ? "translate(-50%, -50%)" : "translate(-50%, -50%) scale(0.5)",
              margin: "auto",
              transition: "all 0.5s ease-in-out",
            }}
          >
            <IconTitle sx={{ fontSize: "50rem" }} />
          </Box>
          {step === 2 && (
            <Box sx={{ width: "100%", maxWidth: "1300px" }}>
              <CardSelect />
            </Box>
          )}
          {step === 1 && <Form />}
          {step === 0 && (
            <Button
              sx={{ maxWidth: "350px", mt: 5, transform: "translateY(100px)", width: "100%" }}
              fullWidth
              variant="contained"
              className="contained"
              onClick={() =>
                setStep((prev) => {
                  if (prev === 0) return 1;
                  return 0;
                })
              }
            >
              Lẹt gô!!!
            </Button>
          )}
        </Box>
        <Box sx={{ width: "100%", height: "100px" }} />
      </Box>
    </Box>
  );
}

export default App;
