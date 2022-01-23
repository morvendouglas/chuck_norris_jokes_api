import React from "react";

const SearchBar = ({ updateInput, setSearchWord, setSearchResults }) => {

  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    updateInput()
    setSearchResults(true)
  };

  // would like to figure out how to put search input as "" when submitted if i have time

  return (
      <form onSubmit={handleSubmit}>
        <input
          name= "input"
          className="input"
          placeholder={"find a chuck norris joke"}
          onChange={handleChange}
        />
        <button type="submit">search</button>
      </form>
  );
};

export default SearchBar;