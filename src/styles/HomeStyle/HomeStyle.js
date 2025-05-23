import styled, { createGlobalStyle, css } from "styled-components";
import HouseImg from "../../assets/image/houseText.png";
import ChartImg from "../../assets/image/chartText.png";
import CoinImg from "../../assets/image/coinText.png";
import EarthImg from "../../assets/image/earthText.png";
import WalletImg from "../../assets/image/walletText.png";
import BannerImg from "../../assets/image/banner.png";
import LocketImg from "../../assets/image/grapesLocket.svg";
import { Link } from "react-router-dom";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #F5F6FA;
  }
`;

export const bannerStyle = css`
  object-fit: contain;
  width: 934px;
  height: 376px;
`;

export const WalletIconStyle = css`
  object-fit: contain;
  width: 202px; /* 아이콘 너비 */
  height: 68px; /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;
export const HouseIconStyle = css`
  object-fit: contain;
  width: 212px; /* 아이콘 너비 */
  height: 57px; /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;
export const EarthIconStyle = css`
  object-fit: contain;
  width: 212px; /* 아이콘 너비 */
  height: 57px; /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;
export const ChartIconStyle = css`
  object-fit: contain;
  width: 212px; /* 아이콘 너비 */
  height: 57px; /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;
export const CoinIconStyle = css`
  object-fit: contain;
  width: 212px; /* 아이콘 너비 */
  height: 57px; /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;

export const BannerWarp = styled.div`
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: flex-start;
`;

export const House = styled(Link)``;
export const Chart = styled(Link)``;
export const Coin = styled(Link)``;
export const Earth = styled(Link)``;
export const Wallet = styled(Link)``;
export const Hi = styled.div`
  font-size: large;
`;

export const StyledHouseImg = styled.img.attrs({
  src: HouseImg,
  alt: "houseImg",
})`
  ${HouseIconStyle}
`;

export const StyledChartImg = styled.img.attrs({
  src: ChartImg,
  alt: "chartImg",
})`
  ${ChartIconStyle}
`;

export const StyledCoinImg = styled.img.attrs({
  src: CoinImg,
  alt: "coImg",
})`
  ${CoinIconStyle}
`;

export const StyledWalletImg = styled.img.attrs({
  src: WalletImg,
  alt: "walletImg",
})`
  ${WalletIconStyle}
`;

export const StyledEarthImg = styled.img.attrs({
  src: EarthImg,
  alt: "earthImg",
})`
  ${EarthIconStyle}
`;

export const ChartContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ChartPageText = styled.div`
  font-weight: 700;
  font-size: 23px;
  margin-bottom: 25px;
  margin: 10px;
`;

export const ChartCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PieChartContainer = styled.div`
  width: 400px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  flex-direction: column;
  display: flex;
  padding: 30px;
  padding-bottom: 25px;
`;

export const PageContent = styled.div`
  display: flex;
  z-index: 1;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecommendWordContainer = styled.div`
  width: 934px;
  height: 255px;
  margin-top: -40px;
  background-color: #ffffff;
  border-radius: 10px;
  align-items: center;
  justify-content: flex-start;
`;

export const PageText = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-left: 35px;
  margin-top: 24px;
  color: #414141;
`;

export const WordSpace = styled.div`
  display: flex;
  margin-left: 35px;
  flex-flow: row wrap;
  margin-top: 25px;
  justify-content: center;
`;

export const Menu = styled.div`
  width: 100%;
  height: 120px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 29px;
`;

export const SimpleNewsCenterWrapper = styled.div`
  width: 100%;
  height: 280px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 12px;
  display: flex;
  border: #e0e0e0 solid 1px;
  margin-left: 45px;
  padding: 0 15px;
`;
export const NewsContainer = styled.div`
  width: 100%;
  height: 278px;
  background-color: #ffffff;
  position: relative;
  display: flex;
  padding-bottom: 1px;
  overflow: scroll;
  border-radius: 10px;
`;

export const RecommendTutorialContainer = styled.div`
  display: flex;
`;

export const BunchOfGrapesContainer = styled.div`
  width: 460px;
  height: 256px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  position: relative;
`;

export const TextContainer = styled.div``;

export const BunchOfGrapesTitle = styled.div`
  font-weight: 700;
  font-size: 19px;
  margin-left: 35px;
  margin-top: 20px;
  color: #363cd5;
`;

export const GrapeTitle = styled.div`
  font-weight: 600;
  font-size: 19px;
  margin-left: 35px;
  margin-top: 8px;
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

export const GrapesLocketImg = styled.img.attrs({
  src: LocketImg,
  alt: "locatImg",
})`
  width: 140px;
  display: block;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 40px;
`;

export const LearnBtn = styled.button`
  width: 80px;
  height: 32px;
  border-radius: 7px;
  border: none;
  background-color: #148ce5;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  bottom: 24px;
  right: 28px;
  cursor: pointer;
`;

export const GrapeContainer = styled.div`
  width: 460px;
  height: 256px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 16px;
  position: relative; /* Add this line */
`;

export const SimpleNewsContainer = styled.div`
  width: 934px;
  height: 372px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  padding-bottom: 30px;
  flex-direction: column;
  justify-content: baseline;
`;

export const ChartContainer = styled.div`
  width: 470px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 29px;
  padding: 30px;
`;
export const HorizontalLine = styled.div`
  width: 1px;
  height: 60px;
  background-color: #d5ddfd;
  margin: 0 -25px;
`;
export const Banner = styled.img.attrs({
  src: BannerImg,
  alt: "bannerImg",
})`
  ${bannerStyle}
`;
