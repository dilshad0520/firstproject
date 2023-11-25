import React, { useState } from "react";

import Style from "./Index.module.scss";

const DigitalWatch = () => {
  const [start, setstart] = useState(false);
  const [time, settime] = useState(0);

  const startbtn = () => {};

  return (
    <>
      <div className={Style.container}>
        <div className={Style.container__digitalwatch}>
          <p>{time}</p>
          <button onClick={startbtn}>start</button>
          {/* <button onClick={stopbtn}>stop</button>
          <button onClick={resetbtn}>reset</button> */}
        </div>
      </div>
    </>
  );
};
export default DigitalWatch;
