import React from "react";

import "./index.css";

const ComponentTab = ({ list, stockKey, activeData }) => {
  return (
    <>
      <div className="tablist">
        <ul>
          <li className={activeData} onClick={stockKey}>
            {list}
          </li>
        </ul>
      </div>
    </>
  );
};
export default ComponentTab;
