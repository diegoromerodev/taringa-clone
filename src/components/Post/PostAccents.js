import styled from "styled-components";

const StandardLabel = styled.label`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
`;

const StandardForm = styled.form`
  border-top: 5px solid #2281fe;
  background-color: #e9e9e9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-right: 30px;
  & > input,
  & > textarea {
    box-shadow: inset 0 1px 4px #dadada;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 3px 0;
  }
  #post-title {
    margin-right: 25%;
  }
`;

const SelectCategory = styled.select`
  height: 150px;
  & > option {
    padding-left: 25px;
    background: transparent
      url("https://web.archive.org/web/20110723170641im_/http:/o2.t26.net/images/big1v12.png?1.1")
      no-repeat scroll left top;
  }
  & > option[value=""] {
    padding-left: 5px;
    background: none;
  }
`;

const ContinueButton = styled.button`
  margin-top: 20px;
  padding: 5px;
  font-weight: bold;
  color: #333;
  background: linear-gradient(
    180deg,
    rgba(56, 219, 98, 1) 0%,
    rgba(59, 170, 51, 1) 100%
  );
  border: 1px solid #333;
  align-self: flex-start;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      180deg,
      rgba(250, 219, 98, 0.6) 0%,
      rgba(59, 170, 51, 0.6) 100%
    );
  }
`;

export { StandardLabel, StandardForm, SelectCategory, ContinueButton };
