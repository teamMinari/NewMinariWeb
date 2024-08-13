import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar"; 
import * as M from "../../styles/QuizStyle";
import Spline from '@splinetool/react-spline';


const QuizStart = () => {
  const [points, setPoints] = useState(2043);
  return (
    <div>
      <React.Fragment>
      <M.Zindex>
        <Header />
        <M.GlobalStyles />
        <M.PageContent>
          <M.FitContainer>
            <Sidebar />
          </M.FitContainer>
          <M.QuizContainer>
          
            <M.Button to="/quiz" style={{ textDecoration: "none"}}>시작하기</M.Button>
              <M.SplineContainer>
                <Spline scene="https://prod.spline.design/JYVD6CtEq6b6FGoh/scene.splinecode" />
              </M.SplineContainer>
              <M.PointContainer>
                <M.PointTitle>My 포인트</M.PointTitle>
                <M.PointNum>{points}</M.PointNum> 
              </M.PointContainer>
              <M.Title>퀴즈를 시작하겠습니다!</M.Title>
              <M.Description>총 10문제이며 O/X 형식으로 이루어져 있습니다.</M.Description>
              <M.CenterdContent />
            
              
          </M.QuizContainer>
          
        </M.PageContent>
        </M.Zindex>  
      </React.Fragment>
    </div>
  );
};

export default QuizStart;