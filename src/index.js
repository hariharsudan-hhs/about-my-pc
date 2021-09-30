import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DeviceContextProvider } from "./store/Device-context.js";
import { HeaderContextProvider } from "./store/Header-Context.js";

ReactDOM.render(
  <DeviceContextProvider>
    <HeaderContextProvider>
      <App />
    </HeaderContextProvider>
  </DeviceContextProvider>,
  document.getElementById("root")
);
