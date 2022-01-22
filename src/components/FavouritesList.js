import React from 'react';

const FavouritesList = ({ favourites, clearFavourites }) => {


    const favouritesList = favourites.map((favourite, index) => {
        return <li value={index} key={index}>&#9829; &nbsp; {favourite}</li>
    })

    const handleClearClick = () => {
        clearFavourites()
    }

        return (
            <>
            <ul>{favouritesList}</ul>
            <button onClick={handleClearClick} className="sticky-button">clear favourites</button>
            </>
        )

}

export default FavouritesList; 