import styled, { createGlobalStyle, css } from "styled-components";
import BookImg from "../../assets/image/dictionarybook.svg";

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

export const SearchBarContainer = styled.div`
  margin-top: 70px;
  margin-left: 24px;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecommendWords = styled.div`
  width: 856px;
  height: 166px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 40px;
  margin-left: 36px;
`;

export const PageText = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-left: 48px;
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0 35px;
  margin-bottom: 20px;
  margin-left: 12px;
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

export const HorizontalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 36px;
  margin-top: 20px;
`;

export const GoToDictionary = styled.div`
  width: 544px;
  height: 166px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-right: 12px;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const Book = styled.img.attrs({
  src: BookImg,
  alt: "bookImg",
})`
  width: 120px;
  margin-left: 52px;
`;

export const TextContainer = styled.div`
  margin-left: 40px;
`;

export const QuestionText = styled.div`
  color: #414141;
  font-size: 17px;
  font-weight: 600;
`;

export const GoToDictionaryText = styled.div`
  font-size: 26px;
  font-weight: 700;
  cursor: pointer;
`;
