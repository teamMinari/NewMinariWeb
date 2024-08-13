import styled from "styled-components";
import { Link } from "react-router-dom";
import emailIconSrc from "../assets/image/email.svg";
import pwIconSrc from "../assets/image/pw.svg";
import userIconSrc from "../assets/image/user.svg";

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
`;

export const LoginPart = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Container = styled.div`
  margin-top: 30px;
  margin-left: 45px;
`;

export const BannerContainer = styled.div`
  margin-left: auto;
  margin-right: 20px;
  margin-top: 30px;
  width: 680px;
  height: 859px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-left: 122px;
  margin-top: 40px;
`;

export const SignupInfo = styled.div`
  font-size: 15px;
  font-weight: light;
  margin-top: 20px;
  margin-left: 122px;
`;

export const SignTxt = styled(Link)`
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: #0c21c1;
  margin-left: 7px;
`;

export const Email = styled.div`
  font-size: 13px;
  font-weight: normal;
  color: #999;
  margin-left: 122px;
  margin-top: 35px;
`;

export const EmailInput = styled.input`
  font-size: 15px;
  width: 376px;
  height: 65px;
  padding: 0 27px;
  margin-left: -17px;
  color: #000842;
  border: none;
  border-bottom: 2px solid #999999;
  &:focus {
    border-bottom-color: #000842;
    outline: none;
  }
`;

export const EmailIcon = styled.img.attrs({
  src: emailIconSrc,
  alt: "EmailIcon",
})`
  margin-left: 122px;
  margin-bottom: -3px;
  position: relative;
  z-index: 1;
`;

export const EmailContainer = styled.div``;

export const Id = styled.div`
  font-size: 13px;
  font-weight: normal;
  color: #999;
  margin-left: 122px;
  margin-top: 35px;
  margin-bottom: -5px;
`;

export const IdInput = styled.input`
  font-size: 15px;
  width: 376px;
  height: 65px;
  padding: 0 27px;
  margin-left: -17px;
  color: #000842;
  border: none;
  border-bottom: 2px solid #999999;
  &:focus {
    border-bottom-color: #000842;
    outline: none;
  }
`;

export const UserIcon = styled.img.attrs({
  src: userIconSrc,
  alt: "UserIcon",
})`
  margin-left: 122px;
  margin-bottom: -3px;
  position: relative;
  z-index: 1;
`;

export const Password = styled.div`
  font-size: 13px;
  font-weight: normal;
  color: #999;
  margin-left: 122px;
  margin-top: 35px;
`;

export const PwInput = styled.input`
  font-size: 15px;
  width: 376px;
  height: 65px;
  padding: 0 27px;
  margin-left: -17px;
  color: #000842;
  border: none;
  border-bottom: 2px solid #999999;
  &:focus {
    border-bottom-color: #000842;
    outline: none;
  }
`;

export const PwIcon = styled.img.attrs({
  src: pwIconSrc,
  alt: "PwIcon",
})`
  margin-left: 122px;
  margin-bottom: -3px;
  position: relative;
  z-index: 1;
`;

export const PwContainer = styled.div``;

export const SignupBtn = styled.button`
  font-size: 17px;
  font-weight: 600;
  width: 430px;
  height: 53px;
  color: #ffffff;
  background-color: #0c21c1;
  border: none;
  border-radius: 30px;
  margin-left: 122px;
  margin-top: 40px;
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;