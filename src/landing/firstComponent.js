import React from "react";
import { Flex } from "./flex";

const FirstComponent = (props) => {
  return (
    <div className={props.className}>
      <Flex>Component</Flex>
      <Flex>One</Flex>
    </div>
  );
};

export default FirstComponent;
