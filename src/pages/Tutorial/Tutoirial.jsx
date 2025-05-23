import React, { useEffect, useState } from "react";
import * as M from "./TutoirialStyle";
import Header from "../../components/Common/Header/Header";
import Sidebar from "../../components/Common/Sidebar/Sidebar";
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

  const convertWorkToKorean = (workCode) => {
    switch (workCode) {
      case "MEMBEROFSOCIETY":
        return "사회 초년생";
      case "OFFICIAL":
        return "공무원";
      case "EMPLOYEE":
        return "회사원";
      case "BUSINESSMAN":
        return "사업가";
      default:
        return "기타";
    }
  };

  const convertAgeGroupToKorean = (ageGroup) => {
    switch (ageGroup) {
      case "TEENS":
        return "10대";
      case "TWENTIES":
        return "20대";
      case "THIRTIES":
        return "30대";
      default:
        return ageGroup;
    }
  };

  return (
    <React.Fragment>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <Sidebar />
        <M.MainContainer>
          <M.CenterdContent>
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
                    경제를 실용적으로 배우기 위해 이론보단 실습으로 적용할 수
                    있는 경제 지식을 알아봅니다.
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
                  <M.TextContainer>
                    <M.TutorialTitle>{tutorial.gpsName}</M.TutorialTitle>
                    <M.ContentText>{tutorial.gpsContent}</M.ContentText>
                    <M.TimeText>{tutorial.gpsTime}분</M.TimeText>
                    <M.TagsContainer>
                      {tutorial.gpsWork || tutorial.gpsAgeGroup ? (
                        <>
                          {tutorial.gpsWork && (
                            <M.Tag>
                              {convertWorkToKorean(tutorial.gpsWork)}
                            </M.Tag>
                          )}
                          {tutorial.gpsAgeGroup && (
                            <M.Tag>
                              {convertAgeGroupToKorean(tutorial.gpsAgeGroup)}
                            </M.Tag>
                          )}
                        </>
                      ) : (
                        <M.Tag>태그 없음</M.Tag>
                      )}
                    </M.TagsContainer>
                  </M.TextContainer>
                </M.TutorialCard>
              ))}
            </M.GrapesContainer>
          </M.CenterdContent>
        </M.MainContainer>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Tutoirial;
