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
      const response = await axios.post("http://cheong.baekjoon.kr/member/login", {
        id,
        password,
      });
      setLoading(false);
      navigate("/");
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
