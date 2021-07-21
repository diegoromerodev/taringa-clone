import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  &.user-header {
    padding: 0 8px;
    font-size: 14px;
    color: #222;
    text-shadow: 0 1px 0 #dcdcdc;
    border-left: 1px solid #777;
    background: linear-gradient(
      0,
      rgba(145, 145, 145, 1) 0%,
      rgba(195, 195, 195, 1) 100%
    );
  }
  &.user-header.last {
    border-radius: 0 5px 0 0;
    border-right: 1px solid #777;
    padding: 0;
    padding-left: 5px;
    margin-left: 0;
  }
  &.user-header > .logout {
    background: url("https://web.archive.org/web/20110302183315im_/http://o1.t26.net/images/big2v1.png?1.0")
      no-repeat center;
    border-right: none;
    margin-left: 0;
    height: 16px;
    width: 16px;
    background-position: 0 -964px;
    overflow: hidden;
    position: relative;
  }
  &.user-header > .crear-post {
    padding: 0;
    background: url("https://web.archive.org/web/20110302183315im_/http://o1.t26.net/images/big2v1.png?1.0")
      no-repeat center;
    border-right: none;
    margin-left: 0;
    height: 16px;
    width: 16px;
    background-position: 0 -873px;
    overflow: hidden;
    position: relative;
  }
  &.user-header.first {
    padding: 0;
    padding-left: 4px;
    margin-left: auto;
  }
`;

export { NavDiv, NavButton };
