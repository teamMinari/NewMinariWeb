import React from "react";
import * as M from "../../../styles/HomeStyle/HomeStyle";
import WordComponents from "./wordComponents";

const RecommendWord = () => {
  return (
    <M.RecommendWordContainer>
      <M.PageText>오늘의 추천 경제 단어</M.PageText>
      <M.WordSpace>
        <WordComponents txt="주택담보대출" score={2} />
        <WordComponents txt="서비스 수지" score={3} />
        <WordComponents txt="핀테크" score={1} />
        <WordComponents txt="금융안정지수" score={3} />
        <WordComponents txt="내부자금" score={2} />
        <WordComponents txt="가계부실위험지수" score={3} />
      </M.WordSpace>
    </M.RecommendWordContainer>
  );
};

export default RecommendWord;
