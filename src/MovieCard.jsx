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
            <img src={movie.big_image } alt={movie.Title}/>            
        </div>
        <div key={movie.id}>
            <span>{movie.Type}</span>
            <h3>{movie.title}</h3>
        </div>
        {showDescription && (
            <div>
                <h3>{movie.description}</h3>
            </div>
        )}
    </div>
    )
}

export default MovieCard; 