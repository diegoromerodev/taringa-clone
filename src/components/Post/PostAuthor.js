import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeader, WidgetBody } from "../../styles/StyleAccents";
import styled from "styled-components";

const AuthorContainer = styled(WidgetBody)`
  flex-grow: unset;
`;

const AuthorCardBody = styled.div`
  margin: 10px 20px;
  & > img {
    display: block;
    object-fit: cover;
    padding: 2px;
    background-color: #fafafa;
    border: 1px solid #333;
    margin-right: 10px;
    width: 120px;
    height: 120px;
  }
`;

const PostAuthor = ({ authorId }) => {
  const [author, setAuthor] = useState({});
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(authorId)
      .get()
      .then((docRef) => setAuthor(docRef.data()));
  }, [authorId]);
  return (
    <AuthorContainer style={{ width: "160px" }}>
      <SectionHeader>
        <p>Posteado por:</p>
      </SectionHeader>
      <AuthorCardBody>
        <img src={author?.photo}></img>
        <Link
          style={{ fontSize: "16px", fontWeight: "bold" }}
          to={`/users/${author?.uid}`}
        >
          {author?.displayName}
        </Link>
        <h2 style={{ color: "indianred" }}>{author?.followers}</h2>
        <h4 style={{ marginTop: "-10px" }}>SEGUIDORES</h4>
        <h2 style={{ color: "royalblue" }}>{author?.points}</h2>
        <h4 style={{ marginTop: "-10px" }}>PUNTOS</h4>
        <h2 style={{ color: "maroon" }}>{author?.comments}</h2>
        <h4 style={{ marginTop: "-10px" }}>COMENTARIOS</h4>
      </AuthorCardBody>
    </AuthorContainer>
  );
};

export default PostAuthor;
