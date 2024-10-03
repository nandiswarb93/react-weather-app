import React from "react";
import MyFunc from "./myfunc";
import WeatherApi from "./WeatherApi";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentLocation from "./currentLocation";

function App() {
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
  };

  const headingStyle = {
    color: "#333",
    margin: "20px 0",
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Weather app Search by city</h2>
      <WeatherApi />
      <h2 style={headingStyle}>Weather app current Location</h2>
      <CurrentLocation />
    </div>
  );
}

export default App;
