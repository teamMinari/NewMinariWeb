// Styled Components
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
  margin-top: 40px;
`;

export const DictionaryContainer = styled.div`
  width: 934px;
  height: 1520px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 28px;
  margin-bottom: 80px;
`;

export const PageText = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-left: 40px;
  margin-top: 24px;
  margin-bottom: 12px;
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

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export const PaginationButton = styled.button`
  background-color: #84BCFF;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 4px;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background-color: #458EE4;
  }
`;

export const RecommendWords = styled.div`
  width: 934px; 
  height: 166px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 32px;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0 35px;
  margin-bottom: 20px;
  margin-left: 4px;
`;

export const WordsBtn = styled.button`
  padding: 0 20px;
  height: 35px;
  border-radius: 24px;
  background-color: ${(props) => props.bgColor || "#91C1FA"};
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
