import React, { useContext, useEffect, useState } from "react";
import { ContentContainer } from "../../styles/StyleAccents";
import styled from "styled-components";
import { ContinueButton } from "../Post/PostAccents";
import { UserContext } from "../../providers/UserProvider";
import { Redirect, useHistory } from "react-router";

const FormLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

const FormInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 30px 5px;
`;

const SignUp = ({ spy }) => {
  const user = useContext(UserContext);
  const [userData, setUserData] = useState(user);
  const history = useHistory();
  const SaveUserInfo = (e) => {
    e.preventDefault();
    const isPhoto = /^http/.test(userData?.photo);
    if (userData?.description && isPhoto) {
      firebase
        .firestore()
        .collection("users")
        .doc(userData.uid)
        .set(userData)
        .then(() => history.goBack());
      return;
    }
    if (!isPhoto) alert("Solo se aceptan links de imágenes.");
    alert("Por favor llena ambos campos.");
  };
  const handleChange = (e) => {
    setUserData((prevState) => {
      const newState = Object.assign({}, prevState, user);
      newState[e.target.id.split("-")[1]] = e.target.value;
      return newState;
    });
  };
  if (user?.description && user?.photo) {
    spy();
    return <Redirect to="/"></Redirect>;
  }
  return (
    <ContentContainer style={{ flexDirection: "column", alignItems: "center" }}>
      <h1>Añadir información</h1>
      <form style={{ flexGrow: 1 }} onSubmit={SaveUserInfo}>
        <FormInput>
          <FormLabel htmlFor="user-photo">Foto de perfil</FormLabel>
          <input
            onChange={(e) => handleChange(e)}
            style={{ border: "2px solid #c7c7c7", width: "300px" }}
            id="user-photo"
          ></input>
        </FormInput>
        <FormInput>
          <FormLabel htmlFor="user-description">Acerca de ti</FormLabel>
          <textarea
            onChange={(e) => handleChange(e)}
            style={{ border: "2px solid #c7c7c7", width: "300px" }}
            id="user-description"
          ></textarea>
        </FormInput>
        <FormInput style={{ justifyContent: "center" }}>
          <ContinueButton>Continuar »</ContinueButton>
        </FormInput>
      </form>
    </ContentContainer>
  );
};

export default SignUp;
