import React, { useEffect, useState } from "react";
import Header from "../../../components/Common/Header/Header";
import SideBar from "../../../components/Common/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as M from "./GrapesStyle";

const Grapes = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [grapeData, setGrapeData] = useState([]);
  const [error, setError] = useState(null);
  const gpsId = 8; // GPS ID
  const gpId = 9; // Grape ID

  useEffect(() => {
    const fetchData = async () => {
      const storedToken = localStorage.getItem("accessToken");
      if (!storedToken) {
        console.error("Access token is missing");
        setError("로그인이 필요합니다.");
        return;
      }

      try {
        const response = await axios.get(
          `https://cheongfordo.kr/gps/${gpsId}`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        console.log("API Response:", response.data);

        if (response.data.status === 200) {
          setData(response.data.data);
        } else {
          setError(response.data.message);
        }

        // 포도알 데이터 요청
        const grapeResponse = await axios.get(
          `https://cheongfordo.kr/gp/${gpId}`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        console.log("Grape API Response:", grapeResponse.data);

        if (grapeResponse.data.status === 200) {
          setGrapeData(grapeResponse.data.data);
        } else {
          setError(grapeResponse.data.message);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("데이터를 가져오는 중 오류가 발생했습니다.");
      }
    };

    fetchData();
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
      <M.PageContent>
        <SideBar />
        <M.MainContent>
          <M.CenteredContent>
            <M.GrapesContainer>
              {data ? (
                <M.DataContainer>
                  <M.ContentContainer>
                    <M.GrapeImg />
                    <M.TextContainer>
                      <M.GrapeTitle>{data.gpsName}</M.GrapeTitle>
                      <M.Details>
                        <M.TimeText>{data.gpsTime}분</M.TimeText>
                        <M.Progress>
                          {data.gpCnt}/{data.gpCntMax} 진행완료
                        </M.Progress>
                      </M.Details>
                      <M.TagsContainer>
                        {data.gpsWork || data.gpsAgeGroup ? (
                          <>
                            {data.gpsWork && (
                              <M.Tag>{convertWorkToKorean(data.gpsWork)}</M.Tag>
                            )}
                            {data.gpsAgeGroup && (
                              <M.Tag>
                                {convertAgeGroupToKorean(data.gpsAgeGroup)}
                              </M.Tag>
                            )}
                          </>
                        ) : (
                          <M.Tag>태그 없음</M.Tag>
                        )}
                      </M.TagsContainer>
                      <M.GrapeExplanation>{data.gpsContent}</M.GrapeExplanation>
                    </M.TextContainer>
                  </M.ContentContainer>
                  <M.NextBtn onClick={() => navigate("/grapeseed")}>
                    다음 {">"}
                  </M.NextBtn>
                </M.DataContainer>
              ) : (
                <M.LoadingMessage>로딩 중...</M.LoadingMessage>
              )}
              <M.GrapeContainer>
                <M.TitleContainer>
                  <M.DetailGrapeImg />
                  <M.GrapeTextContainer>
                    <M.DetailGrapeTitle>
                      시작하기: 우리가 경제를 배워야하는 이유
                    </M.DetailGrapeTitle>
                    <M.DetailGrapeExplanation>
                      경제를 알아보기 전에 국가에서 실시하는 나이별 경제
                      제도를...
                    </M.DetailGrapeExplanation>
                  </M.GrapeTextContainer>
                </M.TitleContainer>
                <M.DetailBtnContainer>
                  <M.NextBtn onClick={() => navigate("/grapeseed")}>
                    다음 {">"}
                  </M.NextBtn>
                </M.DetailBtnContainer>
                <M.SequenceContainer>
                  <M.SequenceText>목차</M.SequenceText>
                  {grapeData.length > 0 ? (
                    grapeData.map((grape, index) => (
                      <M.DataContainer key={grape.gpseId}>
                        <M.GrapeInfoContainer>
                          <M.SmallGrapeTitle>{`${index + 1}. ${
                            grape.gpseNm
                          }`}</M.SmallGrapeTitle>
                          <M.Details>
                            <M.TimeText>{grape.gpseTm}분</M.TimeText>
                            <M.EndOrNot>
                              {grape.gpseTF ? "완료" : "미완료"}
                            </M.EndOrNot>
                          </M.Details>
                        </M.GrapeInfoContainer>
                      </M.DataContainer>
                    ))
                  ) : (
                    <M.LoadingMessage>
                      포도알 데이터 로딩 중...
                    </M.LoadingMessage>
                  )}
                </M.SequenceContainer>
              </M.GrapeContainer>
              <M.GrapeContainer>
                <M.TitleContainer>
                  <M.DetailGrapeImg />
                  <M.GrapeTextContainer>
                    <M.DetailGrapeTitle>
                      10대 - 주니어 투자상품 (청소년 주식 계좌)
                    </M.DetailGrapeTitle>
                    <M.DetailGrapeExplanation>
                      주니어 투자 상품이란?
                    </M.DetailGrapeExplanation>
                  </M.GrapeTextContainer>
                </M.TitleContainer>
                <M.DetailBtnContainer>
                  <M.NextBtn onClick={() => navigate("/grapeseed")}>
                    다음 {">"}
                  </M.NextBtn>
                </M.DetailBtnContainer>
                <M.SequenceContainer>
                  <M.SequenceText>목차</M.SequenceText>
                  {grapeData.length > 0 ? (
                    grapeData.map((grape, index) => (
                      <M.DataContainer key={grape.gpseId}>
                        <M.GrapeInfoContainer>
                          <M.SmallGrapeTitle>{`${index + 1}. ${
                            grape.gpseNm
                          }`}</M.SmallGrapeTitle>
                          <M.Details>
                            <M.TimeText>{grape.gpseTm}분</M.TimeText>
                            <M.EndOrNot>
                              {grape.gpseTF ? "완료" : "미완료"}
                            </M.EndOrNot>
                          </M.Details>
                        </M.GrapeInfoContainer>
                      </M.DataContainer>
                    ))
                  ) : (
                    <M.LoadingMessage>
                      포도알 데이터 로딩 중...
                    </M.LoadingMessage>
                  )}
                </M.SequenceContainer>
              </M.GrapeContainer>
            </M.GrapesContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Grapes;
