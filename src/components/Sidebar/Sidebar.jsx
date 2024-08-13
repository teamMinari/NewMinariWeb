import { useState , React , Fragment } from "react";
import * as M from "../../styles/SidebarStyle";
import { useNavigate, useLocation } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  let [btnActive, setBtnActive] = useState(false);

  return (
    <>
      <M.Sidebar>
        <M.Menu>
          <M.HomeContainer
            onClick={() => {navigate("/");}}
            isActive={isActive("/")}
          >
            <M.HomeImg isActive={isActive("/")}/>
            <M.HomeMenu>홈</M.HomeMenu>
          </M.HomeContainer>
          <M.DictionaryContainer
            onClick={() => navigate("/dictionary")}
            isActive={isActive("/dictionary")}
          >
            <M.DictionaryImg isActive={isActive("/dictionary")}/>
            용어 사전
          </M.DictionaryContainer>
          <M.NewsContainer
            onClick={() => navigate("/news")}
            isActive={isActive("/news")}
          >
            <M.NewsImg isActive={isActive("/news")}/>
            관련 기사
          </M.NewsContainer>
          <M.QuizContainer
            onClick={() => navigate("/quizstart")}
            isActive={isActive("/quizstart")}
          >
            <M.QuizImg isActive={isActive("/quizstart")}/>
            경제 퀴즈
          </M.QuizContainer>
          <M.ProfileContainer
            onClick={() => navigate("/profile")}
            isActive={isActive("/profile")}
          >
            <M.ProfileImg isActive={isActive("/profile")}/>
            프로필
          </M.ProfileContainer>
        </M.Menu>
      </M.Sidebar>
    </>
  );
};

export default SideBar;
