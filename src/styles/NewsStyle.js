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

export const BtnContainer = styled.div`
  padding: 35px;
  padding-left: 0%;
  padding-bottom:0;
`;


export const Article = styled.div`
  margin: 30px 0;
`;

export const ArticleTitle = styled.a`
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    
`;

export const ArticleDescription = styled.p`
    font-size: 1em;
    color: #666;
    margin-top: 5px;

    padding: 0;
`;

export const ArticleImage = styled.img`
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
`;



export const TagBtn = styled.button`
  width: 95px;
  height: 35px;
  border-radius: 50px;
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
      background-color: #363CD5;
      color: #ffffff;
    `}
`;

export const NewsContainer = styled.div`
  width: 950px;
  height: auto;
  background-color: #ffffff;
  border-radius: 10px;
  align-items: center;
  padding: 5px 50px;

`;

export const CenterdContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchContainer = styled.div`
  margin: 40px 0;
  margin-bottom: 55px;
`;