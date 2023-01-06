import axios from "axios";
import React from "react";
import { Dna } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponce(response) {
    alert(`Weather in ${response.data.name} ${response.data.main.temp}`);
  }
  let apiKey = `8f310d7a46f9ff9b52d643e1b35d93dd`;
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponce);

  return (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
}
