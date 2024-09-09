import React, { useState } from "react";
import * as M from "./SignupStyle";
import { ReactComponent as Logo } from "../../assets/image/logo.svg";
import LoginBanner from "../../assets/image/Group 1544.svg";
import { useNavigate } from "react-router-dom";
import useSignup from "../../Hooks/Signup/useSignup";

const Signup = () => {
  const navigate = useNavigate();
  const { signupUser, loading, error } = useSignup();
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      return "이메일을 입력해주세요.";
    }
    if (!emailRegex.test(email)) {
      return "이메일 형식이 올바르지 않습니다.";
    }
    if (!id) {
      return "아이디를 입력해주세요.";
    }
    if (!password) {
      return "비밀번호를 입력해주세요.";
    }
    if (password !== confirmPassword) {
      return "비밀번호가 일치하지 않습니다.";
    }
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // 양식 유효성 검사
    const errorMessage = validateForm();
    if (errorMessage) {
      setFormError(errorMessage);
      return;
    }

    setFormError(""); // 양식이 올바르면 에러 메시지 초기화

    try {
      await signupUser(email, id, password, confirmPassword);
      navigate("/login"); // 성공 시 로그인 페이지로 이동
    } catch (err) {
      console.error("회원가입 에러:", err);
    }
  };

  return (
    <M.Form>
      <M.LoginPart>
        <M.Container>
          <Logo />
        </M.Container>
        <M.Title>회원가입</M.Title>
        <M.SignupInfo>
          이미 계정이 있으시다면?
          <br />
          여기서
          <M.SignTxt to="/login">로그인 하세요!</M.SignTxt>
        </M.SignupInfo>
        <M.Email>이메일</M.Email>
        <M.EmailContainer>
          <M.EmailIcon />
          <M.EmailInput
            type="email"
            placeholder="이메일 주소를 입력하세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </M.EmailContainer>
        <M.Id>아이디</M.Id>
        <M.PwContainer>
          <M.UserIcon />
          <M.IdInput
            type="text"
            placeholder="아이디를 입력하세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </M.PwContainer>
        <M.Password>비밀번호</M.Password>
        <M.PwContainer>
          <M.PwIcon />
          <M.PwInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </M.PwContainer>
        <M.Password>비밀번호 확인</M.Password>
        <M.PwContainer>
          <M.PwIcon />
          <M.PwInput
            type="password"
            placeholder="비밀번호를 다시 입력하세요."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </M.PwContainer>
        {formError && (
          <M.ErrorMessage style={{ marginLeft: "120px" }}>
            {formError}
          </M.ErrorMessage>
        )}
        {error && (
          <M.ErrorMessage style={{ marginLeft: "120px" }}>
            {error}
          </M.ErrorMessage>
        )}
        <M.SignupBtn type="submit" disabled={loading} onClick={onSubmit}>
          {loading ? "회원가입 중..." : "회원가입"}
        </M.SignupBtn>
      </M.LoginPart>
      <M.BannerContainer>
        <img src={LoginBanner} alt="Login Banner" />
      </M.BannerContainer>
    </M.Form>
  );
};

export default Signup;
