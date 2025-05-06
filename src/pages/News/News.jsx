import React from 'react';
import * as M from "./NewsStyle";
import Header from "../../components/Common/Header/Header";
import Sidebar from "../../components/Common/Sidebar/Sidebar"; 
import { useState,useEffect } from 'react';
import CompanyElement from './NewsComponents/CompanyElement';
import RecommendElement from './NewsComponents/RecommendElement';
import Tip from '../../components/UseTip/Tip'; // Add this import statement
import SimpleQuiz from './NewsComponents/SimpleQuiz';
import TutoralProgress from './NewsComponents/TutoralProgress';
import ChoiseTutorial from './NewsComponents/ChoiceTutorial';
import RecommendElement2 from './NewsComponents/RecommendElement2';
const News = ({ query }) => {
    const [selectedTag, setSelectedTag] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                // Fetch articles logic here
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };
        fetchArticles();
    }, [query]);

    const decodeHtml = (html) => {
        const text = document.createElement('textarea');
        text.innerHTML = html;
        return text.value;
    };

    const handleTagClick = (tag) => {
        setSelectedTag(tag === selectedTag ? null : tag);
    };

    return (
        <React.Fragment>
            <Header />
            <M.GlobalStyles />
            <M.PageContent>
                <Sidebar />
                <M.MainContent>
                    <M.MainContainer>
                        <CompanyElement />
                        <RecommendElement /> {/* TODO: react-masonry-css라이브러리 사용하여 리팩토링하기. CHATGPT에 예제 있으니까 참고해서 해보세요 */}
                        <Tip /> {/* Corrected component usage */}
                        <RecommendElement2 />
                        <TutoralProgress/>
                        <SimpleQuiz/>
                        <TutoralProgress/> 
                        <ChoiseTutorial/>
                    </M.MainContainer>
                </M.MainContent>
            </M.PageContent>
        </React.Fragment>
    );
};

export default News;



{/* <M.BtnContainer>
                        <M.TagBtn selected={selectedTag === "금융"}
                        onClick={() => handleTagClick("금융")}>금융</M.TagBtn>
                        <M.TagBtn selected={selectedTag === "증권"}
                        onClick={() => handleTagClick("증권")}>증권</M.TagBtn>
                        <M.TagBtn selected={selectedTag === "부동산"}
                        onClick={() => handleTagClick("부동산")}>부동산</M.TagBtn>
                        <M.TagBtn selected={selectedTag === "글로벌 경제"}
                        onClick={() => handleTagClick("글로벌 경제")}>글로벌 경제</M.TagBtn>
                        <M.TagBtn selected={selectedTag === "채권"}
                        onClick={() => handleTagClick("채권")}>채권</M.TagBtn>
                    </M.BtnContainer> 
                    <M.ContainerElement></M.ContainerElement>
                        <M.ContainerElement></M.ContainerElement>
                        <M.ContainerElement></M.ContainerElement>
                        <M.ContainerElement></M.ContainerElement>
                        <M.ContainerElement></M.ContainerElement>
                        <M.ContainerElement></M.ContainerElement>
                        <M.ContainerElement></M.ContainerElement>
                        <M.ContainerElement></M.ContainerElement>
                        <M.ContainerElement></M.ContainerElement>
                    */}
