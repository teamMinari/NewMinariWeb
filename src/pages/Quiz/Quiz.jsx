import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import * as M from "./QuizStyle";

import { useState } from "react";

const questions = [
  {
    questionText:
      "은행예금이나 보험이 모두 저축을 목적으로 한다는 점에서는 똑같다.",
    correctAnswer: "X",
    explanation:
      "은행예금은 저축을 목적으로 하지만, 보험은 만약에 생길지도 모르는 사고위험에 대한 보장을 목적으로 합니다.",
  },
  {
    questionText:
      "주식시장에서 '투자자의 매수'가 매수자의 매도와 동일한 것이다.",
    correctAnswer: "X",
    explanation:
      "주식시장에서 투자자의 매수는 다른 투자자나 시장에서 주식을 구매하는 행위를 말하며, 이는 매수자의 매도와 반대 개념입니다. 매도자는 주식을 판매하는 쪽을 의미합니다.",
  },
  {
    questionText: "인플레이션이 상승할 경우, 돈의 구매력은 감소한다.",
    correctAnswer: "O",
    explanation:
      "인플레이션이 상승하면 물가가 상승하게 되어 돈의 구매력이 감소하는 경향이 있습니다.",
  },
  {
    questionText:
      "GDP는 국가 내에서 생산된 총 재화와 서비스의 가치를 측정하는 지표이다.",
    correctAnswer: "O",
    explanation:
      "GDP(Gross Domestic Product)는 국가 내에서 생산된 총 재화와 서비스의 시장 가치를 측정하는 주요 경제 지표입니다.",
  },
  {
    questionText:
      "투자는 보통 고정 자산을 효율적으로 사용하여 수익을 창출하는 것을 의미한다.",
    correctAnswer: "O",
    explanation:
      "투자는 자본을 고정 자산에 투자하여 추가적인 수익을 얻는 것을 의미합니다. 예를 들어, 부동산 투자는 고정 자산에 대한 일종의 투자입니다.",
  },
  {
    questionText: "경제 성장률이 0%일 때 경제는 침체 상태에 있다고 할 수 있다.",
    correctAnswer: "X",
    explanation:
      "경제 성장률이 0%라고 해서 반드시 침체 상태는 아닐 수 있습니다. 경제 성장률이 0%일 때에도 경제가 안정 상태일 수 있거나 다양한 경제적 활동이 균형 상태에 있을 수 있습니다.",
  },
  {
    questionText: "인플레이션은 경제 성장률을 증가시키는 요소 중 하나이다.",
    correctAnswer: "X",
    explanation:
      "인플레이션은 경제 성장률을 증가시키는 것이 아니라, 오히려 경제의 안정성과 가치를 저하시킬 수 있는 요소입니다.",
  },
  {
    questionText:
      "채권은 회사가 자본을 조달하기 위해 발행하는 유동성이 높은 자산이다.",
    correctAnswer: "X",
    explanation:
      "채권은 주로 정부나 기업이 자금을 조달하기 위해 발행하는 채무증권으로, 발행한 채권을 소지한 사람에게 일정 기간마다 이자를 지급하는 유동성이 낮은 자산입니다.",
  },
  {
    questionText: "헤지 기능은 주식시장에서만 중요한 개념이다.",
    correctAnswer: "X",
    explanation:
      "헤지 기능은 주식시장뿐만 아니라 환율, 원자재 등 여러 시장에서 중요한 개념으로, 위험 관리와 가격 변동으로부터 보호하는 데 사용됩니다.",
  },
  {
    questionText: "적정 경제성장률은 국가의 투자 환경에 따라 변하지 않는다.",
    correctAnswer: "X",
    explanation:
      "적정 경제성장률은 국가의 투자 환경과 경제 상황에 따라 변할 수 있습니다. 다양한 요인들이 경제 성장률을 결정하므로, 적정 성장률 역시 시간이 지나면서 변할 수 있습니다.",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // useState로 currentQuestion 추가
  const [score, setScore] = useState(0); // useState로 score 추가
  const [showResult, setShowResult] = useState(false); // useState로 showResult 추가

  const handleAnswer = (answer) => {
    // handleAnswer 함수 정의
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1); // 정답일 경우 점수 증가
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion); // 다음 질문으로 이동
    } else {
      setShowResult(true); // 결과 표시
    }
  };

  return (
    <div>
      <React.Fragment>
        <Header />
        <M.GlobalStyles />
        <M.PageContent>
          <M.FitContainer>
            <Sidebar />
          </M.FitContainer>
          <M.QuizContainer>
            {showResult ? ( // showResult가 true일 경우 결과 표시
              <>
                <M.StyledWowImg></M.StyledWowImg>
                <M.Result>
                  대단해요! <br /> 총 {score} / {questions.length} 문제를
                  맞췄어요!
                </M.Result>
                <M.Button style={{ textDecoration: "none" }} to="/">
                  돌아가기
                </M.Button>
              </>
            ) : (
              // showResult가 false일 경우 질문 표시
              <>
                <M.QuizNumContainer>
                  <M.QuizNum>
                    Q {String(currentQuestion + 1).padStart(2, "0")}
                  </M.QuizNum>
                </M.QuizNumContainer>
                <M.Question>
                  {questions[currentQuestion].questionText}
                </M.Question>
                <M.OXButton>
                  <M.OButton>
                    <M.StyledOColor onClick={() => handleAnswer("O")}></M.StyledOColor>
                    <M.StyledOImg />
                  </M.OButton>
                  <M.XButton>
                    <M.StyledXColor onClick={() => handleAnswer("X")}></M.StyledXColor>
                    <M.StyledXImg />
                  </M.XButton>
                </M.OXButton>
              </>
            )}
            <M.CenterdContent></M.CenterdContent>
          </M.QuizContainer>
        </M.PageContent>
      </React.Fragment>
    </div>
  );
};

export default Quiz;
