import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'

const Movie = ({ movie, search }) => {
const [img, setImg] = useState(); 
const [loading, setLoading] = useState(false);

const mountedRef = useRef(true);

useEffect(() => {
    const image = new Image();
    image.src = movie.Poster; 
    image.onload = () =>{
        if (mountedRef){
            setImg(image);
        }
        setLoading(true);
        
    };
    return () => {
        //test
        mountedRef.current = false;
    }
}, [])

console.log(movie)

    return (

        <div className="movie">

            {loading ? (
                <>
                <Link to={`/movies/${search}/${movie.imdbID}`} state={{title: movie.Title, poster: movie.Poster}} className="movie__img--link">
                    <figure className="movie__img--wrapper">
                        <img src={movie.Poster} alt={movie.Title} className="movie__img"  />
                    </figure>
                </Link>


                 <div className="movie__title">
                    <Link to={`/movies/${search}/${movie.imdbID}`} state={{title: movie.Title, poster: movie.Poster}} className="movie__title--link">{movie.Title}</Link>
                </div>

                <div className="movie__year">{movie.Year}</div>

                </>
            ) : (
                <>
                <div className="movie__img--skeleton"/>
                <div className="skeleton movie__title--skeleton"/>
                <div className="skeleton movie__rating--skeleton"/>
                <div className="skeleton movie__price--skeleton"/>
                </>
            )}
 
        </div>
    )
}

export default Movie;