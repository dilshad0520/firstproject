import React from "react";
import Styles from "./Index.module.scss";

const CommanForcast = (props) => {
  return (
    <>
      <div className={Styles.forcast}>
        <div className={Styles.forcast__forcasthead}>
          <h3>{props.heads}</h3>
        </div>
        <div className={Styles.forcast__forcastareawrap}>
          <div className={Styles.forcast__forcastareawrap__forcastimage}>
            <img src={props.forcastimg} alt="" />
          </div>
          <div className={Styles.forcast__forcastareawrap__forcasttag}>
            <h2>{props.deg}</h2>
            <p>{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommanForcast;
