import styled, { createGlobalStyle, css } from "styled-components";
import { Link } from "react-router-dom";
import Oimg from "../../assets/image/O.png";
import Ximg from "../../assets/image/X.png";
import OColorimg from "../../assets/image/Ocolor.png";
import XColorimg from "../../assets/image/Xcolor.png";
import Wowimg from "../../assets/image/Wow.png";
import QnAimg from "../../assets/image/QnAImg.png";
import Titleimg from "../../assets/image/TitleImg.png";
import Quizimg from "../../assets/image/Quizmain.png";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #F5F6FA;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
  }
  
`;

export const TopMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Middle = styled.div`
  display: flex;
  margin-top: 2vw;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TestContainer = styled.div`
  display: flex;
  margin-top: 7.5vw;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TopBanner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const MiniTxt = styled.div`
  font-size: 16px;
  color: #6b6b6b;
`;

export const LargeTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

export const SimButton = styled(Link)`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 25px;
  width: 150px;
  font-weight: 700;
  height: 50px;
  text-decoration-line: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    background-color: #222;
  }
`;
export const WowStyle = css`
  object-fit: contain;
  width: 200px; /* 아이콘 너비 */
  height: 200px; /* 아이콘 높이 */
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

export const btnStyle = css`
  object-fit: contain;
  width: 180px; /* 아이콘 너비 */
  height: 230px; /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;

export const StyledOImg = styled.img.attrs({
  src: Oimg,
  alt: "oimg",
})`
  ${btnStyle}
`;

export const StyledXImg = styled.img.attrs({
  src: Ximg,
  alt: "ximg",
})`
  ${btnStyle}
`;

export const ColorStyle = css`
  object-fit: contain;
  width: 180px; /* 아이콘 너비 */
  height: 230px; /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  opacity: 0;
  &:hover {
    transition: 500ms;
    opacity: 1;
  }
`;

export const QuizMainStyle = css`
  object-fit: contain;
  width: 1200px; /* 아이콘 너비 */
  max-width: 100%;
  max-height: 100%;
  margin-top: -30px;
`;

export const QuizMain= styled.img.attrs({
  src: Quizimg,
  alt: "oimg",
})`
  ${QuizMainStyle}
`;


export const StyledOColor = styled.img.attrs({
  src: OColorimg,
  alt: "oimg",
})`
  ${ColorStyle}
`;

export const StyledXColor = styled.img.attrs({
  src: XColorimg,
  alt: "ximg",
})`
  ${ColorStyle}
`;

export const MiddleMenu = css`
  object-fit: contain;
  width: auto; /* 아이콘 너비 */
  height: 25px; /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;


export const TitleImg = styled.img.attrs({
  src: Titleimg,
  alt: "ximg",
})`
  ${MiddleMenu}
`;

export const QnAImg = styled.img.attrs({
  src: QnAimg,
  alt: "QnAImg",
})`
  ${MiddleMenu}
`;

export const OButton = styled.div`
  position: absolute;
  right: 52%;
`;

export const XButton = styled.div`
  position: absolute;
  left: 52%;
`;

export const OXButton = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  top: 5%;
`;

export const Question = styled.h2`
  margin: 0px 15%;
  margin-top: -30px;
  text-align: center;
`;

export const Zindex = styled.div`
  z-index: 1;
`;

export const Button = styled(Link)`
  background-color: #eceffc;
  color: #000;
  border: none;
  padding: 10px 50px;
  top: 75%;
  cursor: pointer;
  position: absolute;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  z-index: 1000;
  transition: 300ms;
  &:hover {
    background-color: #dae2ff;
  }
`;

export const QuizButton = styled.button`
  background-color: white;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  z-index: 1000;
  transition: 300ms;
`;

export const ResultNum = styled.div`
  color: #363cd5;
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
  display: flex;
  flex-direction: row-reverse;
  width: 250px;
  margin-right: 7vw;
  margin-top: 1.5vw;
  padding-left: 30px;
`;

export const FitContainer = styled.div`
  position: relative;
  flex-direction: row;
  z-index: 300;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PointContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  border-radius: 20px;
  background: #91c1fa;
  margin-top: 50px;
`;

export const QuizNumContainer = styled.div`
  margin-top: 10%;
  padding: 15px 45px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #91c1fa;
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
  font-size: 24px;
  font-weight: 700;
`;

export const Description = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #414141;
  margin-top: 4px;
`;

export const QuizMainContainer = styled.div`
  border-radius: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  padding: 0 8vw;
`;

export const QuizContainer = styled.div`
  width: 934px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  margin-top: 79px;
  margin-left: 60px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const CenterdContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
