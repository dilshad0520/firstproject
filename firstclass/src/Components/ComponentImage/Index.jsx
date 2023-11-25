import React from "react";

import Design from "../ComponentImage/Index.module.scss";

const ComponentImage = (props) => {
  return (
    <>
      <div className={Design.rainimage}>
        <img src={props.image} alt="" />
      </div>
    </>
  );
};
export default ComponentImage;
