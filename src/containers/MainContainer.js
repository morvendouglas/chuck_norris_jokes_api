import React, { useState, useEffect } from "react";
import JokesContainer from "./JokesContainer";
import FavouritesContainer from "./FavouritesContainer";
import SearchResults from "../components/SearchResults";

const MainContainer = () => {

  const [joke, setJoke] = useState([]);
  const [random, setRandom] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [searchJokes, setSearchJokes] = useState([]);
  const [searchResults, setSearchResults] = useState(false);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("my-favourites");
    if (data) {
      setFavourites(JSON.parse(data));
    }
  }, []);

  const fetchAJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data));
  };

  const handleClick = () => {
    setSearch(false);
    setRandom(true);
    setSearchResults(false);
    fetchAJoke();
  };

  const handleSearchClick = () => {
    setRandom(false);
    setSearch(true);
  };

  const updateInput = () => {
    fetch(
      "https://api.chucknorris.io/jokes/search?query=" +
        searchWord.toLowerCase()
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchJokes(data);
      });
  };

  useEffect(() => {
    localStorage.setItem("my-favourites", JSON.stringify(favourites));
  });

  const clearFavourites = () => {
    let tempArr = [];
    setFavourites(tempArr);
  };

  return (
    <div className="container">

    <div className="child-1">
        <h1>Chuck Norris Jokes</h1>
        <button onClick={handleClick}>GET RANDOM JOKE</button>
        <button onClick={handleSearchClick} className="search-button">SEARCH FOR A JOKE</button>
      <div  className="random" >
        {random === true ? <JokesContainer joke={joke} favourites={favourites} setFavourites={setFavourites}/> : null}
      </div>
      <div className="search">
        {search === true ? (
          <SearchResults
            updateInput={updateInput}
            setSearchWord={setSearchWord}
            searchJokes={searchJokes}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
        ) : null}
      </div>
      </div>

      <div className="child-2">
      <div className='favourites'>
      <FavouritesContainer
        favourites={favourites}
        clearFavourites={clearFavourites}
      />
      </div>
      </div>
      </div>
  );
};

export default MainContainer;
