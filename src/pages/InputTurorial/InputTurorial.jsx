import React, { useState, useEffect } from "react";
import * as M from "./InputTurorialStyle";
import Header from "../../components/Common/Header/Header";
import Sidebar from "../../components/Common/Sidebar/Sidebar";
import axios from "axios";

const InputTutorial = () => {
  useEffect(() => {
    const fetchTerms = async (page = 0, size = 20) => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          throw new Error("인증 토큰이 없습니다.");
        }

        axios.post("http://localhost:3000/user/login",
            {
                
            },
            { "Content-Type": "application/json", withCredentials: true },)
            .then((res) => {
                console.log(res);
                console.log(res.data.data.accessToken);
                localStorage.setItem("accessToken", res.data.data.accessToken);
                console.log("성공");
                if(res.data.data.accessToken) {
                    localStorage.setItem("accessToken", res.data.data.accessToken);
                }
                // 작업 완료 되면 페이지 이동(새로고침)
                    return window.location.replace("/");
                })
                .catch((error) => {
                    console.log(error);
                    alert("아이디와 비밀번호를 확인해 주세요.");
                    });
      } catch (error) {
        console.error("용어를 가져오는 중 오류 발생:", error);
      }
    };

    fetchTerms();
  }, []);


  return (
    <React.Fragment>
      {/* <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <Sidebar />
        <M.MainContent>
          <input type=""></input>
        </M.MainContent>
      </M.PageContent> */}
    </React.Fragment>
  );
};

export default InputTutorial;