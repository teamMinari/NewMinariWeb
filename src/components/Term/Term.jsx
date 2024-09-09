import React, { useState } from "react";
import * as M from "../../styles/TermStyle";
import { useNavigate } from "react-router-dom";

const Term = ({ title, explanation, difficulty }) => {
  const [selectedHeart, setSelectedHeart] = useState(false);
  const navigate = useNavigate();

  const handleHeartClick = () => {
    setSelectedHeart(!selectedHeart);
  };

  return (
    <div>
      <M.Container>
        <M.InfoContainer>
          <M.TermTxt onClick={() => navigate("/termmeaning")}>{title}</M.TermTxt>
          <M.HeartContainer selected={selectedHeart} onClick={handleHeartClick}>
            <M.HeartImg />
          </M.HeartContainer>
        </M.InfoContainer>
        <M.TermExplanation>{explanation}</M.TermExplanation>
        <M.DifficultyContainer>
          난이도: {difficulty}
        </M.DifficultyContainer>
      </M.Container>
    </div>
  );
};

export default Term;
