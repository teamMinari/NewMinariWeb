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
                <M.ArticleImage src="https://via.placeholder.com/113x73" />
                <M.ArticleTextContainer>
                    <M.ArticleTitle href="#">부실채권 비율 1%대로 떨어져</M.ArticleTitle>
                    <M.ArticleDescription>
                        08월 27일  00:00
                    </M.ArticleDescription>
                </M.ArticleTextContainer>
            </M.Article>
            <M.Article>
                <M.ArticleImage src="https://via.placeholder.com/113x73" />
                <M.ArticleTextContainer>
                    <M.ArticleTitle href="#">부실채권 비율 1%대로 떨어져</M.ArticleTitle>
                    <M.ArticleDescription>
                        08월 27일  00:00
                    </M.ArticleDescription>
                </M.ArticleTextContainer>
            </M.Article>
            <M.Article>
                <M.ArticleImage src="https://via.placeholder.com/113x73" />
                <M.ArticleTextContainer>
                    <M.ArticleTitle href="#">부실채권 비율 1%대로 떨어져</M.ArticleTitle>
                    <M.ArticleDescription>
                        08월 27일  00:00
                    </M.ArticleDescription>
                </M.ArticleTextContainer>
            </M.Article>
        </M.ContainerElement>
    );
};

export default RecommendElement;