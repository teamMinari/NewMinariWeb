import { useState, React, Fragment } from "react";
import * as M from "./SidebarStyle";
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
            onClick={() => {
              navigate("/");
            }}
            isActive={isActive("/")}
          >
            <M.HomeImg isActive={isActive("/")} />
            <M.HomeMenu>홈</M.HomeMenu>
          </M.HomeContainer>
          <M.DictionaryContainer
            onClick={() => navigate("/dictionarymain")}
            isActive={isActive("/dictionarymain")}
          >
            <M.DictionaryImg isActive={isActive("/dictionarymain", "dictionary")} />
            용어 사전
          </M.DictionaryContainer>
          <M.NewsContainer
            onClick={() => navigate("/news")}
            isActive={isActive("/news")}
          >
            <M.NewsImg isActive={isActive("/news")} />
            관련 기사
          </M.NewsContainer>
          <M.QuizContainer
            onClick={() => navigate("/quizstart")}
            isActive={isActive("/quizstart")}
          >
            <M.QuizImg isActive={isActive("/quizstart")} />
            경제 퀴즈
          </M.QuizContainer>
          <M.TutorialContainer
            onClick={() => navigate("/tutorial")}
            isActive={isActive("/tutorial")}
          >
            <M.TutorialImg isActive={isActive("/tutorial")} />
            튜토리얼
          </M.TutorialContainer>
          <M.ProfileContainer
            onClick={() => navigate("/profile")}
            isActive={isActive("/profile")}
          >
            <M.ProfileImg isActive={isActive("/profile")} />
            프로필
          </M.ProfileContainer>
        </M.Menu>
      </M.Sidebar>
    </>
  );
};

export default SideBar;
