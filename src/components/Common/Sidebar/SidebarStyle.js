import styled, { css } from "styled-components";
import homeIconSrc from "../../../assets/image/home.svg";
import dictionaryIconSrc from "../../../assets/image/dictionary.svg";
import newsIconSrc from "../../../assets/image/news.svg";
import quizIconSrc from "../../../assets/image/quiz.svg";
import tutorialIconSrc from "../../../assets/image/tutorial.svg";
import profileIconSrc from "../../../assets/image/my.svg";

export const Sidebar = styled.div`
  width: 288px;
  height: auto;
  background-color: #fafbff;
  border-right: 1px solid #d7dbec;
  display: flex;
  flex-direction: column;
  padding-top: 75px;
  z-index: 300;
  @media screen and (max-width: 1300px) {
    width: 120px;
  }
`;

export const Text = styled.div`
  font-size: 17px;

  @media screen and (max-width: 1300px) {
    opacity: 0;
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 40px;
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
  border-radius: 8px 0 0 8px;
  padding-left: 30px;
  width: 100%;
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 6% 50%, 0% 0%);
  transition: all 0.3s ease;
  position: relative;

  img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
      hue-rotate(0deg) brightness(100%) contrast(100%);
    transform: scale(1);
  }
`;

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  background-color: ${(props) => (props.isActive ? "#363CD5" : "transparent")};
  width: ${(props) => (props.isActive ? "100%" : "100%")};
  height: 50px;
  border-radius: ${(props) => (props.isActive ? "8px 0 0 8px;" : "0")};
  color: ${(props) => (props.isActive ? "#fff" : "#7E84A3")};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#363CD5" : "#F7F8FF")};
    border-radius: ${(props) => (props.isActive ? "8px 0 0 8px;" : "5px")};
    padding-left: ${(props) => (props.isActive ? "30px" : "20px")};
    width: ${(props) => (props.isActive ? "100%" : "100%")};

    img {
      transform: scale(1.1);
    }
  }

  ${(props) => props.isActive && activeContainerStyle}
`;

const iconStyle = css`
  margin-right: 19px;
  margin-bottom: 2px;
  color: #7e84a3;
  transition: transform 0.3s ease, filter 0.3s ease;
`;

const MenuItemImg = styled.img`
  ${iconStyle}
`;

export const HomeContainer = styled(MenuItemContainer)``;
export const HomeImg = styled(MenuItemImg).attrs({
  src: homeIconSrc,
  alt: "HomeIcon",
})``;
export const HomeMenu = styled.div``;

export const DictionaryContainer = styled(MenuItemContainer)``;
export const DictionaryImg = styled(MenuItemImg).attrs({
  src: dictionaryIconSrc,
  alt: "dictionaryIcon",
})``;

export const NewsContainer = styled(MenuItemContainer)``;
export const NewsImg = styled(MenuItemImg).attrs({
  src: newsIconSrc,
  alt: "newsIcon",
})``;

export const QuizContainer = styled(MenuItemContainer)``;
export const QuizImg = styled(MenuItemImg).attrs({
  src: quizIconSrc,
  alt: "quizIcon",
})``;

export const TutorialContainer = styled(MenuItemContainer)``;
export const TutorialImg = styled(MenuItemImg).attrs({
  src: tutorialIconSrc,
  alt: "tutorialIcon",
})``;

export const ProfileContainer = styled(MenuItemContainer)`
  margin-bottom: 230px;
`;
export const ProfileImg = styled(MenuItemImg).attrs({
  src: profileIconSrc,
  alt: "profileIcon",
})``;

