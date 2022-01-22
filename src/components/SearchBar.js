import React from "react";

const SearchBar = ({ updateInput, setSearchWord, setSearchResults }) => {

  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateInput()
    setSearchResults(true)
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
          // key="search-bar"
          className="input"
          placeholder={"find a chuck norris joke"}
          onChange={handleChange}
        />
        <button type="submit">search</button>
      </form>
  );
};

export default SearchBar;
