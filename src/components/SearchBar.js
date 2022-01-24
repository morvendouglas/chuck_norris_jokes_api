import React from "react";

const SearchBar = ({ updateInput, setSearchWord, setSearchResults }) => {

  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    updateInput();
    setSearchResults(true);

    var myform = document.getElementById('myform');
    myform.onsubmit = function(){
    document.getElementById('myInput').value = "";

    };

  };

  return (
      <form onSubmit={handleSubmit} id="myform">
        <input
          name= "input"
          className="input"
          id="myInput"
          placeholder={"find a chuck norris joke"}
          onChange={handleChange}
        />
        <button type="submit">search</button>
      </form>
  );
};

export default SearchBar;