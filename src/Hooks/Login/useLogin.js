import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginUser = async (id, password) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://10.80.161.209:8080/member/login", {
        id,
        password,
      });

      localStorage.setItem("accessToken", response.data.data.accessToken)

      // 로그인 성공 시 토큰 저장
      const { accessToken, refreshToken } = response.data;

      if (accessToken && refreshToken) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      } else {
        console.error("로그인 응답에서 토큰을 찾을 수 없습니다.");
      }

      setLoading(false);
      navigate("/");  // 로그인 성공 후 홈으로 이동
      return response.data;
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
