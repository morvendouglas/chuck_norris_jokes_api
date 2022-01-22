import React from "react";

const SearchJokesList = ({ searchJokes }) => {
    
  console.log(searchJokes, "search jokes");

  //   const jokesList = searchJokes.map(({result}) => {
  //     return <li key={result}>{result.value}</li>
  // })

  return (
    <>
      {/* <ul>{jokesList}</ul> */}
      <button>CLEAR RESULTS</button>
    </>
  );
};

export default SearchJokesList;
