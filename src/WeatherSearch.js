import React from "react";
import WeatherDate from "./WeatherDate";

export default function WeatherSearch(props) {
  return (
    <div className="row">
      <div className="col-5">
        <div className="currentDate">
          <h1>
            <WeatherDate date={props.data.date} />
          </h1>
        </div>
        <div className="city">
          <h2>
            <strong>{props.data.city}</strong>
          </h2>
        </div>
        <div className="temperature-content">
          <span className="temperature">
            <p>{Math.round(props.data.temperature)}</p>
          </span>
          <span className="temperature-unit">
            <a href="#">°C </a>|<a href="#">°F</a>
          </span>
          <img
            className="icon"
            src="../Documents/SheCodes/my-weather-app-project-react/src/weather_icons"
          />
          <br />
          <br />
          <p1>
            <span className="description">{props.data.description}</span>
          </p1>
        </div>
      </div>
      <div className="col-5">
        <ul>
          <li>
            Humidity: <span className="humidity"></span>
            {props.data.humidity} %
          </li>
          <li>
            Wind: <span className="wind"></span>
            {props.data.wind} km/h
          </li>
        </ul>
        <p2 className="quote"> What a lovely weather!</p2>
      </div>
    </div>
  );
}
