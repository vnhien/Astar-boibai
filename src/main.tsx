import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AppLayout from "./components/AppLayout/index.tsx";
import AppContextProvider from "./Context/AppContext/index.tsx";
import AppTheme from "./components/AppTheme/index.tsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AppContextProvider>
        <AppTheme>
          <AppLayout>
            <App />
          </AppLayout>
        </AppTheme>
      </AppContextProvider>
    </LocalizationProvider>
  </StrictMode>
);
