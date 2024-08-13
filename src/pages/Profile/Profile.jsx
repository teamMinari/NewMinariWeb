import React from "react";
import * as M from "../../styles/ProfileStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <React.Fragment>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <Sidebar />
        <M.MainContent>
          <M.CenteredContent>
            <M.ProfileContainer>
              <M.ProfileBackContainer />
              <M.ProfileInfo>
                <M.ProfileImg />
                <M.ProfileDetails>
                  <M.IdTextContainer>
                    <M.IdText>미나리</M.IdText>
                    <M.Id>(minari123)</M.Id>
                    <M.ChangeIcon />
                    <M.MoreIcon />
                  </M.IdTextContainer>
                  <M.Category>금융, 글로벌 경제, 채권</M.Category>
                  <M.LevelContainer>
                    <M.MyLevel />
                    <M.LevelTextContainer>
                      <M.LevelRate>8Lv</M.LevelRate>
                      <M.LevelNum>10/1250</M.LevelNum>
                    </M.LevelTextContainer>
                  </M.LevelContainer>
                </M.ProfileDetails>
              </M.ProfileInfo>
              <M.WaveOne />
              <M.WaveTwo />
              <M.WaveThree />
              <M.WaveFour />
              <M.WaveFive />
            </M.ProfileContainer>
            <M.boxContainer>
              <M.PointContainer>
                <M.PageText>My 포인트</M.PageText>
                <M.PointText>2,584P</M.PointText>
                <M.GotoUse>사용하러 가기 {">"}</M.GotoUse>
              </M.PointContainer>
              <M.MyWordsContainer to="/mywords">
                <M.PageText>내 단어장</M.PageText>
                <M.MyWordsIcon />
              </M.MyWordsContainer>
            </M.boxContainer>
            <M.StoreContainer>
              <M.StoreInfo>
                <M.PageText>포인트 상점</M.PageText>
                <M.RequestBtn>페이지 예시 보기</M.RequestBtn>
              </M.StoreInfo>
              <M.RequestContainer>
                <M.RequestIcon />
                <M.RequestText>아직 제작 중에 있는 기능이에요.</M.RequestText>
              </M.RequestContainer>
            </M.StoreContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Profile;
