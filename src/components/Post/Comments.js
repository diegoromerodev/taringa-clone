import React, { useContext } from "react";
import Comment from "./Comment";
import styled from "styled-components";
import { ContinueButton, StandardForm } from "./PostAccents";
import { UserContext } from "../../providers/UserProvider";

const LineBreak = styled.div`
  height: 1px;
  background-color: #c7c7c7;
`;

const Comments = ({ comments, setCommentPoints, setPostData }) => {
  const user = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.children[0].value) return;
    setPostData((prevState) => {
      const newState = Object.assign({}, prevState);
      newState.comments.unshift({
        text: e.target.children[0].value,
        user: user.displayName,
        points: 0,
        photo: user.photo,
      });
      return newState;
    });
    setCommentPoints(0);
    e.target.children[0].value = "";
    firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .update({
        comments: firebase.firestore.FieldValue.increment(1),
      });
  };

  return (
    <div>
      <h4>
        {comments?.length +
          (comments?.length === 1 ? " Comentario" : " Comentarios")}
      </h4>
      <LineBreak></LineBreak>
      {user && (
        <StandardForm style={{ flexDirection: "row" }} onSubmit={handleSubmit}>
          <input
            style={{ padding: "2px 4px", flexGrow: 2, marginRight: "10px" }}
            type="text"
            placeholder="Escribe tu opinión..."
          ></input>
          <ContinueButton>Enviar comentario</ContinueButton>
        </StandardForm>
      )}
      {comments?.map((comment, index) => (
        <Comment
          key={comment.text + index}
          setCommentPoints={setCommentPoints}
          index={index}
          user={comment.user}
          photo={comment.photo}
          text={comment.text}
          points={comment.points}
        ></Comment>
      ))}
    </div>
  );
};

export default Comments;
