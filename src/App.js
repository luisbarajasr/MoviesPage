import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'; 
import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=1618a299'; 


const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {

    const [movies, setMovies] = useState(); 

    const searchMovies = async(title) => {
        const response = await fetch(` ${API_URL}&s=${title}`);  //calling API
        const data = await response.json(); 

        setMovies(data.Search); 
    }

    useEffect(() => {
        searchMovies('Spiderman'); 
    }, [] ); 

    return(
        <div className="app">
             
            <h1>Movies Zone</h1>  

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value="Superman" 
                    onChange={() => {}}
                />

                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick = {() => {}}
                />    
                
            </div>   

            { 
                movies?.length > 0 //if movies exists, then..
                    ? ( 
                        <div className="container"> 
                            <MovieCard movie1={movie1} /> 
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