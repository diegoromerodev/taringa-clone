import React from "react";
import styled from "styled-components";
import MoreWidgets from "./MoreWidgets";
import PostsList from "./PostsList";
import PostsWidgets from "./PostsWidgets";

const ContentContainer = styled.div`
  background: #fafafa;
  padding: 10px;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-evenly;
`;

const Homepage = () => {
  return (
    <ContentContainer>
      <PostsList></PostsList>
      <PostsWidgets></PostsWidgets>
      <MoreWidgets></MoreWidgets>
    </ContentContainer>
  );
};

export default Homepage;
