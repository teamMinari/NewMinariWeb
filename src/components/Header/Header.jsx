import React, { useEffect, useState } from "react";
import * as M from "./HeaderStyle";
import logoImg from "../../assets/image/logo.svg";
import profileImg from "../../assets/image/profile.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

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
          {userData && userData.id !== "Guest" ? (
            <>
              <M.MemberProfile src={profileImg} alt="profile" />
              <M.MemberName>{userData.id}</M.MemberName>
            </>
          ) : (
            <M.MemberName to="/login" style={{ cursor: "pointer" }}>
              로그인
            </M.MemberName>
          )}
        </M.AuthContainer>
      </M.Bar>
    </M.Form>
  );
};

export default Header;
