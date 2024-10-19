import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import GrapeImgSrc from "../../../assets/image/firstGrape.svg";

export const EconomiStartStyle = css`
  width: 900px;
`;

export const GrapesStyle = css`
  width: 700px;
  margin-left: 200px;
  margin-bottom: 50px;
`;

export const PageContent = styled.div`
  display: flex;
  z-index: 1;
  background-color: #f5f6fa;
`;

export const MainContent = styled.div`
  background-color: #f5f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GrapesContainer = styled.div``;

export const PageText = styled.div`
  font-weight: 600;
  font-size: 30px;
  margin-top: 65px;
`;

export const TimeText = styled.div``;

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

export const ErrorMessage = styled.p``;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  padding-left: 80px;
`;

export const TextContainer = styled.div`
  margin-left: 8px;
`;

export const GrapeTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
`;

export const Details = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  color: #575757;
`;

export const Progress = styled.div`
  margin-left: 12px;
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

export const GrapeExplanation = styled.div`
  font-size: 18px;
`;

export const LoadingMessage = styled.p``;

export const GrapeImg = styled.img.attrs({
  src: GrapeImgSrc,
  alt: "GrapeImg",
})`
  width: 108px;
  position: relative;
  z-index: 1;
  margin-left: 32px;
`;

export const GrapeContainer = styled.div`
  width: 820px;
  height: 255px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 148px;
`;
