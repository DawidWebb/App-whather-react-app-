import React from "react";
import Res from "./Res.css";

const Result = (props) => {
  const {
    err,
    city,
    temp,
    sunrise,
    sunset,
    wind,
    preasure,
    date,
  } = props.weather;
  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <React.Fragment>
        <h3>
          Wyniki wyszukiwania dla miasta: <span>{city}</span>
        </h3>
        <h4>Dane z dnia i godziny: {date}</h4>
        <h4>Aktualna temperatura: {temp} &#176;C</h4>
        <p>Wschód słońca: {sunriseTime}</p>
        <p>zachód słońca: {sunsetTime}</p>
        <p>Wiatr: {wind} m/s</p>
        <p>Ciśnienie: {preasure} hPa</p>
      </React.Fragment>
    );
  }

  return (
    <div className="result">{err ? `Nie mamy w bazie ${city}` : content}</div>
  );
};

export default Result;
