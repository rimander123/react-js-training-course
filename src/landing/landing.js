import React from "react";
import "./landing.css";
import MyHeader from "./header";
import MyBody from "./body";
import MyFooter from "./footer";

const Landing = () => {
  return (
    <div className="flex-container">
      <MyHeader className="landing-header" />
      <MyBody className="landing-body" />
      <MyFooter className="landing-footer" />
    </div>
  );
};

export default Landing;
