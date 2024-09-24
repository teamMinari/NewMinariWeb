import News1 from "../../../assets/image/News1.png";
import News2 from "../../../assets/image/News2.png";
import News3 from "../../../assets/image/News3.png";
import News4 from "../../../assets/image/News4.png";
import styled, { css } from "styled-components";

export const CompanyStyle = css`
  width: 55px;
  height: 55px;
  border-radius:15px;
  box-shadow: 10px 10px 15px 10px rgba(0, 0, 0, 0.03);
  :hover{
    scale: calc(1.05);
  }
`;


export const News1Image = styled.img.attrs({
  src: News1,
  alt: "News1",
})`
  ${CompanyStyle}
`;

export const News2Image = styled.img.attrs({
  src: News2,
  alt: "News2",
})`
  ${CompanyStyle}
`;

export const News3Image = styled.img.attrs({
  src: News3,
  alt: "News3",
})`
  ${CompanyStyle} 
`;

export const News4Image = styled.img.attrs({
  src: News4,
  alt: "News4",
})`
  ${CompanyStyle}
`;

export const ContainerElement = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 280px;
  height: 138px;
  box-sizing: border-box;
  grid-row-end: span 5;
  overflow: hidden;
`;

export const NewsCompanyContainer = styled.div`
  display: flex;
  gap: 15px;
  overflow: scroll;
  padding-top: 20px;
  padding-bottom: 50px;
  padding-right: 259px ;
  padding-left: 21px;
`;

export const TextContainer = styled.div`
  padding: 0px 22px;
  padding-top: 21px;
  display: flex;
  justify-content: space-between;
`;

