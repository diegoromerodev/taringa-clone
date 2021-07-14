import React from "react";
import styled from "styled-components";
import {
  SectionHeader,
  WidgetBody,
  WidgetItem,
  WidgetLink,
  WidgetOptions,
} from "../../../styles/StyleAccents";

const FeaturedPosts = () => {
  return (
    <WidgetBody>
      <SectionHeader>
        <p>Posts destacados - Global</p>
      </SectionHeader>
      <WidgetOptions>
        <WidgetLink>15m</WidgetLink>-<WidgetLink>1h</WidgetLink>-
        <WidgetLink>3h</WidgetLink>-<WidgetLink>6h</WidgetLink>
      </WidgetOptions>
      <WidgetItem>
        <span style={{ fontWeight: 600 }}>01. </span>Fui a Tecnópolis y te lo
        comparto
      </WidgetItem>
      <WidgetItem>
        <span style={{ fontWeight: 600 }}>02. </span>Fui a Tecnópolis y te lo
        comparto
      </WidgetItem>
      <WidgetItem>
        <span style={{ fontWeight: 600 }}>03. </span>Fui a Tecnópolis y te lo
        comparto
      </WidgetItem>
      <WidgetItem>
        <span style={{ fontWeight: 600 }}>04. </span>Fui a Tecnópolis y te lo
        comparto
      </WidgetItem>
      <WidgetItem>
        <span style={{ fontWeight: 600 }}>05. </span>Fui a Tecnópolis y te lo
        comparto
      </WidgetItem>
      <WidgetItem>
        <span style={{ fontWeight: 600 }}>06. </span>Fui a Tecnópolis y te lo
        comparto
      </WidgetItem>
      <WidgetItem>
        <span style={{ fontWeight: 600 }}>07. </span>Fui a Tecnópolis y te lo
        comparto
      </WidgetItem>
      <WidgetItem>
        <span style={{ fontWeight: 600 }}>08. </span>Fui a Tecnópolis y te lo
        comparto
      </WidgetItem>
      <WidgetItem>
        <span style={{ fontWeight: 600 }}>09. </span>Fui a Tecnópolis y te lo
        comparto
      </WidgetItem>
      <WidgetItem>
        <span style={{ fontWeight: 600 }}>10. </span>Fui a Tecnópolis y te lo
        comparto
      </WidgetItem>
    </WidgetBody>
  );
};

export default FeaturedPosts;
