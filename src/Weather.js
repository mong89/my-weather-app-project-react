import React, { useState } from "react";
import WeatherDate from "./WeatherDate";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="my-weather-app">
        MyWeather App
        <div className="form">
          <form className="search-form">
            <input
              type="text"
              placeholder="Enter a city"
              autoComplete="off"
              autoFocus="on"
            />{" "}
            <input type="submit" value="search" className="btn btn-primary" />
          </form>
        </div>
        <div className="row">
          <div className="col-5">
            <div className="currentDate">
              <h1>
                <WeatherDate date={weatherData.date} />
              </h1>
            </div>
            <div className="city">
              <h2>
                <strong>{weatherData.city}</strong>
              </h2>
            </div>
            <div className="temperature-content">
              <span className="temperature">
                <p>{Math.round(weatherData.temperature)}</p>
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
                <span className="description">{weatherData.description}</span>
              </p1>
            </div>
          </div>
          <div className="col-5">
            <ul>
              <li>
                Humidity: <span className="humidity"></span>
                {weatherData.humidity} %
              </li>
              <li>
                Wind: <span className="wind"></span>
                {weatherData.wind} km/h
              </li>
            </ul>
            <p2 className="quote"> What a lovely weather!</p2>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4af9b5d3de1ded9c0d4d2430790f082e";
    let city = "Warsaw";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
