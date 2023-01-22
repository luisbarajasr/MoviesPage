import React from "react";
{/* The custom component*/}
{/* When using React, the .jsx extension es prefereable */}
{/* The props is an object destructuring */}

const MovieCard = ( {movie} ) => {
    return(
        
    <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>

        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
            {/* Mostrar el poster de la pelicula
                Si la pelicula tiene poster ? mostrar el poster : si no, mostrar poster default */}
        </div>

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
    )
}

export default MovieCard; 