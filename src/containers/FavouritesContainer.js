import React from "react";
import FavouritesList from "../components/FavouritesList";

const FavouritesContainer = ({ favourites, clearFavourites }) => {

  return (
    <div className="favourites-container">
      <FavouritesList favourites={favourites} clearFavourites={clearFavourites}/>
    </div>
  );
};

export default FavouritesContainer;
