// React Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

// MUI Imports
import { ThemeProvider } from "@mui/material/styles";

// Project Imports
import { theme } from "./theme";
import Main from "./Main";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
