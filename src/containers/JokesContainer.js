import React from "react";
import Joke from "../components/Joke";

const JokesContainer = ({ joke, favourites, setFavourites }) => {

  return (
    <div className="jokes-container">
        <Joke joke={joke} favourites={favourites} setFavourites={setFavourites}/>
    </div>
  );
};

export default JokesContainer;
