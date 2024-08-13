import styled, { createGlobalStyle } from "styled-components";

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

export const WordContainer = styled.div`
  width: 800px;
  height: 420px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 65px;
  margin-left: 120px;
  margin-bottom: 500px;
`;

export const ContainerTxt = styled.div`
  font-weight: 600;
  font-size: 25px;
  margin-left: 35px;
  margin-top: 45px;
  margin-bottom: 30px;
`;

export const MoreWords = styled.div`
  width: 800px;
  height: 75px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;

export const MoreText = styled.div`
  font-size: 23px;
  font-weight: 500;
  color: #585858;
  padding-top: 23px;
  padding-bottom: 20px;
  margin-left: 30px;
  text-decoration: none;
`;
