import styled, { createGlobalStyle, css } from "styled-components";
import Newsbanner from "../../assets/image/Newsbanner.png";

export const NewsbannerStyle = css`
  width: 145px;
  height: 160px;
`;

export const NewsBanner = styled.img.attrs({
    src: Newsbanner,
    alt: "News1",
  })`
    ${NewsbannerStyle}
  `;
  

export const ContainerElement = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 280px;
  padding: 27px 21px;
  overflow: hidden;
  height: 270px;
  display: flex;
  flex-direction: column;
  grid-row-end: span 10;
`;

export const ImgContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;


export const MeanContainer = styled.div`
    padding: 0 30px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  align-items: center;
`;

export const Tab = styled.div`
  padding: 0px 0px;
  border-radius: 8px;
  font-size: 11px;
  cursor: pointer;
  z-index: 100;
  margin: 0 20px;
  font-weight: 600;
`;

export const UnderLine = styled.div`
  width: 330px;
  background-color: #ddd; /* 선의 색상을 설정합니다 */
`;

export const HorizontalLine = styled.div`
  width: 1px;
  height: 15px;
  background-color: #ddd; /* 선의 색상을 설정합니다 */
  margin: 0 -25px;
`;