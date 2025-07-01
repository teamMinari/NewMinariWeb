import styled, { createGlobalStyle, css } from "styled-components";
import Route from "../../assets/image/tutorialRoute.svg";

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

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3.5%;
`;
export const CenterdContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SplineContainer = styled.div`
  height: 340px;
  width: 900px;
  overflow: hidden;
  border-radius: 15px;
  margin-bottom: 30px;
`;

export const AbsoultButton = styled.div`
  height: 50px;
  width: 300px;
  overflow: hidden;
  border-radius: 50px;
  margin-top: -100px;
  position: absolute;
  border: 1px solid #fff;
  margin-left: 300px;
  margin-bottom: 30px;
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  :hover {
    cursor: progress;
    background-color: #000;
    opacity: 0.9;
  }
`;

export const FirstTutorial = styled.div`
  width: 580px;
  height: 270px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  padding-left: 40px;
`;

export const TutorialTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding-top: 24px;
`;

export const TutorialExplanation = styled.div`
  font-size: 12px;
  font-weight: 500;
  padding-top: 12px;
`;

export const TutorialRoute = styled.img.attrs({
  src: Route,
  alt: "Route",
})`
  margin: 0 auto;
  width: 60%;
  padding-top: 32px;
  cursor: pointer;
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Line = styled.div`
  /* border: 5px dashed #999999; */
`;

export const GrapesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const TutorialCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding-bottom: 24px;
  margin: 10px 0;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const ContentText = styled.div`
  font-weight: normal;
  font-size: 18px;
  margin-top: 20px;
`;

export const TimeText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #575757;
  margin-top: 8px;
`;


export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background-color: #9597b6;
  color: #fff;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 0px;
`;