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
  z-index: 1001;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchBarContainer = styled.div`
  margin-top: 32px;
`;

export const DictionaryContainer = styled.div`
  width: 934px;
  min-height: 70%;
  height: auto;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 100px;
  padding-bottom: 80px;
`;

export const TermText = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-left: 90px;
  margin-top: 80px;
`;

export const TermExplanation = styled.div`
  font-weight: normal;
  font-size: 17px;
  padding-left: 90px;
  padding-right: 90px;
  margin-top: 36px;
  align-items: center;
  line-height: 1.9;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding-left: 90px;
  padding-right: 90px;
`;

export const SimilarWord = styled.div`
  color: #7e84a3;
  font-weight: normal;
  font-size: 16px;
`;

export const EasyMeaningBtn = styled.button`
  width: 120px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: #ff9900;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

export const RelatedNews = styled.div`
  color: #7e84a3;
  font-weight: normal;
  font-size: 18px;
  padding-left: 90px;
  margin-top: 65px;
`;

export const News = styled.div`
  width: 730px;
  height: 230px;
  border: 1px solid #d7dbec;
  border-radius: 10px;
  margin: 35px auto 0;
  overflow: hidden;
`;

export const TermDifficulty = styled.div`
  font-size: 14px;
  color: #555;
  margin-top: 10px;
  font-weight: bold;
`;
