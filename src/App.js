import React from "react";
import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'; 

const API_URL = 'http://www.omdbapi.com?apikey=1618a299'; 

const App = () => {

    const searchMovies = async(title) => {
        const response = await fetch(` ${API_URL}&s=${title}`);  //calling API
        const data = await response.json(); 

        console.log(data.Search); 
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
                    value="Enter movie name..." 
                    onChange={() => {}}
                />

                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick = {() => {}}
                />    
                
            </div>   

            <div className="container">
                
            </div>
        </div>
    ); 
}

export default App; 