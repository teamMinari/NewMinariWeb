import React from "react";
import * as M from "../ProfileStyle";
import useProfile from "../../../Hooks/Profile/useProfile";
import { Link } from "react-router-dom";

const MyWord = () => {

  return (
    <M.MyWordsContainer to="/mywords">
      <M.PageText>내 단어장</M.PageText>
      <M.MyWordsIcon />
    </M.MyWordsContainer>
  );
};

export default MyWord;