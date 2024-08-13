import React from "react";
import * as M from "../../styles/MyWordsStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import BasicList from "../../components/BasicList/BasicList";
import { Link } from "react-router-dom";

const MyWords = () => {
  return (
    <React.Fragment>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <Sidebar />
        <M.WordContainer>
          <M.ContainerTxt>내 단어장</M.ContainerTxt>
          <BasicList />
          <Link to="/dictionary" style={{textDecoration: "none"}}>
            <M.MoreWords>
              <M.MoreText>용어 더 담으러 가기 〉</M.MoreText>
            </M.MoreWords>
          </Link>
        </M.WordContainer>
      </M.PageContent>
    </React.Fragment>
  );
};

export default MyWords;
