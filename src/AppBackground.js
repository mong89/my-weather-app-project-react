import React from "react";

import background_day from "../src/background_day.jpg";
import background_night from "../src/background_night.jpg";

export default function AppBackground(props) {
  let hours = props.date;
  if (hours < 5) {
    return <div src={background_night} />;
  } else {
    if (hours < 18) {
      return <img src={background_day} />;
    } else {
      return null;
    }
  }
}
