import React, { useState, useEffect } from 'react';
import UndrawMovies from "../assets/undraw_movie-night.svg"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Landing(){
    
    const [searchTerm, setSearchTerm] = useState("");

    const randomMovies = ["Batman", "Superman", "Spiderman", "Iron Man", "Thor", "Hulk", "Black Panther", "Wonder Woman", "Pokémon"];
    const randomMovie = randomMovies[Math.floor(Math.random() * randomMovies.length)];



    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Welcome to Movie Cat!</h1>
                        
                        <h2>Find your dream movie at <span className="blue">Movie Cat!</span></h2>
                        <div className="search-bar">
                            <input type="text" className="landing__search" placeholder={`${randomMovie}...?`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <Link to={`/movies/${searchTerm?searchTerm: randomMovie}`}>
                                <button className="btn">
                                    <FontAwesomeIcon icon="magnifying-glass"/>
                                </button>
                            </Link>
                        </div>
                        
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawMovies} alt="" className=""></img>
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing;