import React from "react";
import SearchBar from "./SearchBar";
import SearchJokesList from "./SearchJokesList";

const SearchResults = ({ setSearchWord, updateInput, searchJokes, searchResults, setSearchResults }) => {


  return (
    <>
      <SearchBar setSearchWord={setSearchWord} updateInput={updateInput} setSearchResults={setSearchResults}/>
      <div>{searchResults === true ? <SearchJokesList searchJokes={searchJokes} /> : null}</div>
    </>
  );
};

export default SearchResults;
