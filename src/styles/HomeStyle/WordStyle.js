import styled from "styled-components";
import StarImg from "../../assets/image/star.svg";
import LikeIcon from "../../assets/image/like.svg";

export const starImg = styled.img.attrs({
  src: StarImg,
  alt: "starIcon",
})``;

export const wordContainer = styled.div`
  width: 230px;
  height: 60px;
  background-color: #f5f6fa;
  border-radius: 7px;
  padding-left: 18px;
  padding-right: 18px;
  display: flex;
  margin-right: 55px;
  font-weight: 600;
  align-items: center;
  margin-bottom: 25px;
`;

export const text = styled.div`
  font-weight: 600;
`;

export const starsContainer = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 35px;
`;

export const likeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
`;

export const likeIcon = styled.img.attrs((props) => ({
  src: LikeIcon,
  alt: "likeIcon",
}))`
  width: 20px;
  height: 20px;
  margin-bottom:-5px;
  filter: ${(props) => (props.liked ? "grayscale(0%) " : "grayscale(80%) brightness(200%)")};
`;
