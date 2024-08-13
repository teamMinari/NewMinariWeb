import styled, { css } from "styled-components";
import heartIconSrc from "../assets/image/heart.svg";

export const WordsContainer = styled.div`
  width: 800px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 65px;
  margin-left: 120px;
  position: relative;
  margin-bottom: -40px;
`;

export const TermTxt = styled.div`
  font-size: 17px;
  font-weight: normal;
  color: inherit;
  padding: 10px;
  margin-left: 10px;
  margin-top: 10px;
  text-decoration: underline;
`;

export const TermExplanation = styled.div`
  font-size: 15px;
  font-weight: normal;
  color: #4f4f4f;
  padding: 5px;
  margin-left: 15px;
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
  right: 25px;
  cursor: pointer;
  margin-top: 5px;
  ${(props) =>
    props.selected &&
    css`
      filter: brightness(0) saturate(100%) invert(14%) sepia(63%)
        saturate(6142%) hue-rotate(243deg) brightness(92%) contrast(93%);
    `}
`;
