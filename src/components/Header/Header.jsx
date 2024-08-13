import React from "react";
import * as M from "../../styles/HeaderStyle";
import logoImg from '../../assets/image/logo.svg';
import profileImg from '../../assets/image/profile.svg';

const header = () => {
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
          <M.MemberName>admin</M.MemberName>
        </M.AuthContainer>
      </M.Bar>
    </M.Form>
  );
};

export default header;
