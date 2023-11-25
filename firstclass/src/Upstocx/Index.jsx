import React, { useState } from "react";

import "./Index.css";

import array from "../Upstocx/db.json";
import UpstocxComponent from "../Components/UstoxComponent/Index";

const Upstocx = () => {
  const [data, setData] = useState("watchlist");

  const [remain, setremain] = useState([]);

  const [store, setstore] = useState([]);
  const [save, setsave] = useState([]);

  const Handler = (e) => {
    setData(e);
  };
  console.log(data);

  const Upstocxhandle = (id) => {
    const remainingData = array.find((item) => item.id === id);
    setremain([...remain, remainingData]);

    const selectedindex = array.filter((item) => item.id !== id);
    setsave(selectedindex);
  };

  const orderhandler = (id) => {
    const selectData = array.find((item) => item.id === id);
    setstore([...store, selectData]);
  };
  console.log(store);

  return (
    <>
      <div className="container">
        <div className="upstoxmarket">
          <div className="upstox">
            <UpstocxComponent
              upstok={() => Handler("watchlist")}
              list="WATCHLIST"
            />
            <UpstocxComponent
              upstok={() => Handler("upstoklist")}
              list="UPSTOXLIST"
            />
            <UpstocxComponent
              upstok={() => Handler("orderlist")}
              list="ORDERLIST"
            />
          </div>

          {data === "watchlist" &&
            array.map((item) => {
              return (
                <>
                  <div className="upstoxwrap">
                    <div className="relinse">
                      <h2>{item.name}</h2>
                      <p>{item.stockExchange}</p>
                    </div>
                    <div className="icon">
                      <button onClick={() => Upstocxhandle(item.id)}>
                        <i class="fa-regular fa-heart"></i>
                      </button>
                      <button onClick={() => orderhandler(item.id)}>
                        <i class="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                    <div className="order">
                      <p>{item.stockPrice}</p>
                      <p>{item.stockValueChange}</p>
                    </div>
                  </div>
                </>
              );
            })}
          {data === "upstoklist" &&
            remain.map((item) => {
              return (
                <>
                  <div className="upstoxwrap">
                    <div className="relinse">
                      <h2>{item.name}</h2>
                      <p>{item.stockExchange}</p>
                    </div>
                    <div className="icon">
                      <button onClick={() => Upstocxhandle(item.id)}>
                        <i class="fa-regular fa-heart"></i>
                      </button>
                      <button onClick={() => orderhandler(item.id)}>
                        <i class="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                    <div className="order">
                      <p>{item.stockPrice}</p>
                      <p>{item.stockValueChange}</p>
                    </div>
                  </div>
                </>
              );
            })}

          {data == "orderlist" &&
            store.map((item) => {
              return (
                <>
                  <div className="upstoxwrap">
                    <div className="relinse">
                      <h2>{item.name}</h2>
                      <p>{item.stockExchange}</p>
                    </div>
                    <div className="icon">
                      <button onClick={() => Upstocxhandle(item.id)}>
                        <i class="fa-regular fa-heart"></i>
                      </button>
                      <button onClick={() => orderhandler(item.id)}>
                        <i class="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                    <div className="order">
                      <p>{item.stockPrice}</p>
                      <p>{item.stockValueChange}</p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Upstocx;
