import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import GrapeImgSrc from "../../../assets/image/firstGrape.svg";
import DetailGrapeImgSrc from "../../../assets/image/GrapeImg.png";

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
  justify-content: center;
  width: 100%;
  padding-top: 48px;
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

export const TimeText = styled.div`
  margin-right: 8px;
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
  width: 72px;
  height: 34px;
  background-color: #1f6ad9;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  margin-top: 24px;
  margin-left: 256px;
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
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: #575757;
  margin-left: 8px 0;
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
  margin-left: 62px;
`;

export const DetailGrapeImg = styled.img.attrs({
  src: DetailGrapeImgSrc,
  alt: "DetailGrapeImg",
})`
  width: 72px;
  position: relative;
  z-index: 1;
  margin-left: -120px;
  margin-right: 16px;
`;

export const GrapeContainer = styled.div`
  width: 820px;
  height: 540px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 148px;
  margin-bottom: 44px;
  margin-top: 36px;
`;

export const DetailGrapeTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #363cd5;
`;

export const DetailGrapeExplanation = styled.div`
  font-size: 18px;
`;

export const SequenceContainer = styled.div`
  width: 620px;
  height: 256px;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-top: 52px;
  margin-bottom: 40px;
`;

export const SequenceText = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 32px;
`;

export const SmallGrapeTitle = styled.h4`
  font-size: 16px;
  color: #333;
  margin-left: 32px;
  margin: 7px 0;
  font-weight: 600;
  padding-left: 32px;
`;

export const SmallDetails = styled.p`
  font-size: 12px;
  color: #666;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 44px;
  width: 50%;
`;

export const GrapeInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const EndOrNot = styled.div`
  margin-left: 12px;
  margin-right: 32px;
`;

export const GrapeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DetailBtnContainer = styled.div`
  margin-right: auto;
  margin-left: -80px;
`;
