import React from "react";

import Styles from "./Index.module.scss";

const CommanHeading = (props) => {
  return (
    <>
      <div className={Styles.tempreture}>
        <div className={Styles.tempreture__tempreturetag}>
          <h3>{props.heading}</h3>
        </div>
        <div className={Styles.tempreture__tempretureflex}>
          <div className={Styles.tempreture__tempretureflex__tempretureday}>
            <h2>{props.deg}°C</h2>
            <p>{props.para}</p>
            <h2>{props.deg}°C</h2>
            <p>{props.para}</p>
          </div>
          <div className={Styles.tempreture__tempretureflex__tempretureparent}>
            <div
              className={
                Styles.tempreture__tempretureflex__tempretureparent__tempreturefirstimage
              }
            >
              <img src={props.temimg} alt="" />
            </div>
            <div
              className={
                Styles.tempreture__tempretureflex__tempretureparent__secimage
              }
            >
              <img src={props.tem} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommanHeading;
