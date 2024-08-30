import styled, { css } from "styled-components";
import heartIconSrc from "../assets/image/heart.svg";

export const Container = styled.div`
  width: 830px;
  height: 104px;
  border-top: 0.6px solid #E7EBF9;
  border-bottom: 0.6px solid #E7EBF9;
  margin: 0 auto;
  margin-top: 9px;
  margin-bottom: -10px;
  position: relative;
`;

export const TermTxt = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #1B47B9;
  margin-left: 10px;
  margin-top: 12px;
  cursor: pointer;
`;

export const TermExplanation = styled.div`
  font-size: 15px;
  font-weight: normal;
  color: #4F4F4F;
  margin-left: 10px;
  margin-top: 8px;
`;

export const ReferTxt = styled.div`
  font-size: 15px;
  font-weight: normal;
  color: #878787;
  margin-left: 10px;
  margin-top: 4px;
  bottom: 10px;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeartImg = styled.img.attrs({
  src: heartIconSrc,
  alt: "heartIcon",
})`
width: 18px;`;

export const HeartContainer = styled.div`
  position: absolute;
  right: 0;
  margin-right: 20px;
  cursor: pointer;
  margin-top: 12px;
  ${(props) =>
    props.selected &&
    css`
      filter: brightness(0) saturate(100%) invert(14%) sepia(63%)
        saturate(6142%) hue-rotate(243deg) brightness(92%) contrast(93%);
    `}
`;

export const ReferContainer = styled.div`
  display: flex;
  align-items: center;
  bottom: 10px;
`;
