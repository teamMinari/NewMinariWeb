import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dictionary from "../pages/Dictionary/Dictionary";
import SearchBar from "../components/SearchBar/SearchBar";
import Home from "../pages/Home/Home";
import TermMeaning from "../pages/Dictionary/TermMeaning";
import News from "../pages/News/News";
import Profile from "../pages/Profile/Profile";
import MyWords from "../pages/Profile/MyWords";
import WordsList from "../pages/Profile/WordsList";
import Quiz from "../pages/Quiz/Quiz";
import QuizStart from "../pages/Quiz/QuizStart";
import GrapeSeed from "../components/Tutorial/GrapeSeed";


const AppRouter = ({ openModal, closeModal, isOpen }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="/termmeaning" element={<TermMeaning />} />
        <Route path="/news" element={<News query={"경제"} />} />
        <Route path="/termmeaning" element={<TermMeaning openModal={openModal} closeModal={closeModal} isOpen={isOpen} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mywords" element={<MyWords />} />
        <Route path="/wordslist" element={<WordsList />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizstart" element={<QuizStart />} />
        <Route path="/grapeseed" element={<GrapeSeed />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
