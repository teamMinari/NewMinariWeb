import styled, { createGlobalStyle, keyframes } from "styled-components";
import RequestIconSrc from "../assets/image/request.svg";
import MyWordsIconSrc from "../assets/image/myword.svg";
import ProfileImgSrc from "../assets/image/whaleprofile.svg";
import ChangeIconSrc from "../assets/image/change.svg";
import MoreIconSrc from "../assets/image/more.svg";
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

export const PageContent = styled.div`
  display: flex;
  z-index: 1;
`;

export const MainContent = styled.div`
  margin-left: 70px;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  width: 900px;
  height: 350px;
  background-color: #ffffff;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  margin-bottom: 35px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 20px;
  position: relative;
  overflow: hidden;
`;

export const ProfileBackContainer = styled.div`
  width: 900px;
  height: 150px;
  background: linear-gradient(to right, #363cd5, #cc00ff);
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  margin-bottom: 35px;
`;

export const ProfileInfo = styled.div`
  display: flex;
`;

export const ProfileImg = styled.img.attrs({
  src: ProfileImgSrc,
  alt: "ProfileImg",
})`
  width: 135px;
  height: 135px;
  border-radius: 100px;
  background-color: lightblue;
  margin-left: 70px;
  margin-top: -80px;
  border: 7px solid white;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  margin-top: -20px;
`;

export const IdTextContainer = styled.div`
  display: flex;
`;

export const IdText = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

export const Id = styled.div`
  font-weight: normal;
  font-size: 20px;
  margin-left: 8px;
`;

export const ChangeIcon = styled.img.attrs({
  src: ChangeIconSrc,
  alt: "ChangeIcon",
})`
  width: 20px;
  margin-left: auto;
  margin-right: 5px;
  cursor: pointer;
`;

export const MoreIcon = styled.img.attrs({
  src: MoreIconSrc,
  alt: "MoreIcon",
})`
  width: 6px;
  margin-left: 5px;
  cursor: pointer;
`;

export const Category = styled.div`
  font-weight: normal;
  font-size: 12px;
  color: #1c1c1c;
`;

export const LevelContainer = styled.div`
  width: 550px;
  height: 8px;
  border-radius: 5px;
  background-color: black;
  margin-top: 15px;
  position: relative;
`;

export const MyLevel = styled.div`
  width: 200px;
  height: 8px;
  border-radius: 5px;
  background-color: #00d33b;
`;

export const LevelTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const LevelRate = styled.div`
  font-weight: 700;
  font-size: 12px;
`;

export const LevelNum = styled.div`
  font-size: 12px;
  text-align: right;
  position: absolute;
  right: 0;
`;

export const PageText = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-left: 35px;
  margin-top: 30px;
`;

export const GotoUse = styled.div`
  font-weight: normal;
  font-size: 20px;
  color: #a4a4a4;
  text-align: right;
  margin-right: 40px;
  cursor: pointer;
`;

export const boxContainer = styled.div`
  display: flex;
`;

export const PointContainer = styled.div`
  width: 600px;
  height: 280px;
  background-color: #ffffff;
  border-radius: 30px;
  margin-right: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 20px;
`;

export const PointText = styled.div`
  font-size: 70px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  font-weight: 700;
`;

export const MyWordsContainer = styled(Link)`
  width: 280px;
  height: 280px;
  background-color: #ffffff;
  border-radius: 30px;
  margin-bottom: 35px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 20px;
  text-decoration: none;
  color: #000;
`;

export const MyWordsIcon = styled.img.attrs({
  src: MyWordsIconSrc,
  alt: "MyWordsIcon",
})`
  width: 130px;
  margin-left: 75px;
  margin-top: 25px;
`;

export const StoreContainer = styled.div`
  width: 900px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 30px;
  margin-bottom: 200px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 20px;
`;

export const StoreInfo = styled.div`
  display: flex;
`;

export const RequestContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

export const RequestIcon = styled.img.attrs({
  src: RequestIconSrc,
  alt: "RequestIcon",
})`
  width: 40px;
  margin-right: 8px;
`;

export const RequestText = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: #cccccc;
  margin-top: 6px;
`;

export const RequestBtn = styled.button`
  width: 150px;
  height: 35px;
  border: 1px solid #d7dbec;
  border-radius: 8px;
  background-color: white;
  font-size: 15px;
  margin-left: auto;
  margin-top: 25px;
  margin-right: 25px;
  cursor: pointer;
`;

const waveAnimation1 = keyframes`
from {
  transform: rotate(10deg);
}
to {
  transform: rotate(3600deg);
}
`;

const waveAnimation2 = keyframes`
from {
  transform: rotate(30deg);
}
to {
  transform: rotate(3600deg);
}
`;

const waveAnimation3 = keyframes`
from {
  transform: rotate(20deg);
}
to {
  transform: rotate(3600deg);
}
`;

export const WaveOne = styled.div`
  position: absolute;
  bottom: -24px;
  top: 97%;
  left: 50%;
  width: 1300px;
  height: 1300px;
  margin-left: -55%;
  border-radius: 40%;
  animation: ${waveAnimation1} 120000ms infinite ease-in-out;
  opacity: 0.1;
  background: #1e5eff;
`;

export const WaveTwo = styled.div`
  position: absolute;
  bottom: -24px;
  top: 97%;
  left: 50%;
  width: 1300px;
  height: 1300px;
  margin-left: -30%;
  border-radius: 40%;
  animation: ${waveAnimation2} 75000ms infinite ease-in-out;
  opacity: 0.1;
  background: #1e5eff;
`;

export const WaveThree = styled.div`
  position: absolute;
  bottom: -24px;
  top: 97%;
  left: 50%;
  width: 1300px;
  height: 1300px;
  margin-left: -65%;
  border-radius: 40%;
  animation: ${waveAnimation3} 100000ms infinite linear;
  opacity: 0.1;
  background: #1e5eff;
`;

export const WaveFour = styled.div`
  position: absolute;
  bottom: -24px;
  top: 97%;
  left: 50%;
  width: 1300px;
  height: 1300px;
  margin-left: -120%;
  border-radius: 40%;
  animation: ${waveAnimation2} 90000ms infinite ease-in-out;
  opacity: 0.1;
  background: #1e5eff;
`;

export const WaveFive = styled.div`
  position: absolute;
  bottom: -24px;
  top: 97%;
  left: 50%;
  width: 1300px;
  height: 1300px;
  margin-left: -95%;
  border-radius: 40%;
  animation: ${waveAnimation3} 85000ms infinite ease-in-out;
  opacity: 0.1;
  background: #1e5eff;
`;
