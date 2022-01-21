import React from 'react';

const FavouritesList = ({ favourites, clearFavourites }) => {


    const favouritesList = favourites.map((favourite, index) => {
        return <li value={index} key={index}>{favourite}</li>
    })

    const handleClearClick = () => {
        clearFavourites()
    }

        return (
            <div className='favourites-list'>
            <ul>{favouritesList}</ul>
            <button onClick={handleClearClick}>Clear Favourites</button>
            </div>
        )

}

export default FavouritesList; 