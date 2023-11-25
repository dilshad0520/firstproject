import React from "react";

import Styles from "../ComponentDate/Component.module.scss";

const ComponentDate = (props) => {
  return (
    <>
      <div className={Styles.cloudstag}>
        <p>{props.date}</p>
        <div className={Styles.cloudstag__dayimage}>
          <img src={props.img} alt="" />
        </div>
        <h4>{props.head}</h4>
      </div>
    </>
  );
};
export default ComponentDate;
