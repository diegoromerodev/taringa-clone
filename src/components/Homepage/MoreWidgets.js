import React from "react";
import styled from "styled-components";
import RelevantTags from "./thirdColumn/RelevantTags";
import WeatherWidget from "./thirdColumn/WeatherWidget";

const MoreContainer = styled.div`
  width: 250px;
`;

const MoreWidgets = ({ posts }) => {
  return (
    <MoreContainer>
      <WeatherWidget></WeatherWidget>
      <RelevantTags posts={posts}></RelevantTags>
    </MoreContainer>
  );
};

export default MoreWidgets;
