import React from "react";
import FirstComponent from "./firstComponent";
import SecondComponent from "./secondComponent";
import ThirdComponent from "./thirdComponent";

const MyBody = (props) => {
  return (
    <div className={props.className}>
      <div className="flex-body-container-one">
        <FirstComponent className="flex-container-box-one" />
      </div>
      <div className="flex-body-container-two">
        <SecondComponent className="flex-container-box-two" />
        <ThirdComponent className="flex-container-box-three" />
      </div>
    </div>
  );
};

export default MyBody;
