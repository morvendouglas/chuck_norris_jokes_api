import React from "react";

const Joke = ({ joke, addToFavourites }) => {

  const handleFavouritesClick = () => {
    addToFavourites()
  };

  return (
  <div  className="random" >
  <div id="random-joke">{joke.value}</div>
  <button onClick={handleFavouritesClick} className="favourite-button"> add to favourites</button>
  </div>
  )
};

export default Joke;
