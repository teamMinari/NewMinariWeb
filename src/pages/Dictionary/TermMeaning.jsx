import React, { useState, useEffect } from "react";
import * as M from "../../styles/TermMeaningStyle";
import Header from "../../components/Common/Header/Header";
import Sidebar from "../../components/Common/Sidebar/Sidebar";
import SearchBar from "../../components/Common/SearchBar/SearchBar";
import loading from "../../assets/image/loading.svg";
import Markdown from 'react-markdown';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";

import Spinner from "../Home/Spinner";

const TermMeaning = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [detail, setDetail] = useState("");
  const [term, setTerm] = useState(null);
  const navigate = useNavigate();
  // const { term, loading, error } = useTermDetail(query);
  const [searchParams, setSearchParams] = useSearchParams(); // 쿼리 스트링을 searchParams 형태로 가져오고
  const termId = searchParams.get('termId');

  useEffect(() => {
    if (!termId) {
      navigate("/dictionary");
      return;
    }
    const storedToken = localStorage.getItem("accessToken");
    if (!storedToken) return;

    axios.get(`${process.env.REACT_APP_SERVER_URL}/terms/${termId}`, {
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
      "responseType": "json",
    }).then((res) => res.data)
      .then((data) => {
        console.log(data);
        setTerm(data.data);
      })
      .catch((error) => {
        console.error("Error fetching term details:", error);
      });
  }, [termId]);

  const openModal = () => {
    setIsOpen(true);

    axios.get(`${process.env.REACT_APP_SERVER_URL}/termary/summarize/${term.termNm}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      responseType: "text"
    }).then((res) => res.data)
      .then((data) => {
        setDetail(data);
        setShowText(true);
      });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
            {term ?
            <M.DictionaryContainer>
              <M.TermText>{term.termNm}</M.TermText>
              <M.TermExplanation>{term.termExplain}</M.TermExplanation>
              <M.Container>
                <M.SimilarWord>
                  ► 연관검색어 : 총부채원리금상환비율(DSR)
                </M.SimilarWord>
                <M.EasyMeaningBtn onClick={openModal}>
                  쉬운 용어 풀이
                </M.EasyMeaningBtn>
              </M.Container>
            </M.DictionaryContainer>
            :
            <Spinner />}
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
              <Markdown>
                {detail}
              </Markdown>
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

