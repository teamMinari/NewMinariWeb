import React from 'react';
import * as M from "./CompanyElementStyle";
import * as G from "../NewsGlobalStyles";

const CompanyElement = () => {
    return (
        <M.ContainerElement>
            <M.TextContainer>
                <G.TitleText>언론사별 뉴스</G.TitleText>
                <G.More>더보기</G.More>
            </M.TextContainer>
                <M.NewsCompanyContainer>
                    <M.News1Image 
                        onClick={() => window.open("https://www.mk.co.kr/")}
                    ></M.News1Image>
                    <M.News2Image
                        onClick={() => window.open("https://ytn.co.kr/")}
                    ></M.News2Image>
                    <M.News3Image></M.News3Image>
                    <M.News4Image></M.News4Image>
                    <M.News1Image></M.News1Image>
                    <M.News2Image></M.News2Image>
                    <M.News3Image></M.News3Image>
                    <M.News4Image></M.News4Image>
                </M.NewsCompanyContainer>
        </M.ContainerElement> 
    );
};

export default CompanyElement;