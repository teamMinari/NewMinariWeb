import React from 'react';
import * as M from "./TipStyle";
import * as G from "../../pages/News/NewsGlobalStyles";

const Tip = () => {
    return (
        <M.ContainerElement>
            <M.Tabs>
                <M.Tab>단어장</M.Tab>
                <M.HorizontalLine />
                <M.Tab>뉴스</M.Tab>
                <M.HorizontalLine />
                <M.Tab>퀴즈</M.Tab>
                <M.HorizontalLine />
                <M.Tab>튜토리얼</M.Tab>
            </M.Tabs>
            <M.UnderLine></M.UnderLine>
            <G.TitleText>청포도 사용팁</G.TitleText>
            <M.ImgContainer>
                <M.NewsBanner />
            </M.ImgContainer>
        </M.ContainerElement>
    );
};

export default Tip;