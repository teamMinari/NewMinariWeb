import React, { useEffect, useState } from "react";
import * as M from "./TutoirialStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Spline from "@splinetool/react-spline";
import Tip from "../../components/UseTip/Tip";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Tutoirial = () => {
  const navigate = useNavigate();
  const [tutorialData, setTutorialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTutorialData = async () => {
      const storedToken = localStorage.getItem("accessToken");
      if (!storedToken) {
        console.error("Access token is missing");
        setError("로그인이 필요합니다.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("https://cheongfordo.kr/gps", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        console.log(response.data);

        if (response.data.data && response.data.data.length > 0) {
          setTutorialData(response.data.data);
        } else {
          throw new Error("데이터가 없습니다.");
        }
      } catch (error) {
        console.error("Error fetching tutorial data:", error);
        setError("데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchTutorialData();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>오류 발생: {error}</div>;
  }

  return (
    <React.Fragment>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <Sidebar />
        <M.MainContainer>
          <M.SplineContainer>
            <Spline scene="https://prod.spline.design/Oa1VFOafi9SRLdG1/scene.splinecode" />
            <M.AbsoultButton
              onClick={() => {
                navigate("/newnotion");
              }}
            >
              튜토리얼 설명서 보기
            </M.AbsoultButton>
          </M.SplineContainer>
          <M.VerticalContainer>
            <M.FirstTutorial>
              <M.TextContainer>
                <M.TutorialTitle>경제 시작하기</M.TutorialTitle>
                <M.TutorialExplanation>
                  경제를 실용적으로 배우기 위해 이론보단 실습으로 적용할 수 있는
                  경제 지식을 알아봅니다.
                </M.TutorialExplanation>
              </M.TextContainer>
              <M.TutorialRoute
                onClick={() => {
                  navigate("/grapes");
                }}
              />
            </M.FirstTutorial>
            <Tip />
          </M.VerticalContainer>
          <M.GrapesContainer
            onClick={() => {
              navigate("/grapes");
            }}
          >
            {tutorialData.map((tutorial) => (
              <M.TutorialCard key={tutorial.gpsId}>
                <M.TutorialTitle>{tutorial.gpsName}</M.TutorialTitle>
                <M.ContentText>{tutorial.gpsContent}</M.ContentText>
                <M.TimeText>시간: {tutorial.gpsTime}분</M.TimeText>
                <M.ContentText>
                  좋아요: {tutorial.gpsLike ? "YES" : "NO"}
                </M.ContentText>
                <M.ContentText>
                  연령대: {tutorial.gpsAgeGroup || "데이터 없음"}
                </M.ContentText>
                <M.ContentText>
                  직업: {tutorial.gpsWork || "데이터 없음"}
                </M.ContentText>
              </M.TutorialCard>
            ))}
          </M.GrapesContainer>
        </M.MainContainer>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Tutoirial;
