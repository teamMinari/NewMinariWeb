import React, { useState } from "react";
import Header from "../../components/Common/Header/Header";
import Sidebar from "../../components/Common/Sidebar/Sidebar";
import * as M from "./QuizStyle";
import Masonry from "react-masonry-css";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";


const QuizStart = () => {
  const navigate = useNavigate();
  const [points, setPoints] = useState(2043);
  var items = [
    { id: 1, name: "My First Item" },
    { id: 2, name: "Another item" },
    { id: 3, name: "Third Item" },
    { id: 4, name: "Here is the Fourth" },
    { id: 5, name: "High Five" },
  ];
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  // Convert array to JSX items
  items = items.map(function (item) {
    return <M.PointContainer key={item.id}>{item.name}</M.PointContainer>;
  });

  return (
    <div>
      <React.Fragment>
        <M.Zindex>
          <Header />
          <M.GlobalStyles />
          <M.PageContent>
            <Sidebar />
            <M.QuizMainContainer>
              <M.TopBanner>
                <M.TestContainer>
                  <M.MiniTxt>닉네임님</M.MiniTxt>
                  <M.LargeTitle>
                    미나리 경제 상식 퀴즈로 닉네임님의 <br /> 경제 지식을
                    평가해보세요!
                  </M.LargeTitle>
                  <M.SimButton onClick={() => window.open("https://bit.ly/Minari_cheongpodo_sim")}>테스트 하러 가기</M.SimButton>
                </M.TestContainer>
                <M.SplineContainer>
                  <Spline scene="https://prod.spline.design/PZbY4Usy2Q5uidNT/scene.splinecode" />
                </M.SplineContainer>
              </M.TopBanner>
              <M.Middle>
                <M.TopMenuContainer>
                  <M.TitleImg />
                  <M.QnAImg />
                </M.TopMenuContainer>
                <M.QuizMain onClick={()=>navigate("/quiz")}/>
              </M.Middle>
            </M.QuizMainContainer>
          </M.PageContent>
        </M.Zindex>
      </React.Fragment>
    </div>
  );
};

export default QuizStart;
