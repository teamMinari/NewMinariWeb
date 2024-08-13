import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #F5F6FA;
  }
`;

export const PageContent = styled.div`
  display: flex;
  z-index: 1;
`;

export const MainContent = styled.div`
  margin-left: 70px;
  margin-top: 47px;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GrapeSeedContainer = styled.div`
  width: 900px;
  height: auto;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 47px;
  margin-bottom: 200px;
`;

export const ContentContainer = styled.div`
  margin-left: 155px;
  margin-right: 155px;
`;

export const TopContainer = styled.div`
  display: flex;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

export const PathContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const Path = styled(NavLink)`
  font-weight: normal;
  cursor: pointer;
  margin-right: 6px;
  color: #636363;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const XpContainer = styled.div`
  width: 100px;
  height: 20px;
  border-radius: 4px;
  background-color: #5dc067;
  text-align: center;
  margin-right: 10px;
`;

export const PageText = styled.div`
  font-weight: 600;
  font-size: 30px;
  margin-top: 65px;
`;

export const TimeText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #575757;
  margin-top: 8px;
`;

export const ContentText = styled.div`
  font-weight: normal;
  font-size: 18px;
  margin-top: 20px;
`;

export const StyledLink = styled.a`
  color: blue;
  font-size: 15px;
  text-decoration: underline;
  &:hover {
    color: darkblue;
  }
`;

export const NextBtn = styled.button`
  width: 100px;
  height: 45px;
  background-color: #1f6ad9;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  margin-top: 60px;
  margin-bottom: 200px;
  cursor: pointer;
`;
