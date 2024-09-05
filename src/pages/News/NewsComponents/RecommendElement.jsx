import React from 'react';
import * as M from "./RecommendElementStyle";
import * as G from "../NewsGlobalStyles";

const RecommendElement = () => {
    return (
        <M.ContainerElement>
            <G.TitleText>추천 뉴스</G.TitleText>
            <M.Button>
                <M.ButtonText>
                    #부실채권비율
                </M.ButtonText>
            </M.Button>
            <M.Article>
                <M.ArticleTitle href="#">부실채권 비율 1%대로 떨어져</M.ArticleTitle>
                <M.ArticleDescription>
                    부실채권 비율이 1%대로 떨어졌다. 이에 대해 금융당국은 긍정적인 평가를 내놓았다.
                </M.ArticleDescription>
            </M.Article>
        </M.ContainerElement>
    );
};

export default RecommendElement;