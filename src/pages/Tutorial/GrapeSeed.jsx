import * as M from "./GrapeSeedStyle";
import React, { useEffect, useState } from "react";
import Header from "../../components/Common/Header/Header";
import SideBar from "../../components/Common/Sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NotionRenderer } from "react-notion-x";


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
              <M.ContentContainer>
              </M.ContentContainer>
            </M.GrapeSeedContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default GrapeSeed;
