import * as M from "./GrapeSeedStyle";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NotionRenderer } from "react-notion-x";
import Editer from "./Editer/Editer";

const GrapeSeed = () => {
  const [something, setSomething] = useState(null);
  const navigate = useNavigate();
  const gpseId = 24;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://cheongfordo.kr/gpse/24`);
        if (response.data && response.data.data) {
          const { data } = response.data;
          console.log("Fetched Data: ", data);
          setSomething(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <SideBar />
        <M.MainContent>
          <M.CenteredContent>
            <M.GrapeSeedContainer>
              <M.TopContainer>
                <M.PathContainer>
                  <M.Path>시작하기</M.Path>
                  <M.Path>/ 소개</M.Path>
                </M.PathContainer>
                <M.XpContainer>300XP</M.XpContainer>
              </M.TopContainer>
              <M.ContentContainer>
                <M.PageText>돈이 움직이는 세상 : 금리</M.PageText>
                <br />
                {something ? (
                  <NotionRenderer recordMap={something} />
                ) : (
                  <div>
                    금리는 청소년들이 이해하기 쉽게 말하자면,{" "}
                    <strong>돈을 빌리거나 맡길 때 주고받는 돈의 사용료</strong>
                    라고 생각하면 돼요. <br />두 가지 상황을 상상해볼게요:
                    <br />
                    <br />
                    <strong>1. 돈을 빌릴 때의 금리 (이자)</strong>
                    <br />
                    만약 친구에게 10,000원을 빌렸다고 생각해봐요. 친구가 "내가
                    돈을 빌려주니까 1,000원을 더해서 갚아줘"라고 말한다면, 이
                    1,000원이 바로 <strong>이자</strong>예요. 이처럼 돈을 빌릴
                    때는 그 돈을 사용한 대가로 조금 더 갚아야 하죠. 이때 돈을
                    빌린 비용을 <strong>금리</strong>라고 해요. 쉽게 말해,{" "}
                    <strong>돈을 빌리는 값</strong>이 금리예요. 금리가 높으면
                    빌린 돈보다 더 많이 갚아야 하고, 금리가 낮으면 덜 갚아도
                    돼요.
                    <br />
                    <br />
                    <strong>2. 돈을 맡길 때의 금리 (이자)</strong>
                    <br />
                    반대로 은행에 돈을 맡기면, 은행이 "우리가 너의 돈을 사용하고
                    이자를 줄게"라고 말해요. 예를 들어 10,000원을 은행에 맡기면
                    은행이 나중에 10,500원을 돌려줘요. 이 500원이 바로 은행이
                    나에게 주는 <strong>이자</strong>예요. 즉, 돈을 맡기면{" "}
                    <strong>은행이 내 돈을 사용한 대가</strong>로 금리를 주는
                    거예요. 금리가 높으면 더 많은 이자를 받을 수 있고, 금리가
                    낮으면 이자가 적어져요.
                    <br />
                    <br />
                    <strong>왜 금리가 중요할까?</strong>
                    <br />
                    <br />- <strong>물건을 살 때나 빌릴 때:</strong> 금리가
                    높아지면 사람들이 돈을 빌리기 부담스러워서 물건을 덜 사게
                    되고, 금리가 낮아지면 돈을 빌려서 물건을 더 많이 사게 돼요.
                    <br />
                    그래서 경제에 영향을 미치죠.
                    <br />
                    <br />- <strong>돈을 저축할 때:</strong> 금리가 높으면
                    은행에 돈을 맡기면 이자를 많이 받을 수 있기 때문에 사람들이
                    저축을 많이 하게 돼요. <br />
                    반대로 금리가 낮으면 저축보다는 돈을 써버리는 경우가 많아요.
                    금리는 이렇게 경제의 흐름을 결정짓는 중요한 요소랍니다.
                    <br />
                  </div>
                )}
                <M.EditorContainer>
                  <Editer />
                </M.EditorContainer>
                <M.NextBtn onClick={() => navigate("/grapeseed")}>
                  다음으로 {">"}
                </M.NextBtn>
              </M.ContentContainer>
            </M.GrapeSeedContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default GrapeSeed;
