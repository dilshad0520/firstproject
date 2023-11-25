import React, { useState } from "react";

import "./Index.css";

const CounterReact = () => {
  const [start, setStart] = useState(false);

  const showmodaal = () => {
    setStart(!start);
  };

  return (
    <>
      {start && <div className="modaal"></div>}
      <button onClick={showmodaal}>click</button>
    </>
  );
};
export default CounterReact;
