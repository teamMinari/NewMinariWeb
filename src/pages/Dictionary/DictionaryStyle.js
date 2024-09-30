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

export const NoTermsFound = styled.div`
  font-size: 18px;
  color: #7e84a3;
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
margin-top: 32px;
`

export const DictionaryContainer = styled.div`
  width: 934px;
  height: 1480px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 32px;
  margin-bottom: 80px;
`;

export const PageText = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-left: 40px;
  margin-top: 32px;
`;

export const TextContainer = styled.div`
  margin-left: 40px;
  display: flex;
`;

export const TextSort = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin-right: 10px;
  margin-top: 12px;
  color: #7e84a3;
  cursor: pointer;
  ${(props) =>
    props.selected &&
    css`
      color: #000000;
    `}
`;
