import React from 'react';
import * as M from "./TutoirialStyle";
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Spline from "@splinetool/react-spline";
import Tip from '../../components/UseTip/Tip';
import { useNavigate } from "react-router-dom";

const Tutoirial = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <Header />
            <M.GlobalStyles />
            <M.PageContent>
                <Sidebar />
                <M.MainContainer>
                    <M.SplineContainer>
                        <Spline scene="https://prod.spline.design/Oa1VFOafi9SRLdG1/scene.splinecode" />
                        <M.AbsoultButton onClick={() => {
                      navigate("/newnotion");
                    }}>튜토리얼 설명서 보기</M.AbsoultButton>
                    </M.SplineContainer>
                    <M.VerticalContainer>
                        <M.FirstTutorial>
                            <M.ExampleTutorial onClick={() => {
                      navigate("/grapes");
                    }}></M.ExampleTutorial>
                        </M.FirstTutorial>
                        <Tip />
                    </M.VerticalContainer>
                </M.MainContainer>
            </M.PageContent>
        </React.Fragment>
    );
};

export default Tutoirial;