import React from "react";
import styled from "styled-components";
import {
  SectionHeader,
  WidgetBody,
  WidgetItem,
} from "../../../styles/StyleAccents";

const LatestComments = ({ posts }) => {
  return (
    <WidgetBody>
      <SectionHeader>
        <p>Últimos comentarios</p>
      </SectionHeader>
      {posts
        .reduce((acc, currPost) => {
          if (!currPost.comments) return acc;
          return [...acc, ...currPost.comments];
        }, [])
        .map((comment, index) => {
          if (index > 9) return null;
          return (
            <WidgetItem
              key={"latcomm" + comment.text[1] + comment.photo[9] + index}
            >
              <strong>{comment.user}</strong>&nbsp;&nbsp;
              {(comment.user + comment.text).length > 40
                ? comment.text.slice(0, 37 - comment.user.length) + "..."
                : comment.text}
            </WidgetItem>
          );
        })}
    </WidgetBody>
  );
};

export default LatestComments;
