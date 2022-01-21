import React from "react";

const Joke = ({ joke }) => {

  return (
  <div className="joke">
    {joke.value}
  </div>
  )
};

export default Joke;
