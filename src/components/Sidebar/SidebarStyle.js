import styled, { css } from "styled-components";
import homeIconSrc from "../../assets/image/home.svg";
import dictionaryIconSrc from "../../assets/image/dictionary.svg";
import newsIconSrc from "../../assets/image/news.svg";
import quizIconSrc from "../../assets/image/quiz.svg";
import tutorialIconSrc from "../../assets/image/tutorial.svg";
import profileIconSrc from "../../assets/image/my.svg";

const iconStyle = `
  margin-right: 19px;
  margin-bottom: 2px;
  color: #7E84A3;
`;

export const Sidebar = styled.div`
  width: 288px;
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
  padding-left: 70px;
  font-size: 17px;
  font-weight: 500;
  color: #7e84a3;
  margin-bottom: 160px;
  :hover {
    cursor: pointer;
  }
`;

const activeContainerStyle = css`
  background-color: #363cd5;
  color: #fff;

  img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
      hue-rotate(0deg) brightness(100%) contrast(100%);
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  margin-bottom: 22px;
  background-color: ${(props) => (props.isActive ? "#363CD5" : "transparent")};
  width: 196px;
  height: 40px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? "#fff" : "#7E84A3")};
  padding: 10px;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#363CD5" : "#eee")};
  }
  ${(props) => props.isActive && activeContainerStyle}
`;

export const HomeImg = styled.img.attrs({
  src: homeIconSrc,
  alt: "HomeIcon",
})`
  ${iconStyle}
  margin-left: 1px;
  margin-bottom: -1px;
`;

export const HomeMenu = styled.div`
  text-decoration: none;
  color: inherit;
`;

export const DictionaryContainer = styled.div`
  display: flex;
  margin-bottom: 22px;
  background-color: ${(props) => (props.isActive ? "#363CD5" : "transparent")};
  width: 196px;
  height: 40px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? "#fff" : "#7E84A3")};
  padding: 10px;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#363CD5" : "#eee")};
  }
  ${(props) => props.isActive && activeContainerStyle}
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
  margin-bottom: 22px;
  background-color: ${(props) => (props.isActive ? "#363CD5" : "transparent")};
  width: 196px;
  height: 40px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? "#fff" : "#7E84A3")};
  padding: 10px;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#363CD5" : "#eee")};
  }
  ${(props) => props.isActive && activeContainerStyle}
`;

export const NewsImg = styled.img.attrs({
  src: newsIconSrc,
  alt: "newsIcon",
})`
  ${iconStyle}
`;

export const QuizContainer = styled.div`
  display: flex;
  margin-bottom: 22px;
  background-color: ${(props) => (props.isActive ? "#363CD5" : "transparent")};
  width: 196px;
  height: 40px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? "#fff" : "#7E84A3")};
  padding: 10px;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#363CD5" : "#eee")};
  }
  ${(props) => props.isActive && activeContainerStyle}
`;

export const QuizImg = styled.img.attrs({
  src: quizIconSrc,
  alt: "quizIcon",
})`
  ${iconStyle}
`;

export const TutorialContainer = styled.div`
  display: flex;
  margin-bottom: 22px;
  background-color: ${(props) => (props.isActive ? "#363CD5" : "transparent")};
  width: 196px;
  height: 40px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? "#fff" : "#7E84A3")};
  padding: 10px;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#363CD5" : "#eee")};
  }
  ${(props) => props.isActive && activeContainerStyle}
`;

export const TutorialImg = styled.img.attrs({
  src: tutorialIconSrc,
  alt: "tutorialIcon",
})`
  ${iconStyle}
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin-bottom: 230px;
  background-color: ${(props) => (props.isActive ? "#363CD5" : "transparent")};
  width: 196px;
  height: 40px;
  border-radius: 5px;
  color: ${(props) => (props.isActive ? "#fff" : "#7E84A3")};
  padding: 10px;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#363CD5" : "#eee")};
  }
  ${(props) => props.isActive && activeContainerStyle}
`;

export const ProfileImg = styled.img.attrs({
  src: profileIconSrc,
  alt: "profileIcon",
})`
  ${iconStyle}
`;
