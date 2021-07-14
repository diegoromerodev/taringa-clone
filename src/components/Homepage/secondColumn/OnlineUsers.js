import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { WidgetBody, WidgetItem } from "../../../styles/StyleAccents";

const PostCountWidgetBody = styled(WidgetBody)`
  flex-grow: 0;
  border: 1px solid #999;
  padding-top: 2px;
`;

const SmallBanner = styled.div`
  padding: 1px 0;
  font-weight: 600;
  background-color: #bbb;
  margin: 0 6px;
  text-align: center;
  & > a {
    color: #333;
  }
  & > a:hover {
    text-decoration: underline;
  }
`;

const OnlineUsers = () => {
  return (
    <PostCountWidgetBody>
      <WidgetItem className="two-options">
        <span style={{ fontWeight: 600, color: "#5f6fb8" }}>
          200.707 usuarios online
        </span>
        <p>11.607.969 miembros</p>
      </WidgetItem>
      <WidgetItem className="two-options">
        <p>10.966.303 posts</p>
        <p>68.808.252 comentarios</p>
      </WidgetItem>
      <SmallBanner>
        <Link>Taringa! en vivo</Link>
      </SmallBanner>
    </PostCountWidgetBody>
  );
};

export default OnlineUsers;
