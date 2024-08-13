import styled, { css } from "styled-components";
import heartIconSrc from "../assets/image/heart.svg";

export const Container = styled.div`
  width: 830px;
  height: 200px;
  border-top: 1px solid #d7dbec;
  border-bottom: 1px solid #d7dbec;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: -11px;
  position: relative;
`;

export const TermTxt = styled.div`
  font-size: 20px;
  font-weight: normal;
  color: inherit;
  padding: 10px;
  margin-top: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

export const TermExplanation = styled.div`
  font-size: 18px;
  font-weight: normal;
  color: #4f4f4f;
  padding: 10px;
`;

export const ReferTxt = styled.div`
  font-size: 18px;
  font-weight: normal;
  color: #363cd5;
  padding: 10px;
  position: absolute;
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
})``;

export const HeartContainer = styled.div`
  position: absolute;
  right: 0;
  margin-right: 20px;
  cursor: pointer;
  margin-top: 5px;
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
