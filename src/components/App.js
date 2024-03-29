import React, { useEffect, useState } from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import UserProvider from "../providers/UserProvider";
import { signInWithGoogle, signOut } from "../services/firebase";
import GlobalStyles from "../styles/GlobalStyles";
import Homepage from "./Homepage/Homepage";
import Navbar from "./NavBar/Navbar";
import CreatePost from "./Post/CreatePost";
import Post from "./Post/Post";
import SignUp from "./User/SignUp";
import User from "./User/User";

const SiteContainer = styled.div`
  width: 960px;
  border-radius: 10px;
  background: rgb(41, 56, 186);
  background: linear-gradient(
    0deg,
    rgba(41, 56, 186, 1) 95%,
    rgba(5, 117, 187, 1) 100%
  );
  margin: 0 auto;
  padding: 0 12px;
  padding-bottom: 12px;
`;

const LogoHeader = styled(Link)`
  font-family: "Barlow Condensed";
  color: #fafafa;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  font-size: 60px;
  -webkit-text-stroke: 0.5px rgba(50, 50, 50, 1);
  text-shadow: 3px 6px 0 rgba(50, 50, 50, 1), 2px 4px 0 rgba(50, 50, 50, 1),
    1px 2px 0 rgba(50, 50, 50, 1), 0 1px 0 rgba(50, 50, 50, 1);
  &:hover {
    text-shadow: 0 0 4px rgba(244, 244, 244, 0.6), 3px 6px 0 rgba(50, 50, 50, 1),
      2px 4px 0 rgba(50, 50, 50, 1), 1px 2px 0 rgba(50, 50, 50, 1),
      0 1px 0 rgba(50, 50, 50, 1);
  }
`;

const Subheader = styled(Link)`
  color: #222;
  display: inline-block;
  font-family: "Source Code Pro";
  font-size: 12px;
  margin-top: -5px;
  margin-left: 45px;
  text-decoration: none;
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [posts, setPosts] = useState([]);
  return (
    <SiteContainer>
      <GlobalStyles />
      <HashRouter>
        <FlexDiv>
          <LogoHeader to="/">TARINGA!</LogoHeader>
          <Subheader to="/">INTELIGENCIA COLECTIVA</Subheader>
        </FlexDiv>
        <UserProvider>
          <Navbar signInWithGoogle={signInWithGoogle} signOut={signOut} />
          <Switch>
            <Route path="/" exact={true}>
              <Homepage posts={posts} setPosts={setPosts} />
            </Route>
            <Route path="/crear-post" exact={true}>
              <CreatePost />
            </Route>
            <Route path="/posts/:id">
              <Post />
            </Route>
            <Route path="/users/:id">
              <User posts={posts} />
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
          </Switch>
        </UserProvider>
      </HashRouter>
    </SiteContainer>
  );
};

export default App;
