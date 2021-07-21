import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import CategoriesBar from "./CategoriesBar";
import { NavDiv, NavButton } from "./NavbarStyle";

const Navbar = ({ signInWithGoogle, signOut }) => {
  const user = useContext(UserContext);
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
        {!user && (
          <NavButton to="#" className="sign-up" onClick={signOut}>
            Registrate!
          </NavButton>
        )}
        {!user && (
          <NavButton to="#" className="sign-in" onClick={signInWithGoogle}>
            <img src="https://web.archive.org/web/20110723170641im_/http:/o2.t26.net/images/iconIdentificate.png"></img>
            Identificarme
          </NavButton>
        )}
        {user && (
          <>
            <NavButton to="/crear-post" className="user-header first">
              <div className="crear-post"></div>
            </NavButton>
            <NavButton to={`/users/${user.uid}`} className="user-header">
              {user.displayName}
            </NavButton>
            <NavButton to="#" onClick={signOut} className="user-header last">
              <div className="logout"></div>
            </NavButton>
          </>
        )}
      </NavDiv>
      <CategoriesBar />
    </>
  );
};

export default Navbar;
