import React from "react";
import * as M from "../ProfileStyle";
import useProfile from "../../../Hooks/Profile/useProfile";

const MyPoint = () => {
  const { userData } = useProfile();
  return (
    <M.PointContainer>
      <M.TopTextContainer>
        <M.PageText>My 포인트</M.PageText>
        <M.GotoUse>사용하러 가기</M.GotoUse>
      </M.TopTextContainer>
      <M.PointText>{userData.point}P</M.PointText>
    </M.PointContainer>
  );
};

export default MyPoint;