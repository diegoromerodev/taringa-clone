import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import parse from "html-react-parser";
import Moment from "react-moment";

import PostAuthor from "./PostAuthor";
import Comments from "./Comments";
import GivePoints from "./GivePoints";
import {
  BoxContainer,
  MorePostInfo,
  PostBody,
  PostBottomLine,
  PostContainer,
  PostInfo,
  PostTitle,
  Tag,
  TagsDiv,
  TagTitle,
} from "./PostBodyStyles";

const Post = () => {
  const [postData, setPostData] = useState({});
  const [points, setPoints] = useState(0);
  const [comments, setComments] = useState([]);
  const match = useRouteMatch();
  document.title = (postData?.title ?? "Cargando") + " - Taringa!";
  useEffect(() => {
    firebase
      .firestore()
      .collection("posts")
      .doc(match.params.id)
      .get()
      .then((doc) => {
        const testData = doc.data();
        setPostData(testData);
        setComments(testData.comments);
      });
  }, []);
  const setCommentPoints = (index) => {
    postData.comments[index].points += 1;
    setComments([...postData.comments]);
    firebase.firestore().collection("posts").doc(match.params.id).set(postData);
  };
  const creationDate = new Date(1970, 0, 1);
  creationDate.setSeconds(postData?.date?.seconds ?? 0);
  return (
    <BoxContainer>
      <PostAuthor authorId={postData?.authorId}></PostAuthor>
      <PostContainer>
        <PostTitle>{postData?.title}</PostTitle>
        <PostBody>
          {parse(postData?.content ?? "")}
          <GivePoints
            authorId={postData?.authorId}
            postId={postData?.id}
            setPoints={setPoints}
          ></GivePoints>
          <PostBottomLine></PostBottomLine>
          <PostInfo>
            <TagsDiv>
              <TagTitle>Tags:</TagTitle>
              <div>
                {postData?.tags?.map((tag, index) => {
                  if (index >= 15) return null;
                  return (
                    <Tag key={tag + postData?.id + index} href="#">
                      {tag}
                    </Tag>
                  );
                })}
              </div>
            </TagsDiv>
            <MorePostInfo>
              <p>
                <span style={{ fontWeight: "bold" }}>Puntos: </span>
                {points}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Categoría: </span>
                {postData?.category?.toUpperCase()}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Creado: </span>
                <Moment date={creationDate} format="DD.MM.YYYY"></Moment> a las{" "}
                <Moment date={creationDate} format="HH:mm"></Moment> hs.
              </p>
            </MorePostInfo>
          </PostInfo>
        </PostBody>
        <Comments
          comments={comments}
          setPostData={setPostData}
          setCommentPoints={setCommentPoints}
        ></Comments>
      </PostContainer>
    </BoxContainer>
  );
};

export default Post;
