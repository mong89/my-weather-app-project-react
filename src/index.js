import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./Form";
import Date from "./Date";
import City from "./City";
import Temperature from "./Temperature";
import Background from "./src/background_image.jpg";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container" style={{ width: 600 }}>
        <div className="my-weather-app-wrapper">
          <div className="my-weather-app">
            <div style={{ backgroundImage: `url(${Background})` }}>
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
      </div>
      <footer>
        <a href="https://github.com/mong89/my-weather-app-project-react.git">
          Open source code
        </a>{" "}
        by Monika Gawińska
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
