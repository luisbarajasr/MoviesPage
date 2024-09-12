import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'; 
import MovieCard from './MovieCard'


const App = () => {

    const [movies, setMovies] = useState(); 

    const [searhTerm, setSearchTerm] = useState(''); 

    const searchMovies = async(title) => {

        const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '90cda6f14cmshe048376683ad479p17948bjsn73915f5c89a9',
                'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setMovies(data); 
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div className="app">
             
            <h1>Movies Zone</h1>  

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searhTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick = {() => searchMovies(searhTerm)}
                />    
                
            </div>   
            { 
                movies?.length > 0 //if movies exists, then..
                    ? ( 
                        <div className="container"> 
                            {movies.map((movie)=> (
                                <MovieCard 
                                    key={movie.id} 
                                    movie={movie} 
                                />
                            ))}
                        </div>          
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }
        </div>
    ); 
}

export default App; 