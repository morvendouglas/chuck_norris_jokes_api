import React, { useState, useEffect } from "react";
import JokesContainer from "./JokesContainer";
import FavouritesContainer from "./FavouritesContainer";
import SearchResults from "../components/SearchResults";
import Joke from "../components/Joke";

const MainContainer = () => {

  const [joke, setJoke] = useState([]);
  const [random, setRandom] = useState(false);

  const [searchWord, setSearchWord] = useState("");
  const [searchJokes, setSearchJokes] = useState([]);
  const [search, setSearch] = useState(false);
  const [searchResults, setSearchResults] = useState(false);

  const [favourites, setFavourites] = useState([]);

  // random
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

  // search
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
        if (data.result) {
          let tempJokes = [];
          data.result.forEach((singleJoke) => {
            tempJokes.push(<Joke joke={singleJoke} key={singleJoke.id} />);
          });
          setSearchJokes(tempJokes);
        }
      });
  };

  const clearSearchJokes = () => {
    let tempArr = [];
    setSearchJokes(tempArr);
  };

  const AddSearchJokeToFavourites = (joke) => {
    let newJoke = joke;
    let tempArr = [...favourites];
    if (tempArr.some((joke) => joke === newJoke) === false) {
      tempArr.push(newJoke);
    }
    setFavourites(tempArr);

  }

  // favourites
  useEffect(() => {
    localStorage.setItem("my-favourites", JSON.stringify(favourites));
  });

  const addToFavourites = () => {
    let newJoke = joke.value;
    let tempArr = [...favourites];
    if (tempArr.some((joke) => joke === newJoke) === false) {
      tempArr.push(newJoke);
    }
    setFavourites(tempArr);
  };

  const clearFavourites = () => {
    let tempArr = [];
    setFavourites(tempArr);
  };

  return (
    <div className="container" data-testid="main-container-1">
      <div className="child-1">
        <h1>Chuck Norris Jokes</h1>
        <button onClick={handleClick}>GET RANDOM JOKE</button>
        <button onClick={handleSearchClick} className="search-button">
          SEARCH FOR A JOKE
        </button>
        <div className="random">
          {random === true ? (
            <JokesContainer
              joke={joke}
              addToFavourites={addToFavourites}
            />
          ) : null}
        </div>
        <div className="search">
          {search === true ? (
            <SearchResults
              updateInput={updateInput}
              setSearchWord={setSearchWord}
              searchJokes={searchJokes}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              clearSearchJokes={clearSearchJokes}
              setSearchJoke={setSearchJokes}
              AddSearchJokeToFavourites={AddSearchJokeToFavourites}
            />
          ) : null}
        </div>
      </div>

      <div className="child-2">
        <div className="favourites">
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
