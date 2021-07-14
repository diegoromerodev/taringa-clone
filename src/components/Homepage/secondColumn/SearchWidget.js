import React from "react";
import styled from "styled-components";

const SearchCategories = styled.button`
  display: inline-block;
  border: 1px solid;
  border-color: #aaa #aaa #333 #aaa;
  font-weight: 600;
  color: #666;
  flex-grow: 1;
  padding: 3px;
  &.selected {
    background-color: #5f6fb8;
    border-color: #333 #333 transparent #333;
    color: #fafafa;
  }
`;

const SearchBarContainer = styled.div`
  padding: 10px;
  margin-bottom: 6px;
  border-radius: 0 0 5px 5px;
  background: linear-gradient(
    0,
    rgba(44, 66, 163, 1) 0%,
    rgba(95, 111, 184, 1) 100%
  );
`;

const SearchContainer = styled.div`
  margin-left: 6px;
`;

const SearchButtons = styled.div`
  display: flex;
`;

const SearchText = styled.div`
  background-color: #fafafa;
  border-radius: 5px;
  border: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > input::placeholder {
    color: #aaa;
    font-size: 1.4em;
    font-weight: 600;
  }
  & > input {
    display: block;
    padding: 10px 6px 5px 6px;
    border-radius: 5px;
    border-radius: 30px;
  }
  & > button {
    background: url("https://web.archive.org/web/20110723170641im_/http:/o2.t26.net/images/btn-home-search.png")
      no-repeat center;
    width: 39px;
    height: 35px;
    margin-right: 1px;
  }
`;

const SearchWidget = () => {
  return (
    <SearchContainer>
      <SearchButtons>
        <SearchCategories>
          <p>Web</p>
        </SearchCategories>
        <SearchCategories className="selected">
          <p>Posts</p>
        </SearchCategories>
        <SearchCategories>
          <p>Comunidades</p>
        </SearchCategories>
        <SearchCategories>
          <p>Empleos</p>
        </SearchCategories>
      </SearchButtons>
      <SearchBarContainer>
        <SearchText>
          <input type="text" placeholder="Buscar"></input>
          <button type="submit"></button>
        </SearchText>
      </SearchBarContainer>
    </SearchContainer>
  );
};

export default SearchWidget;
