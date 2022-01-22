import React from "react";

const Joke = ({ joke, favourites, setFavourites }) => {

  const handleFavouritesClick = () => {
    let newJoke = joke.value;
    let tempArr = [...favourites];
    if (tempArr.some((joke) => joke === newJoke) === false) {
      tempArr.push(newJoke);
    }
    setFavourites(tempArr);
  };

  return (
  <div  className="random" >
  <div>{joke.value}</div>
  <button onClick={handleFavouritesClick} className="favourite-button">&#9829; &nbsp; add to favourites</button>
  </div>
  )
};

export default Joke;
