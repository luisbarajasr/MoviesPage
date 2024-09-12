import React from "react";
import { useState } from "react";

{/* The custom component*/}
{/* When using React, the .jsx extension es prefereable */}
{/* The props is an object destructuring */}

const MovieCard = ( {movie, onClick} ) => {

    const [showDescription, setShowDescription] = useState(false);

    const handleCardClick = () => {
        setShowDescription(!showDescription); // Toggle the description visibility
    };

    return(
        
    <div className="movie" onClick={handleCardClick}>
        <div>
            <p>{movie.Year}</p>
        </div>

        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
        </div>
        <div className="movie-info">
                <h3>{movie.Title}</h3>
                <span>{movie.Director}</span>
        </div>
        {showDescription && (
            <div className="description">
                <p>{movie.Plot}</p>
            </div>
        )}
    </div>
    )
}

export default MovieCard; 