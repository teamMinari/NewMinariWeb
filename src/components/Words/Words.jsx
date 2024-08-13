import React from "react";
import * as M from "../../styles/WordsStyle";
import { useState } from "react";

const Words = ({ title, explanation }) => {
  const [selectedHeart, setSelectedHeart] = useState(true);

  const handleHeartClick = () => {
    setSelectedHeart(!selectedHeart);
  };
  return (
    <React.Fragment>
      <M.WordsContainer>
        <M.InfoContainer>
          <M.TermTxt>{title}</M.TermTxt>
          <M.HeartContainer selected={selectedHeart} onClick={handleHeartClick}>
            <M.HeartImg />
          </M.HeartContainer>
        </M.InfoContainer>
        <M.TermExplanation>{explanation}</M.TermExplanation>
      </M.WordsContainer>
    </React.Fragment>
  );
};

export default Words;
