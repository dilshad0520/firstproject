import React, { useState } from "react";

import "./index.css";
import ComponentTab from "../ComponentTab";

const NewTab = () => {
  const [data, setdata] = useState("stockData");
  const [active, activelist] = useState("stockData");

  const Handler = (e) => {
    setdata(e);
    activelist(e);
  };

  return (
    <>
      <div className="stock">
        <div className="upstock">
          <h2>Welcome to Upstock</h2>
          <h3>Start trading to see some megic happen!</h3>
        </div>
        <div className="tab-wrap">
          <ComponentTab
            activeData={active === "stockData" ? "active" : ""}
            stockKey={() => Handler("stockData")}
            list="STOCK DATA LIST"
          />

          <ComponentTab
            activeData={active === "WATCHLIST" ? "active" : ""}
            stockKey={() => Handler("WATCHLIST")}
            list="MY WATCHLIST"
          />

          <ComponentTab
            activeData={active === "ORDERS" ? "active" : ""}
            stockKey={() => Handler("ORDERS")}
            list="ORDERS"
          />
        </div>
        {data === "stockData" && (
          <div className="first">
            React makes it easier to create interactive UI using components and
            efficiently manage states of those components. Multiple components
            can be composed together to make complex applications without losing
            their state in DOM.
          </div>
        )}
        {data === "WATCHLIST" && (
          <div className="second">
            useState is React Hook that allows you to add state to a functional
            component. It returns an array with two values: the current state
            and a function to update it. The Hook takes an initial state value
            as an argument and returns an updated state value whenever the
            setter function is called.
          </div>
        )}
        {data === "ORDERS" && (
          <div className="third">
            Components are independent and reusable bits of code. They serve the
            same purpose as JavaScript functions, but work in isolation and
            return HTML. Components come in two types, Class components and
            Function components, in this tutorial we will concentrate on
            Function components.
          </div>
        )}
      </div>
    </>
  );
};

export default NewTab;
