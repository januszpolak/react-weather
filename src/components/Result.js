import React from "react";
import "./Result.css";

const Result = (props) => {
  const {
    city,
    temp,
    wind,
    pressure,
    sunset,
    sunrise,
    date,
    desc,
    err,
  } = props.weather;
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

  if (desc === "Clear") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2013/11/20/12/52/sky-213848_960_720.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  if (desc === "Clouds") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2018/05/30/15/39/thunderstorm-3441687_960_720.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  if (desc === "Thunderstorm") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2016/12/14/04/08/thunderbolt-1905603_960_720.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  if (desc === "Drizzle") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2015/08/03/22/25/rain-874041_960_720.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  if (desc === "Rain") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2014/05/26/14/45/rain-354617_960_720.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  if (desc === "Snow") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2017/02/15/11/15/wintry-2068298_960_720.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  if (desc === "Atmosphere") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2016/02/18/22/27/fog-1208283_960_720.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  return (
    <>
      <div className="weather">
        <p>Dane z dnia i godziny: {date}</p>
        <p>Miasto: {city}</p>
        <p>Temperatura: {temp}°C</p>
        <p>Ciśnienie: {pressure} hPa</p>
        <p>Prędkość wiatru: {wind} kph</p>
        <p>Wschód słońca: {sunriseTime}</p>
        <p>Zachód słońca: {sunsetTime}</p>
        <p>Condition: {desc}</p>
      </div>
    </>
  );
};

export default Result;
