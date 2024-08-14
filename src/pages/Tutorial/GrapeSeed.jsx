import * as M from "./GrapeSeedStyle";
import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/Sidebar";

const GrapeSeed = () => {
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
                <M.PageText>소개</M.PageText>
                <M.TimeText>2분</M.TimeText>
                <M.ContentText>
                  경제란 무엇일까요?
                  <br />
                  <br />
                  경제란 인간의 공동생활을 위한 물적 기초가 되는 재화와 용역을
                  생산 · 분배 · 소비하는 활동과 그것을 통하여 형성되는
                  사회관계의 총체를 가리키는 용어입니다.{" "}
                  <M.StyledLink
                    href="https://encykorea.aks.ac.kr/Article/E0002781"
                    target="blank"
                  >
                    [1]
                  </M.StyledLink>
                  <br />
                  <br />
                  쉽게 말하면 경제란 돈의 흐름 그 자체라고 할 수 있습니다.
                  <br />
                  <br />
                  자본주의 사회의 정부는 정부가 지원하는 나이별 혜택을
                  제공합니다. <br />
                  <br />• 청년 도약 계좌{" "}
                  <M.StyledLink
                    href="https://ylaccount.kinfa.or.kr/main"
                    target="blank"
                  >
                    [2]
                  </M.StyledLink>
                  <br />• ISA 계좌{" "}
                  <M.StyledLink
                    href="https://obank.kbstar.com/quics?page=C041164#loading"
                    target="blank"
                  >
                    [3]
                  </M.StyledLink>
                  <br />• 부모 급여 / ISA계좌 ..etc
                  <br />
                  <br />
                  이렇게 많은 제도들을 활용하여 돈을 저축하기만 하는것이 아니라
                  현명하게 불릴 수 있는 능력이 있어야 합니다. <br />
                  <br />
                  이번 포도송이 에서는 경제에 대한 기본지식도 배우지만, 뱡금
                  같은 예시처럼 스스로 자산을 운용할 수 있는 기초지식을 중점으로
                  다룹니다.
                </M.ContentText>
                <M.NextBtn>다음으로 {">"}</M.NextBtn>
              </M.ContentContainer>
            </M.GrapeSeedContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default GrapeSeed;