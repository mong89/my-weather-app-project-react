import React from "react";
import clear_sky from "./weather_icons/clear_sky.png";
import few_clouds from "./weather_icons/few_clouds.png";
import cloudy from "./weather_icons/cloudy.png";
import shower_rain from "./weather_icons/shower_rain.png";
import rain from "./weather_icons/rain.png";
import thunderstorm from "./weather_icons/thunderstorm.png";
import snow from "./weather_icons/snow.png";

export default function WeatherIcons(description) {
  console.log(description);
  switch (description.type) {
    case "clear sky":
      return <img src={clear_sky} />;
    case "few clouds":
      return <img src={few_clouds} />;
    case "scattered clouds":
      return <img src={cloudy} />;
    case "broken clouds":
      return <img src={cloudy} />;
    case "overcast clouds":
      return <img src={cloudy} />;
    case "shower rain":
      return <img src={shower_rain} />;
    case "heavy intensity rain":
      return <img src={shower_rain} />;
    case "rain":
      return <img src={rain} />;
    case "light rain":
      return <img src={rain} />;
    case "moderate rain":
      return <img src={rain} />;
    case "thunderstorm":
      return <img src={thunderstorm} />;
    case "snow":
      return <img src={snow} />;
    case "light snow":
      return <img src={snow} />;
    case "mist":
      return <img src={cloudy} />;
    case "fog":
      return <img src={cloudy} />;
    default:
      return <img src={few_clouds} />;
  }
}
