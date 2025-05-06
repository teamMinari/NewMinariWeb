import React from "react";
import * as M from "../ProfileStyle.js";
import useProfile from "../../../Hooks/Profile/useProfile";

const ProfileInfo = () => {
  const { userData, toggleLogoutModal, showLogoutModal, handleLogout } =
    useProfile();

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
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
              style={{ width: "550px", Color: "#1f25be" }}
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
      {showLogoutModal && (
        <div style={{width: "100%", textAlign: "center", margin: "20px"}}>
          <div className="alert p-8 bg-white rounded-lg shadow-md">
            <span>로그아웃 하시겠습니까?</span>
            <div className="my-16">
              <button
                className="btn btn-sm mr-2"
                onClick={() => toggleLogoutModal()}
              >
                취소
              </button>
              <button className="btn btn-sm btn-primary" onClick={handleLogout}>
                로그아웃
              </button>
            </div>
          </div>
        </div>
      )}
      <M.WaveOne />
      <M.WaveTwo />
      <M.WaveThree />
      <M.WaveFour />
      <M.WaveFive />
    </M.ProfileContainer>
  );
};

export default ProfileInfo;
