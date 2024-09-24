import styled, { css } from "styled-components";
import LocketImg from "../../../assets/image/grapesLocket.svg";

export const ContainerElement = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 280px;
  padding: 32px 35px;
  height: 170px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  grid-row-end: span 6;
  justify-content: center;
`;

export const GrapesLocketImgStyle = styled.div`
  width: 30px;
  height: 30px;
  border-radius:15px;
`;

export const VerticalContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const TitleVerticalContainer = styled.div`
    display: flex;
    flex-direction: column; 
    width: 60%; 
`;


export const BunchOfGrapesBlueTitle = styled.div`
    font-size: 13px;
    font-weight: 600;
    color: #363CD5;
`;

export const BunchOfGrapesTitle = styled.div`
    font-size: 13px;
    font-weight: 600;
`;


export const GrapesLocketImg = styled.img.attrs({
    src: LocketImg,
    alt: "LocketImg",
  })`
    width: 70px;
  `;

export const LearnBtn = styled.div`
  width: 55px;
  height: 28px;
  border-radius: 7px;
  border: none;
  background-color: #148ce5;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-weight: 600;
  bottom: 24px;
  right: 28px;
`;
