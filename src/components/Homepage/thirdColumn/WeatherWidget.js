import React, { useEffect } from "react";
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
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(console.log);
  }, []);
  return (
    <WeatherBody>
      <p style={{ fontWeight: 600 }}>El clima en Washington</p>
      <p
        style={{
          fontWeight: 600,
          color: "#666",
          paddingLeft: "20px",
          background:
            "url('https://web.archive.org/web/20110723164326im_/http://o2.t26.net/images/clima/i_0002.png') no-repeat center left",
        }}
      >
        Temp <span style={{ color: "#22d" }}>33°</span> - Hum{" "}
        <span style={{ color: "#22d" }}>47%</span>
      </p>
      <p style={{ fontWeight: 600 }}>Ciudad detectada automáticamente</p>
    </WeatherBody>
  );
};

export default WeatherWidget;
