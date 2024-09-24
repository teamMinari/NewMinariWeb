import React from 'react';
import * as M from "./RecommendElementStyle2";
import * as G from "../NewsGlobalStyles";
const RecommendElement2 = () => {
    return (
        <M.ContainerElement>
            <G.TitleText>추천 뉴스</G.TitleText>
            <M.Button>
                <M.ButtonText>
                    #하이퍼 인플레이션
                </M.ButtonText>
            </M.Button>
            <M.Article>
                <M.ArticleImage src="https://picsum.photos/200/130?random=3" />
                <M.ArticleTextContainer>
                    <M.ArticleTitle href="#">2024년 미국배당 투자에 대한 생각 feat. 하이퍼 인플레이션</M.ArticleTitle>
                    <M.ArticleDescription>
                        02월 27일  23:03
                    </M.ArticleDescription>
                </M.ArticleTextContainer>
            </M.Article>
            <M.Article>
                <M.ArticleImage src="https://picsum.photos/200/130?random=4`" />
                <M.ArticleTextContainer>
                    <M.ArticleTitle href="#">하이퍼인플레 세대' 리처드 클라리다…</M.ArticleTitle>
                    <M.ArticleDescription>
                        09월 27일  00:35
                    </M.ArticleDescription>
                </M.ArticleTextContainer>
            </M.Article>
            <M.Article>
                <M.ArticleImage src="https://picsum.photos/200/130?random=5`" />
                <M.ArticleTextContainer>
                    <M.ArticleTitle href="#">2024년 미국배당 투자에 대한 생각</M.ArticleTitle>
                    <M.ArticleDescription>
                        08월 15일  03:53
                    </M.ArticleDescription>
                </M.ArticleTextContainer>
            </M.Article>
        </M.ContainerElement>
    );
};

export default RecommendElement2;