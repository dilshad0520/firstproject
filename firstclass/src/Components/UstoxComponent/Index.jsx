import React from "react";

import "./index.css";

const UpstocxComponent = ({ list, upstok }) => {
  return (
    <>
      <div className="nevbar">
        <ul>
          <li onClick={upstok}>{list}</li>
        </ul>
      </div>
    </>
  );
};
export default UpstocxComponent;
