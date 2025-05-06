import { useState } from "react";
import * as M from "./SidebarStyle";
import { useNavigate, useLocation } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (paths) => paths.includes(location.pathname);
  let [btnActive, setBtnActive] = useState(false);

  return (
    <>
      <M.Sidebar>
        <M.Menu>
          <M.HomeContainer
            onClick={() => navigate("/")}
            isActive={isActive(["/"])}
          >
            <M.HomeImg isActive={isActive(["/"])} />
            <M.Text>홈</M.Text>
          </M.HomeContainer>
          <M.DictionaryContainer
            onClick={() => navigate("/dictionary")}
            isActive={isActive([
              "/dictionary",
              "/termmeaning",
            ])}
          >
            <M.DictionaryImg
              isActive={isActive([
                "/dictionary",
                "/termmeaning",
              ])}
            />
            <M.Text>용어 사전</M.Text>
          </M.DictionaryContainer>
          <M.NewsContainer
            onClick={() => navigate("/news")}
            isActive={isActive(["/news"])}
          >
            <M.NewsImg isActive={isActive(["/news"])} />
            <M.Text>관련 기사</M.Text>
          </M.NewsContainer>
          <M.QuizContainer
            onClick={() => navigate("/quizstart")}
            isActive={isActive(["/quizstart"])}
          >
            <M.QuizImg isActive={isActive(["/quizstart"])} />
            <M.Text>경제 퀴즈</M.Text>
          </M.QuizContainer>
          <M.TutorialContainer
            onClick={() => navigate("/tutorial")}
            isActive={isActive(["/tutorial"])}
          >
            <M.TutorialImg isActive={isActive(["/tutorial"])} />
            <M.Text>튜토리얼</M.Text>
          </M.TutorialContainer>
          <M.ProfileContainer
            onClick={() => navigate("/profile")}
            isActive={isActive(["/profile", "/mywords"])}
          >
            <M.ProfileImg isActive={isActive(["/profile", "/mywords"])} />
            <M.Text>프로필</M.Text>
          </M.ProfileContainer>
        </M.Menu>
      </M.Sidebar>
    </>
  );
};

export default SideBar;
