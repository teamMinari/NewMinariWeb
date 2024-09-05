import styled, { createGlobalStyle, css } from "styled-components";


export const ContainerElement = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 280px;
  padding: 22px 21px;
  overflow: hidden;
  height: 400px;
`;

export const Button = styled.button`
  margin-top: 15px;
  border-radius: 50px;
  padding: 13px 10px;
  height: 30px;
  width: 100px;
  background-color: #363CD5;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.div`
  font-size: 11px;
  font-weight: 800;
  color: #ffffff;
`;

export const Article = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
`;

export const ArticleTitle = styled.a`
    font-size: 14px;
    font-weight: bold;
    color: #333;

    &:hover {
        text-decoration: underline;
    }
    
`;

export const ArticleDescription = styled.p`
    font-size: 12px;
    color: #666;
    margin-top: 5px;

    padding: 0;
`;

export const ArticleImage = styled.img`
    max-width: 100%;
    margin-bottom: 10px;
`;