import React from "react";
import WeatherDate from "./WeatherDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherTemperature celsius={props.data.temperature} />

          <div className="icons">
            <WeatherIcons type={props.data.icon} />
          </div>
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
