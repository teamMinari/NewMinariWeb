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

  useEffect(() => {
    const NOTION_ID = "bd165f2a0d8a4f78b3cb23aab9eb8fa8";
    axios.get(`http://localhost:3001/notion?notion=${NOTION_ID}`).then((res) => {
      console.log(res.data);
      setSomething(res.data);
      console.log(something);
    });
  }, []);

  const navigate = useNavigate();

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
                {
                  something ?
                  <NotionRenderer recordMap={something} /> :
                  <div>hi</div>
                }
                <Editer></Editer>
                <M.NextBtn onClick={() => {
                      navigate("/grapeseed");
                    }}>다음으로 {">"}</M.NextBtn>
              </M.ContentContainer>
            </M.GrapeSeedContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default GrapeSeed;