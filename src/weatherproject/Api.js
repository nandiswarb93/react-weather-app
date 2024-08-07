import axios from "axios";
import React, { useEffect, useState } from "react";

function WeatherApi() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const { data, status } = await axios.get("");
    if (status === 200) {
      setList(data);
    }
  };

  return <></>;
}

export default WeatherApi;
