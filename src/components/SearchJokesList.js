import React from "react";

const SearchJokesList = ({ searchJokes, clearSearchJokes, AddSearchJokeToFavourites }) => {

  const handleClearClick = () => {
    clearSearchJokes()
}


  const jokesList = searchJokes.map((joke, index) => {
    return <li value={index} key={index} className="search-joke">{joke.props.joke.value}<div><button className="favourite-button" onClick={()=>{AddSearchJokeToFavourites(joke.props.joke.value)}}>add to favourites</button></div></li>
})
   
  return (
    <>
      <div>{jokesList}</div>
      <button onClick={handleClearClick} className="clear-results">clear results</button>
    </>
  );
}

export default SearchJokesList;
