import React from "react";
import * as M from "../../components/Profile/ProfileStyle";
import Header from "../../components/Common/Header/Header";
import Sidebar from "../../components/Common/Sidebar/Sidebar";
import ProfileInfo from "../../components/Profile/ProfileInfo/ProfileInfo";
import MyPoint from "../../components/Profile/MyPoint/MyPoint";
import MyWord from "../../components/Profile/MyWord/MyWord";
import MiniStore from "../../components/Profile/MiniStore/MiniStore";

const Profile = () => {
  return (
    <React.Fragment>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <Sidebar />
        <M.MainContent>
          <M.CenteredContent>
            <ProfileInfo />
            <M.boxContainer>
              <MyPoint />
              <MyWord />
            </M.boxContainer>
            <MiniStore />
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Profile;
