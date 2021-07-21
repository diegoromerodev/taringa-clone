import styled from "styled-components";
import { ContentContainer } from "../../styles/StyleAccents";

const BoxContainer = styled(ContentContainer)`
  align-items: flex-start;
`;

const PostContainer = styled.div`
  width: 760px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
  overflow: hidden;
`;

const PostTitle = styled.h1`
  font-size: 16px;
  text-align: center;
  color: #333;
  background-color: #c7c7c7;
  padding: 5px;
`;

const PostBody = styled.div`
  padding: 10px;
  background-color: #d7d7d7;
  border-radius: 0 0 5px 5px;
`;

const PostBottomLine = styled.div`
  height: 2px;
  background-color: #bbb;
  border-bottom: 2px solid #e7e7e7;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TagsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 350px;
`;
const MorePostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Tag = styled.a`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  color: #1155fa;
  margin-right: 8px;
  font-size: 12px;
  font-weight: bold;
`;

const TagTitle = styled.h4`
  background: url("https://web.archive.org/web/20110517235600im_/http:/o2.t26.net/images/big2v1.png?1.0")
    no-repeat left;
  padding-left: 22px;
  background-position: left -1343px;
`;

export {
  BoxContainer,
  PostContainer,
  PostBody,
  PostBottomLine,
  PostTitle,
  PostInfo,
  TagsDiv,
  MorePostInfo,
  Tag,
  TagTitle,
};
