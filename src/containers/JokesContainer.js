import React from "react";
import Joke from "../components/Joke";

const JokesContainer = ({ joke }) => {
  return (
    <div className="jokes-container">
        <Joke joke={joke} />
    </div>
  );
};

export default JokesContainer;
