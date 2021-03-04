import React from "react";
import WeatherDate from "./WeatherDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";
import WeatherQuote from "./WeatherQuote";

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
          <span className="description">{props.data.description}</span>
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
        <span className="quote">
          <WeatherQuote data={props.data.temperature} />
        </span>
      </div>
    </div>
  );
}
