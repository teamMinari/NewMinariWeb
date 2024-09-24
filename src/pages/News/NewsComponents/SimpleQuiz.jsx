import React from 'react';
import * as M from "./SimpleQuizStyle";
import * as G from "../NewsGlobalStyles";
const SimpleQuiz = () => {
    return (
        <M.ContainerElement>
           <M.QuizTxt>Q.</M.QuizTxt>
           <M.QuizTitleTxt>주니어 투자 상품의 특징으로 올바른 것은?</M.QuizTitleTxt>
           <M.QuizchoiceContainer>
                <M.QuizChoice>
                    1. 수익률이 높다 
                    <M.QuizRadio type='radio'/>
                </M.QuizChoice>
                <M.QuizChoice>
                    2. 투자금액이 크다
                    <M.QuizRadio type='radio'/>
                </M.QuizChoice>
                <M.QuizChoice>
                    3. 투자기간이 길다
                    <M.QuizRadio type='radio'/>
                </M.QuizChoice>
           </M.QuizchoiceContainer>
        </M.ContainerElement>
    );
};
 
export default SimpleQuiz;