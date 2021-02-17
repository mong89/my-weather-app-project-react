import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import Date from "./Date";
import City from "./City";
import Temperature from "./Temperature";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container" style={{ width: 600 }}>
        <div className="my-weather-app-wrapper">
          <div className="my-weather-app">
            MyWeather App
            <Form />
            <h1>
              <Date />
            </h1>
            <h2>
              <City />
            </h2>
            <Temperature />
          </div>
        </div>
      </div>
      <a href="https://github.com/mong89/my-weather-app-project-react.git">
        Open source code
      </a>{" "}
      by Monika Gawińska
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
