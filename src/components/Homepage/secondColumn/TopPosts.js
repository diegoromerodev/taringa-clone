import React from "react";
import styled from "styled-components";
import {
  SectionHeader,
  WidgetBody,
  WidgetItem,
  WidgetLink,
  WidgetOptions,
} from "../../../styles/StyleAccents";

const TopPosts = ({ posts }) => {
  return (
    <WidgetBody>
      <SectionHeader>
        <p>TOPs posts</p>
      </SectionHeader>
      <WidgetOptions>
        <WidgetLink to="#">Ayer</WidgetLink> -
        <WidgetLink to="#">Semana</WidgetLink> -
        <WidgetLink to="#">Mes</WidgetLink> -
        <WidgetLink to="#" className="selected-widget-link">
          Histórico
        </WidgetLink>
      </WidgetOptions>
      {posts
        .sort((a, b) => b.points - a.points)
        .map((post, index) => {
          if (index > 9) return null;
          return (
            <WidgetItem key={"toppo" + post.id} className="two-options">
              <p>
                <strong>{(index + 1).toString().padStart(2, "0")} </strong>
                {post?.title?.length > 40
                  ? post.title.slice(0, 38) + "..."
                  : post.title}
              </p>
              <span>{post.points}</span>
            </WidgetItem>
          );
        })}
    </WidgetBody>
  );
};

export default TopPosts;
