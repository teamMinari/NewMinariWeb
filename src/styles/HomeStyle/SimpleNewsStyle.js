import styled from 'styled-components';
export const SimpleNewsContainer = styled.div`
    max-height: 800px;
    overflow-y: auto;
`;

export const SimpleNewsCenterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; // 중앙 정렬
`;

export const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

export const Article = styled.div`
    margin: 10px 0;
    display: flex;
    .imgContainer{
        position: relative;
        object-fit: cover;
        margin-right: 10px;
        height: 80px;
    }
`;

export const ArticleText = styled.div`
    
`;

export const ArticleTitle = styled.a`
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const ArticleDescription = styled.p`
    font-size: 1em;
    color: #666;
    padding: 0;
`;

export const ArticleImage = styled.img`
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;

`;

export const NewsImg = styled.img` 
    object-fit: cover;
`;
