import React from "react";
import Moment from "react-moment";
import styled from "styled-components";
import moment from "moment";

const UserInfoContainer = styled.div`
  display: flex;
  flex-grow: 4;
  align-items: flex-start;
  & > img {
    display: block;
    padding: 2px;
    background-color: #fafafa;
    border: 1px solid #333;
    margin-right: 10px;
    width: 120px;
    height: 120px;
    object-fit: cover;
  }
`;

const UserInfo = ({ user }) => {
  const newDate = new Date(1970, 0, 1);
  newDate.setMilliseconds(user?.date);
  moment.locale("es");
  return (
    <UserInfoContainer>
      <img src={user?.photo}></img>
      <div>
        <h1>{user?.displayName}</h1>
        <p>{user?.description}</p>
        <p>
          Se unió a la familia de Taringa! el&nbsp;
          <Moment format="DD">{newDate}</Moment>
          &nbsp;de&nbsp;
          <Moment format="MMMM">{newDate}</Moment>&nbsp;del&nbsp;
          <Moment format="YYYY">{newDate}</Moment>.
        </p>
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
