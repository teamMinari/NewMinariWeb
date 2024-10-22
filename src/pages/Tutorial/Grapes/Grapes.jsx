import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import SideBar from "../../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as M from "./GrapesStyle";

const Grapes = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const gpsId = 8;

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
                  <M.NextBtn>다음 {">"}</M.NextBtn>
                </M.DataContainer>
              ) : (
                <M.LoadingMessage>로딩 중...</M.LoadingMessage>
              )}
              <M.GrapeContainer></M.GrapeContainer>
            </M.GrapesContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Grapes;
