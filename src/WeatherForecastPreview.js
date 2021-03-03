import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  return (
    <div className="WeatherForecastPreview col">
      <div className="ForecastHour">{hours()}</div>
      <WeatherIcons type={props.data.weather[0].description} />
      <div className="ForecastTemp">{temperature()}</div>
    </div>
  );
}
