import styled, { createGlobalStyle, css } from "styled-components";
import { Link } from 'react-router-dom';
import Oimg from "../assets/image/O.png";
import Ximg from "../assets/image/X.png";
import Wowimg from "../assets/image/Wow.png";
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

export const WowStyle = css`
  object-fit: contain;
  width: 200px;  /* 아이콘 너비 */
  height: 200px;  /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
  margin: 10% 0 2% 0;
`;

export const StyledWowImg = styled.img.attrs({
  src: Wowimg,
  alt: "wowimg",
})`
  ${WowStyle}
`;


export const OIconStyle = css`
  object-fit: contain;
  width: 60px;  /* 아이콘 너비 */
  height: 60px;  /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;

export const StyledOImg = styled.img.attrs({
  src: Oimg,
  alt: "oimg",
})`
  ${OIconStyle}
`;

export const XIconStyle = css`
  object-fit: contain;
  width: 60px;  /* 아이콘 너비 */
  height: 60px;  /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;

export const StyledXImg = styled.img.attrs({
  src: Ximg,
  alt: "ximg",
})`
  ${XIconStyle}
`;

export const OButton = styled.div`
  position: absolute;
  right: 50%;
`;

export const XButton = styled.div`
  position: absolute;
  left: 50%;
`;

export const OXButton = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;


export const Question = styled.h2`
  margin: 0px 15%;
  margin-top: -30px;
  text-align: center;
`;

export const Zindex = styled.div`
  z-index: 1;
`

export const Button = styled(Link)`
  background-color: #363CD5;
  color: white;
  border: none;
  padding: 10px 50px;
  top: 75%;
  cursor: pointer;
  position: absolute;
  border-radius: 10px;
  font-size: 16px;
  z-index: 1000;
  transition: 300ms;
  &:hover {
    background-color: #1A1D63;

  }
  
`;

export const QuizButton = styled.button`
  background: #EAEAEA;
  color: white;
  border: none;
  padding: 20px 45px;
  margin: 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  z-index: 1000;
  transition: 300ms;
  &:hover {
    background-color: #7176FF;
  }
  
`;

export const ResultNum = styled.div`
  color: #363CD5;
`;

export const Result = styled.div`
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  text-align: center;
`;


export const PageContent = styled.div`
  display: flex;
  z-index: 2;

`;
export const SplineContainer = styled.div`
  height: 875px;
  width: 1500px;
  position: absolute;
  z-index: 3;
  canvas {
    z-index: 3;
  }
  margin-top: -150px;
`;

export const FitContainer = styled.div`
  position: relative;
  flex-direction: row;
  z-index: 300;
`;

export const PointContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  border-radius: 20px;
  transition: all 2s ease-out;
  background: linear-gradient(to bottom right, #363CD5, #A322F8);
  margin-top:50px;
`;

export const QuizNumContainer = styled.div`
  margin-top: 10%;
  padding: 15px 45px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6C92DF;
`;

export const QuizNum = styled.div`
  color: #fff;
  
`;

export const PointTitle = styled.div`
  color: #fff;
  font-size: 11px;
  font-weight: 600;
`;

export const PointNum = styled.div`
  color: #fff;
  font-size: 21px;
  font-weight: 500;
`;

export const Title = styled.div`
  margin-top: 40px;
  font-size: 30px;
  font-weight: 700;
`;

export const Description = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #363CD5;
`;


export const QuizContainer = styled.div`
  width: 850px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  margin-top: 50px;
  margin-left: 80px;
  flex-direction: column;
  align-items: center;
`;



export const CenterdContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
