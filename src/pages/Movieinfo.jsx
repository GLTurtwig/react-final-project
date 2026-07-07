import React from 'react';
import Movie from '../components/ui/Movie'

import { useParams, useLocation, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Movieinfo = () => {

    const {search, id}= useParams();
    const location = useLocation();

    const { title, poster } = location.state || {};

    return(
        <div id="movie__body">
            <main className="movies__main">
                <div className="movies__container">
                    <div className="row">

                        <div className="movie__selected--top">
                            <Link to={`/movies/${search}`} className="movie__link">
                                <FontAwesomeIcon icon="arrow-left"/>
                            </Link>
                            <Link to={`/movies/${search}`} className="movie"> <h2 className="movie__selected--title--top">Movies</h2> </Link>
                        </div>

                        <div className="movie__selected">

                            <figure className="movie__selected--figure">
                                <img src={poster} alt={title} className="movie__selected--img" />
                            </figure>

                            <div className="movie__selected--description">
                                <h2 className="movie__selected--title">{title}</h2>

                                <div className="movie__summary">
                                    <h3 className="movie__summary--title">
                                        Summary
                                    </h3>
                                    <p className="movie__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat reprehenderit quae debitis facere cupiditate, itaque ea inventore ducimus reiciendis facilis et laboriosam quasi molestias ullam, veniam incidunt illo aut.
                                    </p>
                                    <p className="movie__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat reprehenderit quae debitis facere cupiditate, itaque ea inventore ducimus reiciendis facilis et laboriosam quasi molestias ullam, veniam incidunt illo aut.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Movieinfo;