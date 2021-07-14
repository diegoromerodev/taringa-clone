import React from "react";
import styled from "styled-components";
import FeaturedPosts from "./secondColumn/FeaturedPosts";
import LatestComments from "./secondColumn/LatestComments";
import OnlineUsers from "./secondColumn/OnlineUsers";
import SearchWidget from "./secondColumn/SearchWidget";
import TopPosts from "./secondColumn/TopPosts";
import TopUsers from "./secondColumn/TopUsers";

const ColumnContainer = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PostsWidgets = () => {
  return (
    <ColumnContainer>
      <SearchWidget></SearchWidget>
      <OnlineUsers></OnlineUsers>
      <LatestComments></LatestComments>
      <FeaturedPosts></FeaturedPosts>
      <TopPosts></TopPosts>
      <TopUsers></TopUsers>
    </ColumnContainer>
  );
};

export default PostsWidgets;
