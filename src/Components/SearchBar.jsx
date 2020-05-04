import React, { useState } from "react";
import getBooks from "../functions/fetch";

const SearchBar = ({ udpateSearch }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="dont judge a book by its cover..."
        className="search-bar__input"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="search-bar__button"
        onClick={async () => {
          udpateSearch({ type: "search", payload: {search:searchText, result:await getBooks(searchText)} });
          setSearchText('');
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
