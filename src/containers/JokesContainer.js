import React from "react";
import Joke from "../components/Joke";

const JokesContainer = ({ joke, addToFavourites }) => {

  return (
    <div className="jokes-container">
        <Joke joke={joke} addToFavourites={addToFavourites}/>
    </div>
  );
};

export default JokesContainer;
