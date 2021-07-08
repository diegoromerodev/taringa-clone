import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CategoriesBar from "./CategoriesBar";

const NavDiv = styled.div`
  height: 30px;
  background: linear-gradient(180deg, #fafafa 49%, #efefef 50%);
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
  margin-top: 10px;
  box-shadow: 0 6px 5px rgba(20, 20, 20, 0.3);
`;

const NavButton = styled(NavLink)`
  border-right: 1px solid #ccc;
  display: inline-block;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-weight: 600;
  color: #222;
  font-size: 16px;
  &:first-child {
    border-radius: 5px 0 0 0;
  }
  & > *:first-child {
    margin-right: 5px;
  }
  &.current-header {
    background: linear-gradient(180deg, #000 15%, #222 26%, #444);
    color: #fafafa;
  }
  &.current-header:hover {
    color: #fafafa;
  }
  &:hover {
    color: #666;
  }
  &.sign-up {
    background: linear-gradient(
      0deg,
      rgba(159, 200, 51, 1) 49%,
      rgba(184, 222, 66, 1) 50%
    );
    border-right: 1px solid #777;
  }
  &.sign-in {
    color: #444;
    font-size: 14px;
    border-radius: 0 5px 0 0;
    margin-left: auto;
    border-left: 1px solid #777;
    border-right: none;
    background: linear-gradient(
      180deg,
      rgba(195, 182, 34, 1) 0%,
      rgba(248, 253, 45, 1) 100%
    );
  }
`;

const Navbar = () => {
  return (
    <>
      <NavDiv>
        <NavButton to="/" activeClassName="current-header">
          <p>Posts</p>
          <img
            src="https://web.archive.org/web/20110723164326im_/http://o2.t26.net/images/arrowdown.png"
            alt="TOPs"
          ></img>
        </NavButton>
        <NavButton to="/comunidades" activeClassName="current-header">
          <p>Comunidades</p>
          <img
            src="https://web.archive.org/web/20110723164326im_/http://o2.t26.net/images/arrowdown.png"
            alt="TOPs"
          ></img>
        </NavButton>
        <NavButton to="/tops" activeClassName="current-header">
          <p>TOPs</p>
          <img
            src="https://web.archive.org/web/20110723164326im_/http://o2.t26.net/images/arrowdown.png"
            alt="TOPs"
          ></img>
        </NavButton>
        <NavButton to="/signup" className="sign-up">
          Registrate!
        </NavButton>
        <NavButton to="#" className="sign-in">
          <img src="https://web.archive.org/web/20110723170641im_/http:/o2.t26.net/images/iconIdentificate.png"></img>
          Identificarme
        </NavButton>
      </NavDiv>
      <CategoriesBar />
    </>
  );
};

export default Navbar;
