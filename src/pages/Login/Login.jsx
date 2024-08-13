import React, { useState } from "react";
import * as M from "../../styles/LoginStyle";
import { ReactComponent as Logo } from "../../assets/image/logo.svg";
import LoginBanner from "../../assets/image/Group 1544.svg";
import { ReactComponent as Google } from "../../assets/image/google.svg";
import { useNavigate } from "react-router-dom";
import useLogin from "../../Hooks/Login/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, loading, error } = useLogin();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = () => {
    navigate("/googleLogin");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(id, password);
    } catch (err) {
      console.error("로그인 에러:", err);
    }
  };

  return (
    <M.Form >
      <M.LoginPart>
        <M.Container>
          <Logo />
        </M.Container>
        <M.Title>로그인</M.Title>
        <M.LoginInfo>
          아직 회원가입을 하지 않으셨다면?
          <br />
          여기서
          <M.SignTxt to="/signup">가입 하세요!</M.SignTxt>
        </M.LoginInfo>
        <M.Id>아이디</M.Id>
        <M.IdContainer>
          <M.IdIcon />
          <M.IdInput
            type="text"
            placeholder="아이디를 입력하세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </M.IdContainer>
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
        <M.SaveAndForgotContainer>
          <M.LoginSave type="checkbox" id="loginSave" />
          <M.LoginSaveLabel htmlFor="loginSave">로그인 저장</M.LoginSaveLabel>
          <M.PwForgot>비밀번호를 잊으셨나요?</M.PwForgot>
        </M.SaveAndForgotContainer>
        {error && <M.ErrorMessage>{error}</M.ErrorMessage>}
        <M.LoginBtn type="submit" disabled={loading} onClick={onSubmit}>
          {loading ? "로그인 중..." : "로그인"}
        </M.LoginBtn>
        <M.SnsTxt>sns 로그인</M.SnsTxt>
        <M.Snsbtn onClick={handleGoogleLogin}>
          <Google />
        </M.Snsbtn>
      </M.LoginPart>
      <M.BannerContainer>
        <img src={LoginBanner} alt="Login Banner" />
      </M.BannerContainer>
    </M.Form>
  );
};

export default Login;
