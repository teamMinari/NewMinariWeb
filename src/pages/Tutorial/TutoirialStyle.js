import styled, { createGlobalStyle, css } from "styled-components";
import Example from "../../assets/image/Example.png";
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

export const ExampleStyle = css`
  width: 580px;
  border-radius:15px;
`;

export const PageContent = styled.div`
  display: flex;
  z-index: 1;
`;

export const MainContainer = styled.div`
  margin-left: 60px;
  margin-top: 47px;
  padding: 20px 40px;
  border-radius: 15px;
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
  margin-left:300px;
  margin-bottom: 30px;
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  :hover {
    cursor:progress;
    background-color: #000;
    opacity: 0.9;
  }
`;

export const FirstTutorial = styled.div`
  width: 580px;
  height: 270px;
  background-color: white;
  border-radius: 15px;
`;

export const ExampleTutorial = styled.img.attrs({
    src: Example,
    alt: "Example",
  })`
    ${ExampleStyle}
  `;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Line = styled.div`
  /* border: 5px dashed #999999; */
`;