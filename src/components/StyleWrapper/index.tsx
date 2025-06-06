import { Box } from "@mui/material";

export default function StyleWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        "& .contained": {
          backgroundColor: "#B172FF",
          color: "#F6F2FF",
          minHeight: "48px",
          height: "48px",
        },
      }}
    >
      {children}
    </Box>
  );
}
