import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import EconomiStart from "../../../assets/image/EconomiStart.png";
import Grapes from "../../../assets/image/Grapes.png";
export const EconomiStartStyle = css`
  width: 900px;
`;
export const GrapesStyle = css`
  width: 700px;
  margin-left: 200px;
  margin-bottom: 50px;
`;


export const EconomiStartImg = styled.img.attrs({
  src: EconomiStart,
  alt: "EconomiStart",
})`
  ${EconomiStartStyle}
`;

export const GrapesImg = styled.img.attrs({
  src: Grapes,
  alt: "Grapes",
})`
  ${GrapesStyle}
`;


export const PageContent = styled.div`
  display: flex;
  z-index: 1;
  background-color: #F5F6FA;
`;

export const MainContent = styled.div`
  background-color: #F5F6FA;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GrapesContainer = styled.div`
  width: 900px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 0 0 10px 10px;
  margin-bottom: 100px;
`;

export const ContentContainer = styled.div`
  padding: 30px 50px;
`;


export const PageText = styled.div`
  font-weight: 600;
  font-size: 30px;
  margin-top: 65px;
`;

export const TimeText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #575757;
  margin-top: 8px;
`;

export const ContentText = styled.div`
  font-weight: normal;
  font-size: 18px;
  margin-top: 20px;
`;

export const StyledLink = styled.a`
  color: blue;
  font-size: 15px;
  text-decoration: underline;
  &:hover {
    color: darkblue;
  }
`;

export const NextBtn = styled.button`
  width: 100px;
  height: 45px;
  background-color: #1f6ad9;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  margin-top: 10px;
  margin-left: 220px;
  cursor: pointer;
`;
