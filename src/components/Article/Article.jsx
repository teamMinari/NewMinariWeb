import React from 'react';
import * as M from "./ArticleStyle";

const Article = () => {
    return (
        <>
            <M.ArticleContainer>
                <M.ArticleImage src="https://www.mk.co.kr/news/economy/11115716" />
                <M.ArticleTextContainer>
                    <M.ArticleTitle href="#">부실채권 비율 1%대로 떨어져</M.ArticleTitle>
                    <M.ArticleDescription>
                        08월 27일  00:00
                    </M.ArticleDescription>
                </M.ArticleTextContainer>
            </M.ArticleContainer>
        </>
    );
};

export default Article;