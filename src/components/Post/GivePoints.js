import React from "react";
import styled from "styled-components";

const PointsContainer = styled.div`
  display: flex;
  margin: 3px 0;
  justify-content: center;
  & > button {
    background: transparent;
    font-weight: bold;
    color: royalblue;
    margin: 0 5px;
    cursor: pointer;
  }
`;

const GivePoints = ({ authorId, postId, setPoints }) => {
  const handlePoints = (e) => {
    const points = +e.target.innerText;
    const db = firebase.firestore();
    console.log(postId);
    db.collection("users")
      .doc(authorId)
      .update({ points: firebase.firestore.FieldValue.increment(points) });
    db.collection("posts")
      .doc(postId)
      .update({ points: firebase.firestore.FieldValue.increment(points) });
    setPoints((prevState) => prevState + points);
  };
  return (
    <PointsContainer>
      <strong>Dar Puntos: </strong>
      <button onClick={handlePoints}>1</button>-
      <button onClick={handlePoints}>2</button>-
      <button onClick={handlePoints}>3</button>-
      <button onClick={handlePoints}>4</button>-
      <button onClick={handlePoints}>5</button>-
      <button onClick={handlePoints}>6</button>-
      <button onClick={handlePoints}>7</button>-
      <button onClick={handlePoints}>8</button>-
      <button onClick={handlePoints}>9</button>-
      <button onClick={handlePoints}>10</button>
    </PointsContainer>
  );
};

export default GivePoints;
