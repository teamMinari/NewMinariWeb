import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import * as M from "./QuizStyle";
import Spline from "@splinetool/react-spline";

const QuizStart = () => {
  const [points, setPoints] = useState(2043);
  return (
    <div>
      <React.Fragment>
        <M.Zindex>
          <Header />
          <M.GlobalStyles />
          <M.PageContent>
              <Sidebar />
            <M.QuizMainContainer>
              <M.TestContainer>
                <M.MiniTxt>닉네임님</M.MiniTxt>
                <M.LargeTitle>미나리 경제 상식 퀴즈로 닉네임님의 <br/> 경제 지식을 평가해보세요!</M.LargeTitle>
                <M.SimButton to="/quiz">테스트 하러 가기</M.SimButton>
              </M.TestContainer>
              
            </M.QuizMainContainer>
          </M.PageContent>
        </M.Zindex>
      </React.Fragment>
    </div>
  );
};

export default QuizStart;
