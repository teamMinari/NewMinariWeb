import React from 'react';
import * as M from "./NewsStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar"; 
import SearchBar from '../../components/SearchBar/SearchBar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from '../Home/Spinner';
import CompanyElement from './NewsComponents/CompanyElement';
import RecommendElement from './NewsComponents/RecommendElement';


const News = ({ query }) => {
    const [selectedTag, setSelectedTag] = useState(null);

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3001/search/news', {
                    params: { query }
                });
                setArticles(response.data.items);
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
                <Sidebar/>
                <M.MainContainer>
                        <CompanyElement></CompanyElement>
                        <RecommendElement></RecommendElement>
                </M.MainContainer>
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
