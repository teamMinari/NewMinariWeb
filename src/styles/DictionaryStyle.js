import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #F5F6FA;
  }
`;

export const PageContent = styled.div`
  display: flex;
  z-index: 1;
`;

export const MainContent = styled.div`
  margin-left: 70px;
  margin-top: 47px;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DictionaryContainer = styled.div`
  width: 900px;
  height: auto;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 47px;
`;

export const PageText = styled.div`
  font-weight: 600;
  font-size: 25px;
  margin-left: 35px;
  margin-top: 45px;
`;

export const BtnContainer = styled.div`
  space-between: 15px;
  padding: 35px;
`;

export const TagBtn = styled.button`
  width: 95px;
  height: 35px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #d7dbec;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #7e84a3;
  margin-right: 15px;
  ${(props) =>
    props.selected &&
    css`
      background-color: #ff9900;
      color: #ffffff;
    `}
`;

export const TextContainer = styled.div`
  margin-left: 40px;
  display: flex;
`;

export const TextSort = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-right: 10px;
  color: #7e84a3;
  cursor: pointer;
  ${(props) =>
    props.selected &&
    css`
      color: #000000;
    `}
`;
