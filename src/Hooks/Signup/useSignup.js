import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // 성공 메시지 상태 추가

  const navigate = useNavigate();

  const validateForm = (email, password, confirmPassword) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "유효한 이메일을 입력하세요.";
    if (password.length < 6) return "비밀번호는 최소 6자리여야 합니다.";
    if (password !== confirmPassword) return "비밀번호가 일치하지 않습니다.";
    return "";
  };

  const signupUser = async (email, id, password, confirmPassword) => {
    const formError = validateForm(email, password, confirmPassword);
    if (formError) {
      setError(formError);
      return;
    }

    setLoading(true);
    setError("");
    setSuccessMessage(""); // 성공 메시지 초기화

    try {
      console.log("Sending request to the server...");
      const response = await axios.post(
        "http://3.35.152.231:8080/member/register",
        { email, id, password, confirmPassword }
      );

      console.log("Response from server:", response.data);

      // 성공 메시지 설정
      setSuccessMessage("회원가입이 성공적으로 완료되었습니다!");

      // 서버 응답에 따라 적절히 처리
      navigate("/login"); // 회원가입 성공 후 로그인 페이지로 이동
    } catch (err) {
      console.error("Error occurred:", err);
      setError(err.response?.data?.message || "회원가입에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return { signupUser, loading, error, successMessage }; // 성공 메시지 반환
};

export default useSignup;
