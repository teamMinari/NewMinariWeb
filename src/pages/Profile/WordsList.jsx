import React from "react";
import * as M from "../../styles/WordsListStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Words from "../../components/Words/Words";
import { useState } from "react";

const WordsList = () => {
  const [maxChars, setMaxChars] = useState(60);

  const renderExplanation = (text) => {
    return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
  };
  return (
    <React.Fragment>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <Sidebar />
        <M.WordsContainer>
          <Words
            title="가계부실위험지수(HDRI)"
            explanation={renderExplanation(
              "가구의 소득 흐름은 물론 금융 및 실물 자산까지 종합적으로 고려하여 가계부채의 부실위험을 평가하는 지표로, 가계의 채무상환능력을 소득 측면에서 평가하는 원리금상 환비율(DSR; Debt Service Ratio)과 자산 측면에서 평가하는 부채/자산비율(DTA; Debt To Asset Ratio)을 결합하여 산출한 지수이다."
            )}
          />
          <Words
            title="가계수지"
            explanation={renderExplanation(
              "가정에서 일정 기간의 수입(명목소득)과 지출을 비교해서 남았는지 모자랐는지를 표시한 것을 가계수지(household's total income and expenditure)라 한다."
            )}
          />
        </M.WordsContainer>
      </M.PageContent>
    </React.Fragment>
  );
};

export default WordsList;
