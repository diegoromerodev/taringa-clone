import React, { useContext, useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { ContentContainer } from "../../styles/StyleAccents";
import { SinglePostLink } from "../Homepage/PostsList";
import UserAccolades from "./UserAccolades";
import UserInfo from "./UserInfo";

const UserTopContainer = styled(ContentContainer)`
  display: flex;
  background-color: #dbdbdb;
  justify-content: space-between;
  border-radius: 0px;
`;

const User = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const match = useRouteMatch();
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(match.params.id)
      .get()
      .then((docRef) => setUser(docRef.data()));
    firebase
      .firestore()
      .collection("posts")
      .get()
      .then((querySnapshot) => {
        const postsArr = [];
        querySnapshot.forEach((doc) => {
          const post = doc.data();
          postsArr.push(post);
        });
        setPosts(postsArr);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  document.title = `Perfil de ${user?.displayName ?? "alguien..."} - Taringa!`;
  return (
    <>
      <UserTopContainer>
        <UserInfo user={user}></UserInfo>
        <UserAccolades user={user}></UserAccolades>
      </UserTopContainer>
      <ContentContainer style={{ flexDirection: "column" }}>
        <h2>Últimos Posts creados</h2>
        <div>
          {posts
            .filter((post) => user.uid === post.authorId)
            .map((post, index) => (
              <SinglePostLink
                key={user.uid.substr(0, 4) + post.authorId.substr(0, 4) + index}
                className={"categoriaPost " + post.category}
              >
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </SinglePostLink>
            ))}
        </div>
      </ContentContainer>
    </>
  );
};

export default User;
