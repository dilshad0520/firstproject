import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Styles from "./Weather.module.scss";
import Img1 from "../../image/firstimage.png";
// import Img2 from "../../image/secimage.jpg";
import ComponentDate from "../ComponentDate/Index";
import Img2 from "../../image/thirdimage.png";
import Img5 from "../../image/cloudimage.png";
import ComponentImage from "../ComponentImage/Index";
import CommanHeading from "../CommanHeading/Index";
import CommanForcast from "../CommanForcast/Index";
import CommanWeather from "../CommanWeather/Index";

const WeatherApi = () => {
  const [store, setstore] = useState([]);
  const [city, setCityData] = useState("");
  const [currentData, setCurrrentData] = useState();
  ///////////////////////////////////////////////////////////////////////////////
  const inputHandler = (e) => {
    setCityData(e.target.value);
  };

  ////////////////////////////////////////////////
  const api_key = "2f9adeffcf0df077e7b043a6e6a45fae";
  const searchCity = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      )
      .then((res) => {
        const temp = Math.floor(res.data.main.temp / 10);
        const name = res.data.name;
        const countryCode = res.data.sys.country;
        setCurrrentData({ temp, name, countryCode });
      })
      .catch((error) => {
        console.log(error);
      });
    setCityData("");
  };

  //////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      axios
        .get(
          ` https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${api_key}`
        )
        .then((res) => {
          console.log(res.data);
          const temp = Math.floor(res.data.main.temp / 10);
          const name = res.data.name;
          const countryCode = res.data.sys.country;
          setCurrrentData({ temp, name, countryCode });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  //////////////////////////////////////////////////////////

  return (
    <>
      <div className={Styles.weather}>
        <div className={Styles.weather__container}>
          <div className={Styles.weather__container__weatherarea}>
            <div
              className={Styles.weather__container__weatherarea__weatherinput}
            >
              <input
                type="text"
                placeholder="search city"
                onChange={(e) => inputHandler(e)}
              />
              <button onClick={searchCity}>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div
              className={Styles.weather__container__weatherarea__weatherwrap}
            >
              <div
                className={
                  Styles.weather__container__weatherarea__weatherwrap__contentleft
                }
              >
                <div
                  className={
                    Styles.weather__container__weatherarea__weatherwrap__contentleft__weatherclouds
                  }
                >
                  <h2>{moment().format("dddd")}</h2>
                  <p>{moment().format("Do MMM YYYY")}</p>
                  <div
                    className={
                      Styles.weather__container__weatherarea__weatherwrap__contentleft__weatherclouds__tagwrap
                    }
                  >
                    <div
                      className={
                        Styles.weather__container__weatherarea__weatherwrap__contentleft__weatherclouds__tagwrap__weathertag
                      }
                    >
                      <h3>{currentData?.temp}°c</h3>
                      <p>
                        <span>{currentData?.countryCode}_ </span>
                        {currentData?.name}{" "}
                      </p>
                    </div>
                    <div
                      className={
                        Styles.weather__container__weatherarea__weatherwrap__contentleft__weatherclouds__tagwrap__imagecloud
                      }
                    >
                      <img src={Img1} alt="" />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    Styles.weather__container__weatherarea__weatherwrap__contentleft__weatherday
                  }
                >
                  <div
                    className={
                      Styles.weather__container__weatherarea__weatherwrap__contentleft__weatherday__weatherdaywrap
                    }
                  >
                    <ComponentDate date="10" img={Img2} head="18c°" />
                    <ComponentDate date="11" img={Img2} head="20°c" />
                    <ComponentDate date="12" img={Img2} head="22°c" />
                    <ComponentDate date="13" img={Img2} head="21°c" />
                    <ComponentDate date="14" img={Img2} head="23°c" />
                    <ComponentDate date="15" img={Img2} head="18°c" />
                    <ComponentDate date="16" img={Img2} head="22°c" />
                    <ComponentDate date="17" img={Img2} head="20°c" />
                    <ComponentDate date="18" img={Img2} head="24°c" />
                  </div>
                </div>
              </div>
              <div
                className={
                  Styles.weather__container__weatherarea__weatherwrap__weatherRight
                }
              >
                <div
                  className={
                    Styles.weather__container__weatherarea__weatherwrap__weatherRight__cloudrain
                  }
                >
                  <div
                    className={
                      Styles.weather__container__weatherarea__weatherwrap__weatherRight__cloudrain__cloudrainwrap
                    }
                  >
                    <div
                      className={
                        Styles.weather__container__weatherarea__weatherwrap__weatherRight__cloudrain__cloudrainwrap__cloudparent
                      }
                    >
                      <ComponentDate img={Img2} />
                      <ComponentImage image={Img5} />
                    </div>
                    <div
                      className={
                        Styles.weather__container__weatherarea__weatherwrap__weatherRight__cloudrain__cloudrainwrap__cloudparent
                      }
                    >
                      <ComponentDate img={Img2} />
                      <ComponentImage image={Img5} />
                    </div>
                    <div
                      className={
                        Styles.weather__container__weatherarea__weatherwrap__weatherRight__cloudrain__cloudrainwrap__cloudparent
                      }
                    >
                      <ComponentDate img={Img2} />
                      <ComponentImage image={Img5} />
                    </div>
                    <div
                      className={
                        Styles.weather__container__weatherarea__weatherwrap__weatherRight__cloudrain__cloudrainwrap__cloudparent
                      }
                    >
                      <ComponentDate img={Img2} />
                      <ComponentImage image={Img5} />
                    </div>
                    <div
                      className={
                        Styles.weather__container__weatherarea__weatherwrap__weatherRight__cloudrain__cloudrainwrap__cloudparent
                      }
                    >
                      <ComponentDate img={Img2} />
                      <ComponentImage image={Img5} />
                    </div>
                    <div
                      className={
                        Styles.weather__container__weatherarea__weatherwrap__weatherRight__cloudrain__cloudrainwrap__cloudparent
                      }
                    >
                      <ComponentDate img={Img2} />
                      <ComponentImage image={Img5} />
                    </div>
                    <div
                      className={
                        Styles.weather__container__weatherarea__weatherwrap__weatherRight__cloudrain__cloudrainwrap__cloudparent
                      }
                    >
                      <ComponentDate img={Img2} />
                      <ComponentImage image={Img5} />
                    </div>
                    <div
                      className={
                        Styles.weather__container__weatherarea__weatherwrap__weatherRight__cloudrain__cloudrainwrap__cloudparent
                      }
                    >
                      <ComponentDate img={Img2} />
                      <ComponentImage image={Img5} />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    Styles.weather__container__weatherarea__weatherwrap__weatherRight__tempreaturewrap
                  }
                >
                  <CommanHeading
                    heading="TODAY"
                    deg="22"
                    para="PARTLY CLOUDY"
                    temimg={Img2}
                    tem={Img5}
                  />
                  <CommanHeading
                    heading="TOMORROW"
                    deg="23"
                    para="PARTLY CLOUDY"
                    temimg={Img2}
                    tem={Img5}
                  />
                </div>
              </div>
            </div>
            <div
              className={Styles.weather__container__weatherarea__forcastwrap}
            >
              <CommanForcast
                heads="MORNING"
                forcastimg={Img2}
                deg="21°C"
                para="LIGT RAIN SHOWER"
              />
              <CommanForcast
                heads="AFTERNOON"
                forcastimg={Img2}
                deg="22°C"
                para="LIGT RAIN SHOWER"
              />
              <CommanForcast
                heads="EVENING"
                forcastimg={Img2}
                deg="20°C"
                para="LIGT RAIN SHOWER"
              />
            </div>
            <div className={Styles.weather__container__weatherarea__rainwrap}>
              <CommanWeather head="SAT" img={Img2} para="21°C" />
              <CommanWeather head="SUN" img={Img2} para="21°C" />
              <CommanWeather head="MON" img={Img2} para="21°C" />
              <CommanWeather head="TUE" img={Img2} para="21°C" />
              <CommanWeather head="WED" img={Img2} para="21°C" />
              <CommanWeather head="THU" img={Img2} para="21°C" />
              <CommanWeather head="FRI" img={Img2} para="21°C" />
              <CommanWeather head="SAT" img={Img2} para="21°C" />
              <CommanWeather head="SUN" img={Img2} para="21°C" />
              <CommanWeather head="MON" img={Img2} para="21°C" />
              <CommanWeather head="TUE" img={Img2} para="21°C" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApi;
/////////////////////////////// new api data section  here .   ///////////////////
//  async function getData(lat, lon) {
//   const API_KEY = "3050828d775a7c1de9a5bc06bf111c01";
//   await axios
//     .get(
//       `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&exclude=minutely&units=metric`
//     )
//     .then((res) => {
//       setstore(res.data);
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// console.log(store);

// useEffect(() => {
//   navigator.geolocation.getCurrentPosition((position) => {
//     getData(position.coords.latitude, position.coords.longitude);
//   });
// }, []);
