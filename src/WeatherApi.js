import axios from "axios";
import React, { useRef, useState } from "react";
import "./WeatherApi.css";

function WeatherApi() {
  const search = useRef();
  const [list, setList] = useState({});
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState([]);

  const fetchApi = async (query) => {
    setLoading(true);
    try {
      const { data, status } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=c8f21f86ece4d2370667123432f0e078&units=metric`
      );
      if (status === 200) {
        setList(data);
      }
    } catch (e) {
      console.log(e);
      setList([]);
    } finally {
      setLoading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userEntered = search.current.value.trim();
    if (userEntered.length > 0) {
      fetchApi(userEntered);
      const suggestion = () => {
        if (!array.includes(userEntered)) {
          return [...array, userEntered];
        } else {
          alert("already searched see the recent search history");
          return array;
        }
      };
      setArray(suggestion);
    } else {
      alert("please enter city name correctly");
    }
  };

  const deleteHandler = (each) => {
    const updatedArray = array.filter((update) => update !== each);
    setArray(updatedArray);
  };

  const searchHandler = (each) => {
    const newSearch = fetchApi(each);
    setList(newSearch);
  };

  return (
    <>
      <form className="weather-form" onSubmit={submitHandler}>
        <label htmlFor="search" className="form-label">
          Enter city name to get weather condition:
        </label>
        <input type="text" id="search" ref={search} className="form-input" />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>

      <div className="recent-search">
        {Object.keys(list).length > 0 && (
          <>
            <p className="recent-search-title">Recent search</p>
            {array.length > 0 &&
              array.map((each, idx) => (
                <div key={idx} className="recent-item">
                  <h6
                    className="recent-city"
                    onClick={() => {
                      searchHandler(each);
                    }}
                  >
                    {each}
                  </h6>
                  <button
                    className="delete-button"
                    onClick={() => {
                      deleteHandler(each);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
          </>
        )}
      </div>
      {loading ? (
        <h3 className="loading-text">Loading...</h3>
      ) : (
        Object.keys(list).length > 0 && (
          <div className="weather-info">
            <h5 className="weather-detail">City: {list.name}</h5>
            <h5 className="weather-detail">ID: {list.id}</h5>
            <h5 className="weather-detail">Country: {list.sys.country}</h5>
            <h5 className="weather-detail">Weather: {list.weather[0].main}</h5>
            <h5 className="weather-detail">Temperature: {list.main.temp}°C</h5>
            <h5 className="weather-detail">
              Pressure: {list.main.pressure} hPa
            </h5>
            <h5 className="weather-detail">Humidity: {list.main.humidity}%</h5>
          </div>
        )
      )}
    </>
  );
}

export default WeatherApi;
