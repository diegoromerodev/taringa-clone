import React from "react";
import styled from "styled-components";
import RelevantTags from "./thirdColumn/RelevantTags";
import WeatherWidget from "./thirdColumn/WeatherWidget";

const MoreContainer = styled.div`
  width: 250px;
`;

const MoreWidgets = () => {
  return (
    <MoreContainer>
      <WeatherWidget></WeatherWidget>
      <RelevantTags></RelevantTags>
    </MoreContainer>
  );
};

export default MoreWidgets;
