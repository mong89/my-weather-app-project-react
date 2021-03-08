import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";
import AppBackground from "./AppBackground";

export default function App() {
  return (
    <div className="container" style={{ width: 600 }}>
      {" "}
      <div className="my-weather-app-wrapper">
        <div className="weather-content">
          <Weather city="Warsaw" />
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
