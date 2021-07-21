import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../../providers/UserProvider";
import { ContentContainer } from "../../styles/StyleAccents";
import PostEditor from "./PostEditor";
import { StandardForm, StandardLabel, ContinueButton } from "./PostAccents";
import CategorySelector from "./CategorySelector";

const CreatePost = () => {
  const user = useContext(UserContext);
  const [visitPost, setVisitPost] = useState("");
  const [content, setContent] = useState({
    title: "",
    content: "",
    tags: [],
    category: "",
    points: 0,
    comments: [],
    date: new Date(),
  });

  useEffect(() => setVisitPost(""), []);

  function changeContent(e) {
    setContent((prevState) => {
      const newState = Object.assign({}, prevState);
      let { id, value } = e.target;
      const type = id.split("-")[1];
      if (type === "tags") value = value.split(",");
      newState.authorId = user.uid;
      newState[type] = value;
      return newState;
    });
  }

  function handleSubmit(e) {
    console.log(content);
    e.preventDefault();
    if (content.title.length < 10) {
      alert("El título tiene que ser mayor a 10 carácteres.");
      return;
    }
    if (content.content.length < 50) {
      alert("El cuerpo tiene que ser mayor a 50 carácteres.");
      return;
    }
    if (content.tags.length < 5) {
      alert("Agrega al menos 5 tags.");
      return;
    }
    if (!content.category) {
      alert("Selecciona una categoría");
      return;
    }
    firebase
      .firestore()
      .collection("posts")
      .add(content)
      .then((docRef) => {
        docRef.update({ id: docRef.id });
        setVisitPost(docRef.id);
      });
  }

  if (user?.email && (!user.description || !user.photo)) {
    return <Redirect to="/signup"></Redirect>;
  }

  if (!user) {
    return <Redirect to="/"></Redirect>;
  }

  if (visitPost) {
    return <Redirect to={"/posts/" + visitPost}></Redirect>;
  }
  return (
    <ContentContainer>
      <StandardForm onChange={changeContent} onSubmit={(e) => handleSubmit(e)}>
        <StandardLabel htmlFor="post-title">Título</StandardLabel>
        <input type="text" id="post-title"></input>
        <StandardLabel htmlFor="post-body">Contenido del Post</StandardLabel>
        <PostEditor setContent={setContent}></PostEditor>
        <StandardLabel htmlFor="post-tags">
          Tags (separadas por comas)
        </StandardLabel>
        <input type="text" id="post-tags"></input>
        <StandardLabel htmlFor="post-category">Categoría</StandardLabel>
        <CategorySelector multi={false}></CategorySelector>
        <ContinueButton>Continuar »</ContinueButton>
      </StandardForm>
      <img src="https://media.taringa.net/knn/identity/aHR0cHM6Ly9rMDQua24zLm5ldC81NzM4MUFEM0UucG5n"></img>
    </ContentContainer>
  );
};

export default CreatePost;
