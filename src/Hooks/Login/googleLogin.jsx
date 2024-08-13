import React from "react";
import { Snsbtn } from "../../components/styles/LoginStyle";

function GoogleLogin() {
  const REDIRECT_URI = "your_redirect_uri_here"; //사용자가 구글 로그인을 완료한 후 리다이렉트될 URI
  const REST_API_KEY = "your_rest_api_key_here"; //Google API와 통신할 때 사용되는 REST API 키
  const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=email%20openid&response_type=code&redirect_uri=${REDIRECT_URI}&client_id=${REST_API_KEY}`;

  return (
    <a href={GOOGLE_URL}>
      <Snsbtn>
        <img src={"/google.svg"} alt="googlelogin" />
      </Snsbtn>
    </a>
  );
}

export default GoogleLogin;
