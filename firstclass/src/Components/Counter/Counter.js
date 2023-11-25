import { React, useState } from "react";

import "./Counter.css";

const Counter = () => {
  const [value, getvalue] = useState(0);

  const Increament = () => {
    getvalue(value + 1);
  };

  const Decreament = () => {
    getvalue(value - 1);
  };

  return (
    <>
      <div>{value}</div>
      <button onClick={Increament}>+</button>
      <button onClick={Decreament}>-</button>
    </>
  );
};

export default Counter;
