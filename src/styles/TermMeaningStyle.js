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
  height: 1600px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 47px;
  margin-bottom: 100px;
`;

export const TermText = styled.div`
  font-weight: 600;
  font-size: 25px;
  margin-left: 90px;
  margin-top: 80px;
`;

export const TermExplanation = styled.div`
  font-weight: normal;
  font-size: 18px;
  padding-left: 90px;
  padding-right: 90px;
  margin-top: 40px;
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
  font-size: 18px;
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
