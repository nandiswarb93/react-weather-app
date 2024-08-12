import React from "react";
import MyFunc from "./myfunc";
import WeatherApi from "./WeatherApi";

import "bootstrap/dist/css/bootstrap.min.css";
import CurrentLocation from "./currentLocation";

function App() {
  return (
    <div>
      <WeatherApi />
      <CurrentLocation />
    </div>
  );
}

export default App;
