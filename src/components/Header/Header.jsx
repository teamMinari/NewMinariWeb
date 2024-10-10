import React, { useEffect, useState } from "react";
import * as M from "./HeaderStyle";
import logoImg from '../../assets/image/logo.svg';
import profileImg from '../../assets/image/profile.svg';
import axios from "axios";
import { Link } from "react-router-dom";

const Header = () => {
  const [userData, setUserData] = useState(null); // 사용자 데이터를 저장할 상태

  useEffect(() => {
    const fetchUserData = async () => {
      const storedToken = localStorage.getItem("accessToken");

      if (!storedToken) {
        // 토큰이 없을 때 "Guest"로 설정
        setUserData({ id: "Guest" });
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
        setUserData(response.data); // 사용자 데이터 저장
        // 사용자 ID를 localStorage에 저장
        localStorage.setItem("userId", response.data.id);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // 페이지 로드 시 localStorage에서 사용자 ID를 가져오기
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserData({ id: storedUserId });
    } else {
      setUserData({ id: "Guest" });
    }

    fetchUserData();
  }, []);

  return (
    <M.Form>
      <M.Bar>
        <M.Container>
          <M.LogoLink to="/">
            <M.LogoImg src={logoImg} alt="logo" />
          </M.LogoLink>
        </M.Container>
        <M.AuthContainer to="/profile">
          <M.MemberProfile src={profileImg} alt="profile" />
          {/* 사용자 ID 표시 */}
          <M.MemberName>{userData ? userData.id : "Loading..."}</M.MemberName>
        </M.AuthContainer>
      </M.Bar>
    </M.Form>
  );
};

export default Header;
