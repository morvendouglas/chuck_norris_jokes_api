import React from "react";
import FavouritesList from "../components/FavouritesList";

const FavouritesContainer = ({ favourites, clearFavourites }) => {

  return (
    <>
      <h1>Favourites</h1>
      <div className="favourites-list">
      <FavouritesList favourites={favourites} clearFavourites={clearFavourites}/>
      </div>
    </>
  );
};

export default FavouritesContainer;
