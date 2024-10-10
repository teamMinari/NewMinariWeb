import React, { useEffect, useState } from "react";
import * as M from "./ProfileStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState(null); // 사용자 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  useEffect(() => {
    const fetchUserData = async () => {
      const storedToken = localStorage.getItem("accessToken");
      if (!storedToken) {
        console.error("Access token is missing");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "https://cheongfordo.kr/member/profile",
          {
            // 적절한 API URL로 변경하세요
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 컴포넌트
  }

  if (!userData) {
    return <div>No user data found</div>; // 사용자 데이터가 없을 때 표시할 컴포넌트
  }

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
                    <M.Id>{userData.id}</M.Id>
                    <M.ChangeIcon />
                    <M.MoreIcon />
                  </M.IdTextContainer>
                  <M.Category>금융, 글로벌 경제, 채권</M.Category>
                  <M.LevelContainer>
                    <M.MyLevel />
                    <M.LevelTextContainer>
                      <M.LevelRate>{userData.level}Lv</M.LevelRate>
                      <M.LevelNum>
                        {userData.checkLevel}/{userData.totalExp}
                      </M.LevelNum>
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
                <M.TopTextContainer>
                  <M.PageText>My 포인트</M.PageText>
                  <M.GotoUse>사용하러 가기</M.GotoUse>
                </M.TopTextContainer>
                <M.PointText>{userData.point}P</M.PointText>
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
