import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { WidgetBody } from "../../../styles/StyleAccents";

const WeatherBody = styled(WidgetBody)`
  border: 1px solid #777;
  padding: 0 5px;
  & > * {
    padding: 4px 0;
    border-bottom: 1px solid #777;
  }
  & > *:last-child {
    border-bottom: none;
  }
`;

const WeatherWidget = () => {
  const [userLocation, setUserLocation] = useState("");
  const [weatherObj, setWeatherObj] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=pk.c012d937862c346c501e3aeeab1f13b9` +
          `&lat=${location.coords.latitude}&lon=${location.coords.longitude}&format=json`
      )
        .then((data) => data.json())
        .then((loc) => setUserLocation(loc.address.suburb));
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?` +
          `lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric` +
          `&appid=577762e27d7c949b728446a34f17376d`
      )
        .then((data) => data.json())
        .then((wthr) =>
          setWeatherObj({ temp: wthr.current.temp, hum: wthr.current.humidity })
        );
    });
  }, []);
  return (
    <WeatherBody>
      <p style={{ fontWeight: 600 }}>El clima en {userLocation}</p>
      <p
        style={{
          fontWeight: 600,
          color: "#666",
          paddingLeft: "20px",
          background:
            "url('https://web.archive.org/web/20110723164326im_/http://o2.t26.net/images/clima/i_0002.png') no-repeat center left",
        }}
      >
        Temp{" "}
        <span style={{ color: "#22d" }}>{Math.round(weatherObj.temp)}°</span> -
        Hum <span style={{ color: "#22d" }}>{weatherObj.hum}%</span>
      </p>
      <p style={{ fontWeight: 600 }}>Ciudad detectada automáticamente</p>
    </WeatherBody>
  );
};

export default WeatherWidget;
