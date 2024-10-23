import React, { useState, useEffect } from "react";
import * as M from "./DictionaryStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Term from "../../components/Term/Term";
import axios from "axios";
import * as gvar from "../../common/global_variables";
import Spinner from '../Home/Spinner';
import { useNavigate } from "react-router-dom"; // react-router-dom 추가

const Dictionary = () => {
  const [terms, setTerms] = useState([]);
  const [filteredTerms, setFilteredTerms] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [termsPerPage] = useState(13);
  const token = String(localStorage.getItem("accessToken"));
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    const fetchTerms = async (page = 0, size = 400) => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          throw new Error("인증 토큰이 없습니다.");
        }

        const response = await axios.get(`${gvar.SERVER_URL}/terms`, {
          params: { page, size },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.data.data.length > 0) {
          const formattedTerms = response.data.data.map((term) => ({
            title: term.termNm,
            explanation: term.termExplain,
            difficulty: term.termDifficulty,
          }));
          setTerms(formattedTerms);
          setFilteredTerms(formattedTerms);
        } else {
          console.error(
            "용어 목록을 가져오지 못했습니다:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("용어를 가져오는 중 오류 발생:", error);
      }
    };

    fetchTerms();
  }, []);

  const [selectedTxt, setSelectedTxt] = useState("가나다순");
  const [maxChars, setMaxChars] = useState(60);

  const handleSearch = (searchTerm) => {
    const filtered = terms.filter((term) =>
      term.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTerms(filtered);
    setCurrentPage(0);
  };

  const handleTxtClick = (txt) => {
    const sortedTerms = [...filteredTerms].sort((a, b) => {
      if (txt === "가나다순") {
        return a.title > b.title ? 1 : -1;
      } else if (txt === "최신순") {
        return a.title < b.title ? 1 : -1;
      }
      return 0;
    });
    setFilteredTerms(sortedTerms);
    setSelectedTxt(txt);
    setCurrentPage(0);
  };

  const renderExplanation = (text) => {
    return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
  };

  // 현재 페이지의 용어 목록을 가져오는 함수
  const currentTerms = filteredTerms.slice(
    currentPage * termsPerPage,
    (currentPage + 1) * termsPerPage
  );

  const totalPages = Math.ceil(filteredTerms.length / termsPerPage);

  const handleTermClick = (term) => {
    // 용어 클릭 시 TermMeaning으로 네비게이션
    navigate(`/term-meaning`, { state: { term } });
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
              <SearchBar onSearch={handleSearch} />
            </M.SearchBarContainer>
            <M.RecommendWords>
              <M.PageText>오늘의 경제 단어</M.PageText>
              <M.BtnContainer>
                <M.WordsBtn bgColor="#91C1FA">주택담보대출</M.WordsBtn>
                <M.WordsBtn bgColor="#F6A6B8">서비스수지</M.WordsBtn>
                <M.WordsBtn bgColor="#66D1A2">내부자금</M.WordsBtn>
                <M.WordsBtn bgColor="#B1A1F1">가계부실위험지수</M.WordsBtn>
                <M.WordsBtn bgColor="#FA9C92">금융안정지수</M.WordsBtn>
                <M.WordsBtn bgColor="#F6A6B8">핀테크</M.WordsBtn>
                <M.WordsBtn bgColor="#FA9C92">금융안정지수</M.WordsBtn>
                <M.WordsBtn bgColor="#66D1A2">환율조작국</M.WordsBtn>
                <M.WordsBtn bgColor="#91C1FA">주택담보대출</M.WordsBtn>
                <M.WordsBtn bgColor="#B1A1F1">가계부실위험지수</M.WordsBtn>
                <M.WordsBtn bgColor="#F6A6B8">서비스수지</M.WordsBtn>
                <M.WordsBtn bgColor="#F6A6B8">실망실업자</M.WordsBtn>
              </M.BtnContainer>
            </M.RecommendWords>
            <M.DictionaryContainer>
              <M.PageText>경제 용어</M.PageText>
              <M.TextContainer>
                <M.TextSort
                  selected={selectedTxt === "가나다순"}
                  onClick={() => handleTxtClick("가나다순")}
                >
                  • 가나다순
                </M.TextSort>
                <M.TextSort
                  selected={selectedTxt === "최신순"}
                  onClick={() => handleTxtClick("최신순")}
                >
                  • 최신순
                </M.TextSort>
              </M.TextContainer>
              {currentTerms.length > 0 ? (
                currentTerms.map((term, index) => (
                  <Term
                    title={term.title}
                    explanation={renderExplanation(term.explanation)}
                    difficulty={term.difficulty}
                    onClick={() => handleTermClick(term)} // 클릭 이벤트 핸들러 추가
                  />
                ))
              ) : (
                <Spinner/>
              )}
              <M.PaginationContainer>
                <M.PaginationButton
                  disabled={currentPage === 0}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  이전
                </M.PaginationButton>
                <span>{`${currentPage + 1} / ${totalPages}`}</span>
                <M.PaginationButton
                  disabled={currentPage === totalPages - 1}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  다음
                </M.PaginationButton>
              </M.PaginationContainer>
            </M.DictionaryContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Dictionary;
