import React from 'react';
import * as M from "./RecommendElementStyle";
import * as G from "../NewsGlobalStyles";
const RecommendElement = (ver1, ver2) => {
    return (
        <M.ContainerElement>
            <G.TitleText>추천 뉴스</G.TitleText>
            <M.Button>
                <M.ButtonText>
                    #부실채권비율
                </M.ButtonText>
            </M.Button>
            <M.Article>
                <M.ArticleImage src="https://picsum.photos/200/130?random=1" />
                <M.ArticleTextContainer>
                    <M.ArticleTitle href="#">부실채권 60조 '핵폭탄'‥1년 새 22조↑</M.ArticleTitle>
                    <M.ArticleDescription>
                        08월 27일  20:35
                    </M.ArticleDescription>
                </M.ArticleTextContainer>
            </M.Article>
            <M.Article>
                <M.ArticleImage src="https://picsum.photos/200/130?random=2`" />
                <M.ArticleTextContainer>
                    <M.ArticleTitle href="#">"대부분 담보채권인데"…보험사, 킥스 규제로 NPL 투자 못한다</M.ArticleTitle>
                    <M.ArticleDescription>
                        08월 17일  23:01
                    </M.ArticleDescription>
                </M.ArticleTextContainer>
            </M.Article>
            <M.Article>
                <M.ArticleImage src="https://picsum.photos/200/130?random=1`" />
                <M.ArticleTextContainer>
                    <M.ArticleTitle href="#">부실채권 비율 1%대로 떨어져</M.ArticleTitle>
                    <M.ArticleDescription>
                        08월 23일  02:23
                    </M.ArticleDescription>
                </M.ArticleTextContainer>
            </M.Article>
        </M.ContainerElement>
    );
};

export default RecommendElement;