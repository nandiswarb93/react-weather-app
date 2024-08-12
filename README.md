


import axios from "axios";
import React, { useRef, useState } from "react";
import {
  Form,
  Button,
  Card,
  Spinner,
  Alert,
  ListGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";

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
      setList({});
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
        return [...array, userEntered];
      };
      setArray(suggestion);
    } else {
      alert("Please enter the city name correctly");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="search">
                  <Form.Label>
                    Enter city name to get weather condition:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    ref={search}
                    placeholder="City Name"
                  />
                  <Button onClick={submitHandler}>search</Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>

          {array.length > 0 && (
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Recent Searches</Card.Title>
                <ListGroup variant="flush">
                  {array.map((each, idx) => (
                    <ListGroup.Item key={idx}>{each}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          )}

          {loading ? (
            <Spinner animation="border" variant="primary" className="mt-3" />
          ) : Object.keys(list).length === 0 ? (
            <Alert variant="danger" className="mt-3">
              Data not found
            </Alert>
          ) : (
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Weather Details</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>City: {list.name}</ListGroup.Item>
                  <ListGroup.Item>ID: {list.id}</ListGroup.Item>
                  <ListGroup.Item>Country: {list.sys.country}</ListGroup.Item>
                  <ListGroup.Item>
                    Sunrise:{" "}
                    {new Date(list.sys.sunrise * 1000).toLocaleTimeString()}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Sunset:{" "}
                    {new Date(list.sys.sunset * 1000).toLocaleTimeString()}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Weather: {list.weather[0].main}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Description: {list.weather[0].description}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Temperature: {list.main.temp}°C
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Min Temperature: {list.main.temp_min}°C
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Max Temperature: {list.main.temp_max}°C
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Pressure: {list.main.pressure} hPa
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Humidity: {list.main.humidity}%
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Wind Speed: {list.wind.speed} m/s
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Wind Direction: {list.wind.deg}°
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default WeatherApi;







// import axios from "axios";

// import React, { useRef, useState } from "react";

// function WeatherApi() {
//   const search = useRef();
//   const [list, setList] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [array, setArray] = useState([]);

//   const fetchApi = async (query) => {
//     setLoading(true);
//     try {
//       const { data, status } = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=c8f21f86ece4d2370667123432f0e078&units=metric`
//       );
//       if (status === 200) {
//         setList(data);
//       }
//     } catch (e) {
//       console.log(e);
//       setList({});
//     } finally {
//       setLoading(false);
//     }
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const userEntered = search.current.value.trim();
//     if (userEntered.length > 0) {
//       fetchApi(userEntered);
//       const suggestion = () => {
//         return [...array, userEntered];
//       };
//       setArray(suggestion);
//     } else {
//       alert("please enter city name correctly");
//     }
//   };
//   console.log(array);
//   return (
//     <>
//       <form onSubmit={submitHandler}>
//         <label htmlFor="search">
//           Enter city name to get weather condition:
//         </label>
//         <input type="text" id="search" ref={search} />
//         <button type="submit">Submit</button>
//       </form>
//       <p>recent search</p>
//       {array.length > 0 &&
//         array.map((each, idx) => (
//           <div key={idx}>
//             <h6>{each}</h6>
//             <button>delete</button>
//           </div>
//         ))}
//       {loading ? (
//         <h3>Loading...</h3>
//       ) : Object.keys(list).length === 0 ? (
//         <h3>Data not found</h3>
//       ) : (
//         <div>
//           <h5>City: {list.name}</h5>
//           <h5>ID: {list.id}</h5>
//           <h5>Country: {list.sys.country}</h5>
//           <h5>
//             Sunrise: {new Date(list.sys.sunrise * 1000).toLocaleTimeString()}
//           </h5>
//           <h5>
//             Sunset: {new Date(list.sys.sunset * 1000).toLocaleTimeString()}
//           </h5>
//           <h5>Weather: {list.weather[0].main}</h5>
//           <h5>Description: {list.weather[0].description}</h5>
//           <h5>Temperature: {list.main.temp}°C</h5>
//           <h5>Min Temperature: {list.main.temp_min}°C</h5>
//           <h5>Max Temperature: {list.main.temp_max}°C</h5>
//           <h5>Pressure: {list.main.pressure} hPa</h5>
//           <h5>Humidity: {list.main.humidity}%</h5>
//           <h5>Wind Speed: {list.wind.speed} m/s</h5>
//           <h5>Wind Direction: {list.wind.deg}°</h5>
//         </div>
//       )}
//     </>
//   );
// }

// export default WeatherApi;
