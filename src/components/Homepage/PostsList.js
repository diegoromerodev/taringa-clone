import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { SectionHeader } from "../../styles/StyleAccents";

const PostsContainer = styled.ul`
  background: #d7d7d7;
  width: 380px;
  list-style-type: none;
  border-radius: 5px;
  overflow: hidden;
  list-style-position: outside;
`;

const SinglePostLink = styled.li`
  padding: 2px 28px;
  cursor: pointer;
  font-size: 13px;
  height: 16px;
  margin: 5px;
  display: list-item;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  background: transparent
    url("https://web.archive.org/web/20110723170641im_/http:/o2.t26.net/images/big1v12.png?1.1")
    no-repeat scroll left top;
  &:hover {
    text-decoration: underline;
  }
  &.noticias {
    background-position: 5px -240px;
  }
  &.humor {
    background-position: 5px -767px;
  }
  &.salud-bienestar {
    background-position: 5px -808px;
  }
  &.imagenes {
    background-position: 5px -62px;
  }
  &.arte {
    background-position: 5px -130px;
  }
`;

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("posts")
      .get()
      .then((querySnapshot) => {
        const postRetrieval = [];
        querySnapshot.forEach((doc) => {
          postRetrieval.push(doc.data());
        });

        setPosts(postRetrieval);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  return (
    <PostsContainer>
      <SectionHeader>
        <p>Últimos posts</p>
      </SectionHeader>
      {posts.map((post) => (
        <SinglePostLink className={post.category}>
          {post.title.length > 60
            ? post.title.slice(0, 57) + "..."
            : post.title}
        </SinglePostLink>
      ))}
    </PostsContainer>
  );
};

export default PostsList;
