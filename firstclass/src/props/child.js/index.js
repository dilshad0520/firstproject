import React from "react";
import "./index.css";

export const ChildProps = (props) => {
  return (
    <div className="main">
      <img src={props.image} />
      <h1>{props.head}</h1>
      <p>{props.para}</p>
    </div>
  );
};
