import styled, { css } from "styled-components";

export const ContainerElement = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 280px;
  padding: 32px 40px;
  overflow: hidden;
  height: 310px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  grid-row-end: span 21;
  justify-content: center;
`;

export const QuizchoiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 5px;
`;

export const QuizChoice = styled.div`
    height: 35px;
    border: 1px solid #979797;
    padding: 0 23px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    font-size: 11px;
    justify-content: space-between;
    
`;

export const QuizRadio = styled.div`
    font-size: 3.7em; 
    display: inline-block;
    width: 0.13em;
    box-sizing: content-box;
    height: 0.13em;
    border: 0.1em solid #979797;
    position: relative;
    border-radius: 0.35em;
`;

export const QuizTxt = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: #979797;
`;

export const QuizTitleTxt = styled.div`
    font-size: 17px;
    font-weight: 900;
`;
