import * as M from "./GrapesStyle";
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import SideBar from "../../../components/Sidebar/Sidebar";

import { useNavigate } from "react-router-dom";

const Grapes = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Header />
      <M.PageContent>
        <SideBar/>
        <M.MainContent>
          <M.CenteredContent>
            <M.GrapesContainer>
              <M.EconomiStartImg></M.EconomiStartImg>
              <M.NextBtn onClick={() => {navigate("/grapeseed");}}>다음으로 {">"}</M.NextBtn>
            </M.GrapesContainer>
            <M.GrapesImg></M.GrapesImg>
            <M.GrapesImg></M.GrapesImg>
            <M.GrapesImg></M.GrapesImg>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Grapes;