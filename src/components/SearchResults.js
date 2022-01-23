import React from "react";
import SearchBar from "./SearchBar";
import SearchJokesList from "./SearchJokesList";

const SearchResults = ({ setSearchWord, updateInput, setSearchResults, searchResults, searchJokes, clearSearchJokes, AddSearchJokeToFavourites }) => {


  return (
    <>
      <SearchBar setSearchWord={setSearchWord} updateInput={updateInput} setSearchResults={setSearchResults}/>
      <div>{searchResults === true ? <SearchJokesList searchJokes={searchJokes} clearSearchJokes={clearSearchJokes} AddSearchJokeToFavourites={AddSearchJokeToFavourites}/>  : null}</div>
    </>
  );
};

export default SearchResults;
