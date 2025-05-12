import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import customAxios from "../../utils/customAxios";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginUser = async (id, password) => {
    setLoading(true);
    setError("");
    try {
      const response = await customAxios.post(`/member/login`, {
        id,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data)); // 사용자 정보 저장
      setLoading(false);
      navigate("/"); // 로그인 성공 시 메인 페이지로 리다이렉트
      // zustand 이용 시 store.setState({ accessToken = response.data.accessToken }); 이런 느낌으로 작성
      // jotai 이용 시 atomAccessToken.set(response.data.accessToken); 이런 느낌으로 작성
      // 원하는거 쓰기
      localStorage.setItem("accessToken", response.data.data.accessToken);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);
      return response.data; // 사용자 정보 반환
    } catch (err) {
      setLoading(false);
      if (err.response) {
        setError("로그인에 실패했습니다.");
        console.error("로그인 에러:", err.response.data);
      } else if (err.request) {
        setError("서버에서 응답이 없습니다.");
      } else {
        setError("네트워크 오류가 발생했습니다.");
      }
      throw err;
    }
  };

  return { loginUser, loading, error };
};

export default useLogin;