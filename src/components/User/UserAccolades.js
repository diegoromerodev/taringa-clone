import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
`;

const GridBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #c7c7c7;
  border-radius: 5px;
  padding: 2px 5px;
  & > .lead {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: -10px;
  }
  &.rank {
    color: royalblue;
    background-color: #fafafa;
  }
`;

const UserAccolades = ({ user }) => {
  return (
    <GridContainer>
      <GridBox className="rank">
        <p className="lead">New Full User</p>
        <p>Rango</p>
      </GridBox>
      <GridBox>
        <p className="lead">{user?.points}</p>
        <p>Puntos</p>
      </GridBox>
      <GridBox>
        <p className="lead">{user?.posts}</p>
        <p>Posts</p>
      </GridBox>
      <GridBox>
        <p className="lead">{user?.comments}</p>
        <p>Comentarios</p>
      </GridBox>
      <GridBox>
        <p className="lead">{user?.followers}</p>
        <p>Seguidores</p>
      </GridBox>
      <GridBox>
        <p className="lead">{user?.followers && user?.followers + 26}</p>
        <p>Siguiendo</p>
      </GridBox>
    </GridContainer>
  );
};

export default UserAccolades;
