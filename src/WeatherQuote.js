import React from "react";

export default function WeatherQuote(props) {
  let temperature = props.data;

  if (temperature < 0) {
    return "Beware of the cold!";
  } else {
    if (temperature < 3) {
      return "Winter is coming...";
    } else {
      if (temperature < 14) {
        return "Could be worse...";
      } else {
        if (temperature < 19) {
          return "Feels like spring";
        } else {
          if (temperature < 29) {
            return "Hello Summer!";
          } else {
            if (temperature < 60) {
              return "It's getting hot in here";
            } else {
              return null;
            }
          }
        }
      }
    }
  }
}
