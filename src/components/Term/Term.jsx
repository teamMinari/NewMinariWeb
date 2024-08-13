import React, { useState } from "react";
import * as M from "../../styles/TermStyle";
import { useNavigate } from "react-router-dom";

const Term = ({ title, explanation, refer }) => {
  const [selectedHeart, setSelectedHeart] = useState(false);
  const navigation = useNavigate();

  const handleHeartClick = () => {
    setSelectedHeart(!selectedHeart);
  };

  return (
    <div>
      <M.Container>
        <M.InfoContainer>
          <M.TermTxt onClick={() => navigation("/termmeaning")}>{title}</M.TermTxt>
          <M.HeartContainer selected={selectedHeart} onClick={handleHeartClick}>
            <M.HeartImg />
          </M.HeartContainer>
        </M.InfoContainer>
        <M.TermExplanation>{explanation}</M.TermExplanation>
        <M.ReferContainer>
          <M.ReferTxt onClick={() => window.open("https://www.bok.or.kr/portal/bbs/B0000249/view.do?nttId=235017&menuNo=200765")}>{refer}</M.ReferTxt>
        </M.ReferContainer>
      </M.Container>
    </div>
  );
};

export default Term;
