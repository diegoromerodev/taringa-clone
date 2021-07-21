import React, { useContext } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../../providers/UserProvider";
import { userExists } from "../../services/firebase";
import { ContentContainer } from "../../styles/StyleAccents";
import MoreWidgets from "./MoreWidgets";
import PostsList from "./PostsList";
import PostsWidgets from "./PostsWidgets";

const Homepage = ({ posts, setPosts, userExists }) => {
  const user = useContext(UserContext);
  if (user?.email && (!user.description || !user.photo)) {
    return <Redirect to="/signup"></Redirect>;
  }
  return (
    <ContentContainer>
      <PostsList posts={posts} setPosts={setPosts}></PostsList>
      <PostsWidgets posts={posts} setPosts={setPosts}></PostsWidgets>
      <MoreWidgets posts={posts}></MoreWidgets>
    </ContentContainer>
  );
};

export default Homepage;
