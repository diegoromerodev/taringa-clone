import React from "react";
import styled from "styled-components";
import { SectionHeader, WidgetBody } from "../../styles/StyleAccents";

const CommentContainer = styled.div`
  display: flex;
`;

const CommentTop = styled(SectionHeader)`
  display: flex;
  justify-content: space-between;
`;

const PointsButton = styled.button`
  background-color: transparent;
  font-weight: bold;
  color: #266a00;
  cursor: pointer;
`;

const Comment = ({ user, photo, text, points, setCommentPoints, index }) => {
  return (
    <CommentContainer style={{ margin: "10px 0" }}>
      <img
        style={{
          display: "block",
          width: "48px",
          height: "48px",
          objectFit: "cover",
          border: "1px solid #a7a7a7",
        }}
        src={photo}
      />
      <WidgetBody
        style={{
          marginLeft: "5px",
          borderRadius: 0,
          border: "1px solid #a7a7a7",
        }}
      >
        <CommentTop>
          <p>{user} dijo:</p>
          <PointsButton onClick={() => setCommentPoints(index)}>
            +{points}
          </PointsButton>
        </CommentTop>
        <p style={{ padding: "2px 10px" }}>{text}</p>
      </WidgetBody>
    </CommentContainer>
  );
};

export default Comment;
