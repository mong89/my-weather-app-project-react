import React, { useState } from "react";
import WeatherSearch from "./WeatherSearch";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import background_night from "./background_night.jpg";
import background_day from "./background_day.jpg";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      icon: response.data.weather[0].description,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "cbaf782c437236cdb5aa2956ff503d4d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    const hours = weatherData.date.getHours();
    if (hours < 5 || hours > 20) {
      return (
        <div
          className="my-weather-app"
          style={{ backgroundImage: `url(${background_night})` }}
        >
          MyWeather App
          <div className="form">
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />{" "}
              <input type="submit" value="search" className="btn btn-primary" />
            </form>
          </div>
          <WeatherSearch data={weatherData} />
          <WeatherForecast city={weatherData.city} />
        </div>
      );
    } else {
      return (
        <div
          className="my-weather-app"
          style={{ backgroundImage: `url(${background_day})` }}
        >
          MyWeather App
          <div className="form">
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />{" "}
              <input type="submit" value="search" className="btn btn-primary" />
            </form>
          </div>
          <WeatherSearch data={weatherData} />
          <WeatherForecast city={weatherData.city} />
        </div>
      );
    }
  } else {
    search();
    return "Loading...";
  }
}
