import React, { useState, useEffect } from "react";
import * as M from "./DictionaryStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Term from "../../components/Term/Term";
import axios from "axios";

const Dictionary = () => {
  const [terms, setTerms] = useState([]);
  const [filteredTerms, setFilteredTerms] = useState([]);
  const token = String(localStorage.getItem("accessToken"));

  useEffect(() => {
    const fetchTerms = async (page = 0, size = 20) => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          throw new Error("인증 토큰이 없습니다.");
        }

        const response = await axios.get(
          "http://cheongfordo.kr:8080/terms",
          {
            params: { page, size },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

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

  // const [filteredTerms, setFilteredTerms] = useState(terms);
  // const [selectedTag, setSelectedTag] = useState(null);
  const [selectedTxt, setSelectedTxt] = useState("가나다순");
  const [maxChars, setMaxChars] = useState(60);

  const handleSearch = (searchTerm) => {
    const filtered = terms.filter((term) =>
      term.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTerms(filtered);
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
    setSelectedTxt(txt)
  };

  const renderExplanation = (text) => {
    return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
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
              {filteredTerms.length > 0 ? (
                filteredTerms.map((term, index) => (
                  <Term
                    key={index}
                    title={term.title}
                    explanation={renderExplanation(term.explanation)}
                    difficulty={term.difficulty}
                  />
                ))
              ) : (
                <M.NoTermsFound>용어를 찾을 수 없습니다.</M.NoTermsFound>
              )}
            </M.DictionaryContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Dictionary;
