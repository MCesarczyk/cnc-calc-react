import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
