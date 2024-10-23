import React, { useState, useEffect } from "react";
import * as M from "../../styles/TermMeaningStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import loading from "../../assets/image/loading.svg";
import SimpleNews from "../Home/SimpleNews";
import axios from "axios";
import * as gvar from "../../common/global_variables";

const TermMeaning = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [termData, setTermData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);
  const termId = 22;

  const token = String(localStorage.getItem("accessToken"));

  useEffect(() => {
    if (termId) {
      const fetchTermData = async () => {
        setLoadingData(true);
        try {
          const response = await axios.get(
            `${gvar.SERVER_URL}/terms/${termId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.data.status === 0) {
            setTermData(response.data.data);
            openModal();
          } else {
            throw new Error(response.data.message);
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoadingData(false);
        }
      };

      fetchTermData();
    } else {
      setError("Invalid term ID");
    }
  }, [token, termId]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (loadingData) {
    return (
      <div className="loading-container">
        <img src={loading} alt="Loading..." />
        <div className="loading-text">데이터를 불러오는 중입니다...</div>
      </div>
    );
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
        <M.MainContent>
          <M.CenteredContent>
            <M.SearchBarContainer>
              <SearchBar />
            </M.SearchBarContainer>
            <M.DictionaryContainer>
              {termData && (
                <>
                  <M.TermText>{termData.termNm}</M.TermText>
                  <M.TermDifficulty>난이도: {termData.termDifficulty}</M.TermDifficulty>
                  <M.TermExplanation>{termData.termExplain}</M.TermExplanation>
                  <M.Container>
                    <M.SimilarWord>
                      ► 연관검색어 : 총부채원리금상환비율(DSR)
                    </M.SimilarWord>
                    <M.EasyMeaningBtn onClick={openModal}>
                      쉬운 용어 풀이
                    </M.EasyMeaningBtn>
                  </M.Container>
                  <M.RelatedNews>► 관련 기사&사건</M.RelatedNews>
                  <M.News>
                    <SimpleNews query={termData.termNm}></SimpleNews>
                  </M.News>
                </>
              )}
            </M.DictionaryContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {showText ? (
              <>
                <h2>{termData.termNm}</h2>
                <p>{termData.termExplain}</p>
              </>
            ) : (
              <div className="loading-container">
                <img src={loading} alt="Loading..." />
                <div className="loading-text">
                  현재 <span className="blue-text">인공지능</span>이 해당 용어의
                  해설을 불러오고 있어요!
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TermMeaning;
