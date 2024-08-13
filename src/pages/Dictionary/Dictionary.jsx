import React, { useState } from "react";
import * as M from "../../styles/DictionaryStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Term from "../../components/Term/Term";

const Dictionary = () => {
  const [terms, setTerms] = useState([
    {
      title: "가계부실위험지수(HDRI)",
      explanation:
        "가구의 소득 흐름은 물론 금융 및 실물 자산까지 종합적으로 고려하여 가계부채의 부실위험을 평가하는 지표로, 가계의 채무상환능력을 소득 측면에서 평가하는 원리금상 환비율(DSR; Debt Service Ratio)과 자산 측면에서 평가하는 부채/자산비율(DTA; Debt To Asset Ratio)을 결합하여 산출한 지수이다.",
      refer: "출처: 경제금융용어 700선",
    },
    {
      title: "외부자금",
      explanation:
        "기업은 투자나 운영자금을 기업내부 또는 기업외부에서 조달하는데 금융기관 차입금, 사채발행 등 기업외부에서 조달된 자금을 외부자금이라 한다.",
      refer: "출처: 경제금융용어 700선",
    },
    {
      title: "가산금리",
      explanation:
        "기준금리에 신용도 등의 차이에 따라 달리 덧붙이는 금리를 가산금리(또는 스프레드, spread)라고 한다. 예를 들어 은행이 대출금리를 결정할 때 고객의 신용위험에 따라 조달금리에 추가하는 금리를 말한다.",
      refer: "출처: 경제금융용어 700선",
    },
    {
      title: "무역지수",
      explanation:
        "일반적으로 거래금액의 변동은 가격이 변하거나 물량이 변하거나 또는 가격과 물량이 동시에 변하기 때문이다.",
      refer: "출처: 경제금융용어 700선",
    },
    {
      title: "생산세",
      explanation:
        "현재 국민계정 작성기준인 국민계정체계(SNA)에서는 조세를 크게 종전 간접세에 해당하는 생산세(taxes on production)와 소득・부 등에 대한 경상세, 자본세로 분류하고 있다.",
      refer: "출처: 경제금융용어 700선",
    },
    {
      title: "뱅크런",
      explanation:
        "은행의 대규모 예금인출사태를 가리키는 말이다. 금융시장 상황이 불안하거나 은행의 경영 및 건전성 등에 문제가 발생하면 예금자들은 은행에 맡긴 돈을 보장받을 수 없을 것이라는 불안감에 저축한 돈을 인출하게 되고 은행은 지급할 수 있는 자금이 부족하게 되어 패닉 상태에 빠질 수 있다.",
      refer: "출처: 경제금융용어 700선",
    },
    {
      title: "로렌츠곡선",
      explanation:
        "1905년 미국의 통계학자인 로렌츠(M. Lorenz)가 소득의 불평등 정도를 측정하기 위해 제안한 것으로, 인구의 누적비율을 가로축에 소득의 누적점유율을 세로축에 놓고 이들의 관계를 그림으로 표시한 곡선을 말한다.",
      refer: "출처: 경제금융용어 700선",
    },
    {
      title: "우발전환사채(코코본드)",
      explanation:
        "우발전환사채(Contingent Convertible Bond)는 발행기관이 경영개선명령을 받거나 부실금융기관으로 지정될 경우 상각되거나 보통주로 전환되는 조건이 부가되어 있는 채권(조건부자본증권)을 말한다.",
      refer: "출처: 경제금융용어 700선",
    },
    {
      title: "총액결제시스템",
      explanation:
        "결제시스템에 참가하는 금융기관들의 지급액과 수취액을 상계시키지 않고 지급지시 건별로 그 지급지시의 금액(총액)을 결제하는 총액결제방식을 채택한 지급결제시스템을 말한다.",
      refer: "출처: 경제금융용어 700선",
    },
    {
      title: "콜시장",
      explanation:
        "콜(call)시장은 금융기관들이 일시적인 자금 과부족을 조절하기 위하여 상호간에 초단 기로 자금을 차입하거나 대여하는 시장이다.",
      refer: "출처: 경제금융용어 700선",
    },
    {
      title: "집단대출",
      explanation:
        "주택담보대출 중 신규분양, 재건축・재개발아파트 입주(예정)자 등 일정 자격요건을 갖춘 차주 집단을 대상으로 개별심사 없이 일괄승인방식으로 실행되는 여신을 말한다.",
      refer: "출처: 경제금융용어 700선",
    },
    {
      title: "지급준비제도",
      explanation:
        "중앙은행이 금융기관으로 하여금 예금 등과 같은 채무의 일정비율에 해당하는 금액을 중앙은행에 예치하도록 하는 제도이다.",
      refer: "출처: 경제금융용어 700선",
    },
  ]);

  const [filteredTerms, setFilteredTerms] = useState(terms);
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedTxt, setSelectedTxt] = useState("가나다순");
  const [maxChars, setMaxChars] = useState(150);

  const handleSearch = (searchTerm) => {
    const filtered = terms.filter((term) =>
      term.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTerms(filtered);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const handleTxtClick = (txt) => {
    setSelectedTxt(txt === selectedTxt ? null : txt);
    if (txt === "가나다순") {
      setFilteredTerms(
        [...filteredTerms].sort((a, b) => (a.title > b.title ? 1 : -1))
      );
    } else if (txt === "최신순") {
      setFilteredTerms(
        [...filteredTerms].sort((a, b) => (a.title < b.title ? 1 : -1))
      );
    }
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
            <SearchBar onSearch={handleSearch} />
            <M.DictionaryContainer>
              <M.PageText>경제 용어</M.PageText>
              <M.BtnContainer>
                <M.TagBtn
                  selected={selectedTag === "금융"}
                  onClick={() => handleTagClick("금융")}
                >
                  금융
                </M.TagBtn>
                <M.TagBtn
                  selected={selectedTag === "증권"}
                  onClick={() => handleTagClick("증권")}
                >
                  증권
                </M.TagBtn>
                <M.TagBtn
                  selected={selectedTag === "부동산"}
                  onClick={() => handleTagClick("부동산")}
                >
                  부동산
                </M.TagBtn>
                <M.TagBtn
                  selected={selectedTag === "글로벌 경제"}
                  onClick={() => handleTagClick("글로벌 경제")}
                >
                  글로벌 경제
                </M.TagBtn>
                <M.TagBtn
                  selected={selectedTag === "산업/재계"}
                  onClick={() => handleTagClick("산업/재계")}
                >
                  산업/재계
                </M.TagBtn>
              </M.BtnContainer>
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
              {filteredTerms.map((term, index) => (
                <Term
                  key={index}
                  title={term.title}
                  explanation={renderExplanation(term.explanation)}
                  refer={term.refer}
                />
              ))}
            </M.DictionaryContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Dictionary;
