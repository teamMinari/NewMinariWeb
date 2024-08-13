import * as M from "../../styles/HomeStyle/WordStyle";
import React, { useState } from 'react';

const StarInARow = ({ count }) => {
  const stars = [...Array(count)].map((_, index) => <M.starImg key={index} />);
  return <>{stars}</>;
};

const WordComponents = ({ txt, score }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <M.wordContainer>
      <M.text>{txt}</M.text>
      <M.starsContainer>
        <StarInARow count={score} />
      </M.starsContainer>
      <M.likeButton onClick={toggleLike}>
        <M.likeIcon liked={liked} />
      </M.likeButton>
    </M.wordContainer>
  );
};

export default WordComponents;
