import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Landing from "./landing/landing";
import ReactLogoScreen from "./examples/react-logo-screen/react-logo-screen";

const EntryPoint = () => (
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);

ReactDOM.render(<EntryPoint />, document.getElementById("root"));
