import React from "react";

const MyFooter = (props) => {
  return (
    <div className={props.className}>
      <h3 className="m-0">Brand</h3>
      <p className="m-0">Copyright &copy; 2021 Coach Rami, Inc</p>
      <div className="d-flex">
        <a href="www.google.com">Legal Stuff</a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="www.google.com">Policy Stuff</a>
      </div>
    </div>
  );
};

export default MyFooter;
