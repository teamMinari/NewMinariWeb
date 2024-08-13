import React, { useState } from "react";
import * as M from "../../styles/SearchBarStyle";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("검색어:", searchTerm);
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <M.Bar>
        <M.SearchInput
          type="text"
          placeholder="용어를 검색해주세요."
          value={searchTerm}
          onChange={onChange}
          onKeyDown={handleKeyPress}
        />
        <M.SearchIcon onClick={handleSearch} />
      </M.Bar>
    </div>
  );
};

export default SearchBar;
