import React, { useState, useEffect } from "react";
import JokesContainer from "./JokesContainer";
import FavouritesContainer from "./FavouritesContainer";

const MainContainer = () => {
  const [joke, setJoke] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const fetchAJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data));
  };
  useEffect(() => {
    fetchAJoke();
  }, []);

  const handleClick = () => {
    fetchAJoke();
  };

  // need to change so cant add joke you already have
  const handleFavouritesClick = () => {
    let j = joke.value;
    let tempArr = [...favourites];
    tempArr.push(j);
    setFavourites(tempArr);
  };

  const clearFavourites = () => {
      let tempArr = [];
      setFavourites(tempArr);
  }



  return (
    <main className="main">
      <h1>Chuck Norris Jokes</h1>
      <button onClick={handleClick}>GET RANDOM JOKE</button>
      <JokesContainer joke={joke} />
      <button onClick={handleFavouritesClick}>ADD TO FAVOURITES</button>
      <FavouritesContainer favourites={favourites} clearFavourites={clearFavourites}/>
    </main>
  );
};

export default MainContainer;
