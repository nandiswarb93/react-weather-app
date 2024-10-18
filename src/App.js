// import React from "react";
// import MyFunc from "./myfunc";
// import WeatherApi from "./WeatherApi";
// import "bootstrap/dist/css/bootstrap.min.css";
// import CurrentLocation from "./currentLocation";

// function App() {
//   const containerStyle = {
//     textAlign: "center",
//     padding: "20px",
//     backgroundColor: "#f0f0f0",
//     minHeight: "100vh",
//   };

//   const headingStyle = {
//     color: "#333",
//     margin: "20px 0",
//     fontSize: "24px",
//     fontWeight: "bold",
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>Weather app Search by city</h2>
//       <WeatherApi />
//       <h2 style={headingStyle}>Weather app current Location</h2>
//       <CurrentLocation />
//     </div>
//   );
// }

// export default App;

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
      <h2 style={headingStyle}>Weather App</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h3 style={headingStyle}>Search by City</h3>
            <WeatherApi />
          </div>
          <div className="col-lg-6 col-md-12">
            <h3 style={headingStyle}>Current Location</h3>
            <CurrentLocation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
