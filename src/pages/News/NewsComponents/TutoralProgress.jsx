import React from 'react';
import * as M from "./TutoralProgressStyle";
import * as G from "../NewsGlobalStyles";

const TutoralProgress = () => {
    return (
        <M.ContainerElement>
            <G.TitleText>포도송이</G.TitleText>
            <M.VerticalContainer>
                <M.TitleVerticalContainer>
                    <M.BunchOfGrapesBlueTitle>경제 시작하기</M.BunchOfGrapesBlueTitle>
                    <M.BunchOfGrapesTitle>우리가 경제를 배워야하는 이유</M.BunchOfGrapesTitle>
                </M.TitleVerticalContainer>
                <M.GrapesLocketImg />
            </M.VerticalContainer>
            <M.VerticalContainer>
                <M.LearnBtn>학습하기</M.LearnBtn>
            </M.VerticalContainer>
        </M.ContainerElement>
    );
};

export default TutoralProgress; 