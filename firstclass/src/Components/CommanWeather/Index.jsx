import React from "react";

import Styles from "./Index.module.scss";

const CommanWeather = (props) => {
  return (
    <>
      <div className={Styles.rainarea}>
        <div className={Styles.rainarea__rainweather}>
          <h2>{props.head}</h2>
          <div className={Styles.rainarea__rainimage}>
            <img src={props.img} alt="" />
          </div>
          <p>{props.para}</p>
          <p>{props.para}</p>
        </div>
      </div>
    </>
  );
};
export default CommanWeather;
