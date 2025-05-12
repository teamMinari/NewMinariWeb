import React from "react";
import * as M from "../ProfileStyle";
import { Link } from "react-router-dom";

const MiniStore = () => {
  return (
    <M.StoreContainer>
      <M.StoreInfo>
        <M.PageText>포인트 상점</M.PageText>
        <Link to="/">
          <M.RequestBtn>페이지 예시 보기</M.RequestBtn>
        </Link>
      </M.StoreInfo>
      <M.RequestContainer>
        <M.RequestIcon />
        <M.RequestText>아직 제작 중에 있는 기능이에요.</M.RequestText>
      </M.RequestContainer>
    </M.StoreContainer>
  );
};

export default MiniStore;
