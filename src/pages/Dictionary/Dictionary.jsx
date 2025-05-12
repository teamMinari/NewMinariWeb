import React, { useState, useEffect } from "react";
import * as M from "./DictionaryStyle";
import Header from "../../components/Common/Header/Header";
import Sidebar from "../../components/Common/Sidebar/Sidebar";
import SearchBar from "../../components/Common/SearchBar/SearchBar";
import Term from "../../components/Term/Term";
import customAxios from "../../utils/customAxios";
import Spinner from "../Home/Spinner";
import { useNavigate } from "react-router-dom";

const Dictionary = () => {
  const [terms, setTerms] = useState([]);
  const [filteredTerms, setFilteredTerms] = useState([]);
  const [recommendedTerms, setRecommendedTerms] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [termsPerPage] = useState(13);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem("lastColorUpdatedDate");

    // 만약 저장된 날짜가 오늘이 아니면 색상 정보를 새로 생성
    if (storedDate !== today) {
      const newColors = ["#91C1FA", "#F6A6B8", "#66D1A2", "#B1A1F1", "#FA9C92"];
      localStorage.setItem("colorScheme", JSON.stringify(newColors));
      localStorage.setItem("lastColorUpdatedDate", today);
    }
  }, []);

  const colors = JSON.parse(localStorage.getItem("colorScheme")) || [
    "#91C1FA",
    "#F6A6B8",
    "#66D1A2",
    "#B1A1F1",
    "#FA9C92",
  ];

  useEffect(() => {
    const fetchTerms = async (page = 0, size = 400) => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          throw new Error("인증 토큰이 없습니다.");
        }

        const response = await customAxios.get(`/terms`, {
          params: { page, size },
        });

        if (response.data.data.length > 0) {
          const formattedTerms = response.data.data.map((term) => ({
            termId: term.termId,
            title: term.termNm,
            explanation: term.termExplain,
            difficulty: term.termDifficulty,
          }));
          setTerms(formattedTerms);
          setFilteredTerms(formattedTerms);

          const today = new Date().toDateString();
          const storedDate = localStorage.getItem("lastUpdatedDate");

          // 오늘 날짜에 추천 용어를 새로 설정
            if (storedDate !== today || !localStorage.getItem("recommendedTerms")) {
            const shuffled = [...formattedTerms].sort(
              () => 0.5 - Math.random()
            );
            // recommendedTerms에 termId도 함께 저장
            const recommended = shuffled.slice(0, 12).map(term => ({
              termId: term.termId,
              title: term.title,
              explanation: term.explanation,
              difficulty: term.difficulty,
            }));
            setRecommendedTerms(recommended.slice(0, 10));
            localStorage.setItem(
              "recommendedTerms",
              JSON.stringify(recommended)
            );
            localStorage.setItem("lastUpdatedDate", today);
            } else {
            const storedTerms = JSON.parse(
              localStorage.getItem("recommendedTerms")
            );
            if (storedTerms) {
              setRecommendedTerms(storedTerms.slice(0, 14));
            }
          }
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

  const currentTerms = filteredTerms.slice(
    currentPage * termsPerPage,
    (currentPage + 1) * termsPerPage
  );

  const totalPages = Math.ceil(filteredTerms.length / termsPerPage);

  const handleTermClick = (term) => {
    navigate(`/termmeaning?termId=${term.termId}`);
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
                {recommendedTerms.length > 0 ? (
                  recommendedTerms.map((term, index) => (
                    <M.WordsBtn
                      key={index}
                      // 버튼 색상은 localStorage에 저장된 색상을 기반으로 고정
                      bgColor={colors[index % colors.length]}
                      onClick={() => handleTermClick(term)}
                    >
                      {term.title}
                    </M.WordsBtn>
                  ))
                ) : (
                <Spinner />
              )}
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
                currentTerms.map((term) => (
                  <Term
                    termId={term.termId}
                    title={term.title}
                    explanation={renderExplanation(term.explanation)}
                    difficulty={term.difficulty}
                    onClick={() => handleTermClick(term)}
                  />
                ))
              ) : (
                <Spinner />
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
