import axios from "axios";
import React, { useState } from "react";
import "./CurrentLocation.css";

const CurrentLocation = () => {
  const [list, setList] = useState([]);

  const submitHandler = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            await fetchWeather(
              position.coords.latitude,
              position.coords.longitude
            );
          } catch (e) {
            console.log(e);
          }
        },
        () => {
          console.log("Geolocation is not supported by this browser.");
        }
      );
    }
  };

  const fetchWeather = async (lat, lon) => {
    try {
      const { data, status } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c8f21f86ece4d2370667123432f0e078`
      );
      if (status === 200) {
        setList(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="weather-container">
      <button className="weather-button" onClick={submitHandler}>
        Use My Current Location
      </button>
      {list.name && (
        <div className="weather-info">
          <h4 className="weather-station">Station: {list.base}</h4>
          <h3 className="weather-name">Name: {list.name}</h3>
          <h4 className="weather-wind">Wind Speed: {list.wind.speed} m/s</h4>
          <h4 className="weather-humidity">Humidity: {list.main.humidity}%</h4>
          <h4 className="weather-temperature">
            Temperature: {list.main.temp}°K
          </h4>
        </div>
      )}
    </div>
  );
};

export default CurrentLocation;
