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
  const gpsId = 1;

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

  return (
    <React.Fragment>
      <Header />
      <M.PageContent>
        <SideBar />
        <M.MainContent>
          <M.CenteredContent>
            <M.GrapesContainer>
              {error && <M.ErrorMessage>{error}</M.ErrorMessage>}
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
                            {data.gpsWork && <M.Tag>{data.gpsWork}</M.Tag>}
                            {data.gpsAgeGroup && (
                              <M.Tag>{data.gpsAgeGroup}</M.Tag>
                            )}
                          </>
                        ) : (
                          <M.Tag>태그 없음</M.Tag>
                        )}
                      </M.TagsContainer>
                      <M.GrapeExplanation>{data.gpsContent}</M.GrapeExplanation>
                    </M.TextContainer>
                  </M.ContentContainer>
                </M.DataContainer>
              ) : (
                <M.LoadingMessage>로딩 중...</M.LoadingMessage>
              )}
              {/* GrapeContainer 추가 */}
              <M.GrapeContainer>
                {/* 여기에 GrapeContainer의 내용 추가 가능 */}
                {/* 예: <p>추가 내용</p> */}
              </M.GrapeContainer>
            </M.GrapesContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Grapes;
