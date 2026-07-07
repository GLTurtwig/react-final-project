import React, {useState, useEffect} from 'react';
import Movie from '../components/ui/Movie'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const {search}= useParams();
    const [searchTerm, setSearchTerm] = useState(search);



    

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await getMovies(search?search: "batman");
            setMovies(moviesData);
        };
        fetchMovies();
    }, []);


    async function getMovies(search) {
        const movies = await fetch(`https://www.omdbapi.com/?apikey=5df96703&s=${search?search: "batman"}`);
        const moviesData = await movies.json();
        return moviesData.Search;
    }

    function onSearch(){
        getMovies(searchTerm).then((moviesData) => {
            setMovies(moviesData);
        });
    }

    return(
        <div id="movies-page">
            <div className="movies__topper">
                <div className="movies__title">Showing all <span className="blue">{search?search: "Unknown"}</span> movies</div>
                <div className="movies__search">
                    <input type="text" placeholder="Search for movies..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button onClick={() => onSearch()} className="btn"><FontAwesomeIcon icon="magnifying-glass"/></button>
                </div>
                
            </div>
            <div className="movies">
                {movies.map(movie => (
                    <div key={movie.imdbID}>
                        <Movie movie={movie} search={search} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movies;