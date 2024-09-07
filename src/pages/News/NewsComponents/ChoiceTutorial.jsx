import React from 'react';
import * as M from "./ChoiceTutorialStyle";
import * as G from "../NewsGlobalStyles";

const ChoiceTutorial = () => {
    return (
        <M.ContainerElement>
            <G.TitleText>경제뉴스 보는 방법</G.TitleText>
            <M.ImgContainer>
                <M.Newstutorial1/>
                <M.Newstutorial2/>
                <M.Newstutorial3/>
            </M.ImgContainer>
        </M.ContainerElement>
    );
};

export default ChoiceTutorial;