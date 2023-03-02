import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { basicTheme } from "./theme";

ReactDOM.render(
  // <React.StrictMode>
  <RecoilRoot>
    <ThemeProvider theme={basicTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>,
  // </React.StrictMode>
  document.getElementById("root")
);
