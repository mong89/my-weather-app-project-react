import React from "react";

export default function Temperature() {
  return (
    <div className="temperature-content">
      <div class="row">
        <div class="col-5">
          <p>2</p>
          <span className="temperature-unit">
            <a href="#">°C </a>|<a href="#">°F</a>
          </span>

          <img className="icon" />
          <br />
          <br />
          <p1>
            <span className="description">cloudy</span>
          </p1>
        </div>
        <div className="col-5">
          <ul>
            <li>
              Humidity: <span className="humidity"></span>100 %
            </li>
            <li>
              Wind: <span className="wind"></span>25 km/h
            </li>
          </ul>
          <p2 className="quote"> What a lovely weather!</p2>
        </div>
      </div>
    </div>
  );
}
