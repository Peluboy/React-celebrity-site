import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ placeholder, users, setSearchResults }) {
  const [searchUsername, setSearchUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultsArray = users.filter((user) =>
      user.login.username.includes(searchUsername)
    );
    setSearchResults(resultsArray);
    console.log("Search Results:", resultsArray);
  };

  const handleSearchChange = (e) => {
    setSearchUsername(e.target.value);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          value={searchUsername}
          onChange={handleSearchChange}
        />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      <div className="dataResult"></div>
    </form>
  );
}

export default SearchBar;
