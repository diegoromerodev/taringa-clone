import React from "react";
import styled from "styled-components";
import {
  SectionHeader,
  WidgetBody,
  WidgetItem,
  WidgetLink,
  WidgetOptions,
} from "../../../styles/StyleAccents";

const FeaturedPosts = ({ posts }) => {
  return (
    <WidgetBody>
      <SectionHeader>
        <p>Posts destacados - Global</p>
      </SectionHeader>
      <WidgetOptions>
        <WidgetLink to="/">15m</WidgetLink>-<WidgetLink to="/">1h</WidgetLink>-
        <WidgetLink to="/">3h</WidgetLink>-
        <WidgetLink className="selected-widget-link" to="/">
          6h
        </WidgetLink>
      </WidgetOptions>
      {posts
        .filter((a) => a.points > 150)
        .map((post, index) => {
          if (index > 9) return null;
          return (
            <WidgetItem key={"fpost" + post.id} className="two-options">
              <p>
                <strong>{(index + 1).toString().padStart(2, "0")} </strong>
                {post?.title.length > 40
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

export default FeaturedPosts;
