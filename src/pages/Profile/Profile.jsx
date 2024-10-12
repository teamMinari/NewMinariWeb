import React, { useEffect, useState } from "react";
import * as M from "./ProfileStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ModalStyle.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

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
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    setUserData(null);
    setShowLogoutModal(false);
    navigate("/");
  };

  const toggleLogoutModal = () => {
    setShowLogoutModal((prev) => !prev);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data found</div>;
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
                    <M.LogoutButton onClick={toggleLogoutModal}>
                      로그아웃
                    </M.LogoutButton>
                  </M.IdTextContainer>
                  <M.Category>금융, 글로벌 경제, 채권</M.Category>
                  <M.LevelContainer>
                    <progress
                      className="progress progress-info w-[550px] rounded-[5px]"
                      value={userData.level}
                      max="100"
                    />
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
      {/* 로그아웃 알림 모달 */}
      {showLogoutModal && (
        <div role="alert" className="alert p-4 bg-white rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0 mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>로그아웃 하시겠습니까?</span>
          <div className="mt-4">
            <button
              className="btn btn-sm mr-2"
              onClick={() => setShowLogoutModal(false)}
            >
              취소
            </button>
            <button className="btn btn-sm btn-primary" onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Profile;
