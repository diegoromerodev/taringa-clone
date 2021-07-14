import React from "react";
import styled from "styled-components";
import { SectionHeader, WidgetBody } from "../../../styles/StyleAccents";

const RelevantBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  padding: 0 10px;
  & > * {
    margin: 0 3px;
  }
  & > *.thin {
    font-weight: 400;
  }
`;

const RelevantTags = () => {
  return (
    <WidgetBody>
      <SectionHeader>Últimos tags relevantes</SectionHeader>
      <RelevantBody>
        <h1>video</h1>
        <h1>imagen</h1>
        <h3 className="thin">paraguay</h3>
        <h1>video</h1>
        <h1>juegos</h1>
        <h3>paraguay</h3>
        <h1>comida</h1>
        <h1>imagen</h1>
        <h3>paraguay</h3>
        <h1>video</h1>
        <h1>imagen</h1>
        <h1 className="thin">venezuela</h1>
      </RelevantBody>
    </WidgetBody>
  );
};

export default RelevantTags;
