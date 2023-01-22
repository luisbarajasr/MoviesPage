import React from "react";
{/* The custom component*/}
{/* When using React, the .jsx extension es prefereable */}
{/* The props is an object destructuring */}

const MovieCard = ( {movie1} ) => {
    return(
        
    <div className="movie">
        <div>
            <p>{movie1.Year}</p>
        </div>

        <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            {/* Mostrar el poster de la pelicula
                Si la pelicula tiene poster ? mostrar el poster : si no, mostrar poster default */}
        </div>

        <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
        </div>
    </div>
    )
}

export default MovieCard; 