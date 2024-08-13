import React, { useState, useEffect } from "react";
import * as M from "../../styles/TermMeaningStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import loading from "../../assets/image/loading.svg";
import SimpleNews from "../Home/SimpleNews";


const TermMeaning = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  const dummyData = {
    title: "가계부실위험지수(HDRI)",
    detail: `가구의 소득 흐름은 물론 금융 및 실물 자산까지 종합적으로 고려하여 가계부채의 부실위험을 평가하는 지표로, 가계의 채무상환능력을 소득 측면에서 평가하는 원리금상 환비율(DSR; Debt Service Ratio)과 자산 측면에서 평가하는 부채/자산비율(DTA; Debt To Asset Ratio)을 결합하여 산출한 지수이다. 가계부실위험지수는 가구의 DSR과 DTA가 각각 40%, 100%일 때 100의 값을 갖도록 설정되어 있으며, 동 지수가 100을 초과하는 가구를 ‘위험가구’로 분류한다. 위험가구는 소득 및 자산 측면에서 모두 취약한 ‘고위험가구’, 자산 측면에서 취약한 ‘고DTA가구’, 소득 측면에서 취약한 ‘고DSR가구’로 구분할 수 있다. 다만 위험 및 고위험 가구는 가구의 채무상환능력 취약성 정도를 평가하기 위한 것이며 이들 가구가 당장 채무상환 불이행, 즉 임계상황에 직면한 것을 의미하지 않는다.`,
  };

  // query 상태를 설정합니다. 초기값은 dummyData.title의 값을 문자열로 설정합니다.
  const [query, setQuery] = useState(dummyData.title);

  // dummyData.title 값이 변경될 때마다 query 상태를 업데이트합니다.
  useEffect(() => {
    setQuery(dummyData.title);
  }, [dummyData.title]);


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

  return (
    <React.Fragment>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <Sidebar />
        <M.MainContent>
          <M.CenteredContent>
            <SearchBar />
            <M.DictionaryContainer>
              <M.TermText>{dummyData.title}</M.TermText>
              <M.TermExplanation>
                {dummyData.detail}
              </M.TermExplanation>
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
                  <SimpleNews query={query}></SimpleNews>
              </M.News>
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
                <h2>가계부실위험지수(HDRI)</h2>
                <p>
                  가계부실위험지수(HDRI)는 가구들이 빚을 갚는 능력을 평가하는
                  지표입니다.
                  <br />이 지표는 가구의 소득과 자산을 고려하여 만들어졌어요.
                  소득 측면에서는 원리금 상환 비율(DSR)이라는 것을 보고, 자산
                  측면에서는 부채와 자산의 비율(DTA)을 봐요. 이 두 가지를
                  결합하여 HDRI를 계산합니다. <br />
                  만약에 가구의 DSR과 DTA가 각각 40%와 100%라면, HDRI는 100이
                  됩니다. HDRI가 100을 넘는 가구는 '위험가구'로 분류돼요. 이
                  가구들은 소득과 자산 측면에서 모두 취약하거나 그 중 하나에서
                  취약한 경우로 나뉘어요. <br />
                  하지만 이런 위험가구나 고위험가구라고 해서 바로 채무 불이행을
                  의미하지는 않아요. 이 지수는 단지 가구들의 채무상환 능력이
                  얼마나 취약한지를 평가하는 도구에 불과해요.
                </p>
              </>
            ) : (
              <div className="loading-container">
                <img src={loading} alt="Loading..." />
                <div className="loading-text">현재 <span className="blue-text">인공지능</span>이 해당 용어의 해설을 불러오고 있어요!</div>
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TermMeaning;
