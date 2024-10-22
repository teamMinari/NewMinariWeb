import styled, { css } from "styled-components";
import heartIconSrc from "../assets/image/heart.svg";

export const Container = styled.div`
  width: 830px;
  height: 104px;
  border-top: 0.6px solid #e7ebf9;
  border-bottom: 0.6px solid #e7ebf9;
  margin: 0 auto;
  margin-top: 9px;
  margin-bottom: -10px;
  position: relative;
`;

export const TermTxt = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #1b47b9;
  margin-left: 10px;
  margin-top: 14px;
  cursor: pointer;
`;

export const TermExplanation = styled.div`
  font-size: 15px;
  font-weight: normal;
  color: #4f4f4f;
  margin-left: 10px;
  margin-top: 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeartImg = styled.img.attrs({
  src: heartIconSrc,
  alt: "heartIcon",
})`
  width: 18px;
`;

export const HeartContainer = styled.div`
  position: absolute;
  right: 0;
  margin-right: 20px;
  cursor: pointer;
  margin-top: 14px;
  ${(props) =>
    props.selected &&
    css`
      filter: brightness(0) saturate(100%) invert(14%) sepia(63%)
        saturate(6142%) hue-rotate(243deg) brightness(92%) contrast(93%);
    `}
`;

export const DifficultyContainer = styled.div`
  font-size: 15px;
  font-weight: normal;
  color: #878787;
  margin-left: 10px;
  margin-top: 8px;
`;


// export const DifficultyLevel = styled.span`
//   background-color: ${({ difficulty }) => 
//     difficulty === "쉬움" ? "#66D1A2" : difficulty === "보통" ? "#FA9C92" : "#F6A6B8"};
//   color: white;
//   border-radius: 4px;
//   padding: 2px 4px;
//   font-size: 0.9rem;
// `;