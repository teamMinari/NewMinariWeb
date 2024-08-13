import { useState } from "react";
import axios from "axios";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signupUser = async (email, id, password, confirmPassword) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://cheong.baekjoon.kr/member/register",
        { email, id, password, confirmPassword }
      );
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "회원가입에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return { signupUser, loading, error };
};

export default useSignup;
