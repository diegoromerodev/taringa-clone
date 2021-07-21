import { Link } from "react-router-dom";
import styled from "styled-components";

const ContentContainer = styled.div`
  background: #fafafa;
  padding: 10px;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const SectionHeader = styled.div`
  background: linear-gradient(
    180deg,
    rgba(203, 203, 203, 1) 0%,
    rgba(159, 159, 159, 1) 100%
  );
  font-weight: 600;
  color: #444;
  font-size: 13px;
  padding: 3px 10px;
  border-bottom: 1px solid #fafafa;
  margin-bottom: 4px;
`;

const WidgetBody = styled.ul`
  background: #d7d7d7;
  list-style-type: none;
  border-radius: 5px;
  overflow: hidden;
  list-style-position: outside;
  font-size: 12px;
  margin-left: 6px;
  padding-bottom: 6px;
  flex-grow: 1;
  margin-bottom: 6px;
  &.last-widget {
    margin-bottom: 0;
  }
`;

const WidgetItem = styled.li`
  margin: 0 8px;
  &.two-options {
    display: flex;
    justify-content: space-between;
  }
`;

const WidgetOptions = styled.div`
  margin-top: -4px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #bfbfbf;
  margin-bottom: 6px;
`;

const WidgetLink = styled(Link)`
  display: inline-block;
  color: #333;
  background: transparent;
  padding: 0;
  font-weight: 600;
  border-radius: 20px;
  margin: 5px;
  font-size: 11px;
  &.selected-widget-link {
    padding: 0 7px;
    color: #333;
    color: #fafafa;
    text-shadow: 0px 2px 0 rgba(5, 5, 5, 0.5);
    background: linear-gradient(0, #777, #555);
  }
`;

export {
  ContentContainer,
  SectionHeader,
  WidgetBody,
  WidgetItem,
  WidgetOptions,
  WidgetLink,
};
