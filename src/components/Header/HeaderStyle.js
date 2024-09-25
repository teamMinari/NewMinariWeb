import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Form = styled.form`
  display: flex;
`;

export const Bar = styled.header`
  width: 100%;
  height: 75px;
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 2, 5, 0.1);
  display: flex;
  align-items: center;
  position: relative;
  z-index: 3000;
`;

export const Container = styled.div`
  margin-left: 118px;
`;

export const LogoLink = styled(NavLink)`
  display: block;
  width: 150px;
`;

export const LogoImg = styled.img`
  width: 105px;
`;

export const AuthContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-left: auto;
`;

export const MemberProfile = styled.img`
  width: 37px;
`;

export const MemberName = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #878787;
  margin-left: 20px;
  margin-right: 80px;
`;
