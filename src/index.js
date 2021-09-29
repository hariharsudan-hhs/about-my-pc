import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DeviceContextProvider } from "./store/Device-context.js";

ReactDOM.render(
  <DeviceContextProvider>
    <App />
  </DeviceContextProvider>,
  document.getElementById("root")
);
