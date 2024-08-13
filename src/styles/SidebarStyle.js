import styled, { css } from "styled-components";
import homeIconSrc from "../assets/image/home.svg";
import dictionaryIconSrc from "../assets/image/dictionary.svg";
import newsIconSrc from "../assets/image/news.svg";
import quizIconSrc from "../assets/image/quiz.svg";
import profileIconSrc from "../assets/image/my.svg";

const iconStyle = `
  margin-right: 19px;
  margin-bottom: -1px;
  color: #7E84A3;
`;

export const Sidebar = styled.div`
  width: 300px;
  height: auto;
  background-color: #fafbff;
  border-right: 1px solid #d7dbec;
  display: flex;
  flex-direction: column;
  padding-top: 75px;
  z-index: 300;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 70px;
  margin-left: 30px;
  font-size: 20px;
  font-weight: 600;
  color: #7e84a3;
  :hover {
    cursor: pointer;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  background-color: ${(props) => (props.isActive ? "#363CD5" : "transparent")};
  width: 170px;
  height: 45px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? "#fff" : "#7E84A3")};
  padding: 10px;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#363CD5" : "#eee")};
  }
`;

export const HomeImg = styled.img.attrs({
  src: homeIconSrc,
  alt: "HomeIcon",
})`
  ${iconStyle}
  margin-left: 1px;
  
`;

export const HomeMenu = styled.div`
  text-decoration: none;
  color: inherit;
`;

export const DictionaryContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  background-color: ${(props) => (props.isActive ? "#363CD5" : "transparent")};
  width: 170px;
  height: 45px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? "#fff" : "#7E84A3")};
  padding: 10px;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#363CD5" : "#eee")};
  }
`;

export const DictionaryImg = styled.img.attrs({
  src: dictionaryIconSrc,
  alt: "dictionaryIcon",
})`
  ${iconStyle}
  margin-left: -1px;
`;

export const NewsContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  background-color: ${(props) => (props.isActive ? "#363CD5" : "transparent")};
  width: 170px;
  height: 45px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? "#fff" : "#7E84A3")};
  padding: 10px;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#363CD5" : "#eee")};
  }
  ${(props) =>
    props.selected &&
    css`
      filter: brightness(0) saturate(100%) invert(14%) sepia(63%)
        saturate(6142%) hue-rotate(243deg) brightness(92%) contrast(93%);
    `}
`;

export const NewsImg = styled.img.attrs({
  src: newsIconSrc,
  alt: "newsIcon",
})`
  ${iconStyle}
`;

export const QuizContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  background-color: ${(props) => (props.isActive ? "#363CD5" : "transparent")};
  width: 170px;
  height: 45px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? "#fff" : "#7E84A3")};
  padding: 10px;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#363CD5" : "#eee")};
  }
`;

export const QuizImg = styled.img.attrs({
  src: quizIconSrc,
  alt: "quizIcon",
})`
  ${iconStyle}
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin-bottom: 230px;
  background-color: ${(props) => (props.isActive ? "#363CD5" : "transparent")};
  width: 170px;
  height: 45px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? "#fff" : "#7E84A3")};
  padding: 10px;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#363CD5" : "#eee")};
  }
`;

export const ProfileImg = styled.img.attrs({
  src: profileIconSrc,
  alt: "profileIcon",
})`
  ${iconStyle}
`