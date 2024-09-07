import styled, { createGlobalStyle, css } from "styled-components";
import newstutorial1 from "../../../assets/image/Newstutorial1.png";
import newstutorial2 from "../../../assets/image/Newstutorial2.png";
import newstutorial3 from "../../../assets/image/Newstutorial3.png";

export const ContainerElement = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 280px;
  padding: 22px 21px;
  overflow: hidden;
  height: 160px;
  box-sizing: border-box;
  grid-row-end: span 14;
`;

export const ImgContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 12.5px;
`;


export const NewsTutorialStyle = css`
  width: 85px;
  height: 85px;
  border-radius:5px;
  box-shadow: 10px 10px 15px 10px rgba(0, 0, 0, 0.03);
`;

export const Newstutorial1 = styled.img.attrs({
    src: newstutorial1,
    alt: "newstutorial1",
  })`
    ${NewsTutorialStyle}
`;

export const Newstutorial2 = styled.img.attrs({
    src: newstutorial2,
    alt: "newstutorial2",
  })`
    ${NewsTutorialStyle}
`;

export const Newstutorial3 = styled.img.attrs({
    src: newstutorial3, 
    alt: "newstutorial3",
  })`
    ${NewsTutorialStyle}
`;
