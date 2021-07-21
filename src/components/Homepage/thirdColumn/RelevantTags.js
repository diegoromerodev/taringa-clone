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

const RelevantTags = ({ posts }) => {
  return (
    <WidgetBody>
      <SectionHeader>Últimos tags relevantes</SectionHeader>
      <RelevantBody>
        {posts
          .reduce((acc, currPost) => {
            if (!currPost.tags || acc.length > 15) return acc;
            return [...acc, ...currPost.tags];
          }, [])
          .map((tag, index) => {
            return (
              <h1
                key={tag + index}
                className={Math.random() < 0.2 ? "thin" : ""}
                style={{
                  fontSize: Math.floor(Math.random() * (35 - 60)) + 35 + "px",
                }}
              >
                {tag}
              </h1>
            );
          })}
      </RelevantBody>
    </WidgetBody>
  );
};

export default RelevantTags;
