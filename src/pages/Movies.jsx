import React, {useState, useEffect} from 'react';
import Movie from '../components/ui/Movie'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const {search}= useParams();
    const [searchTerm, setSearchTerm] = useState(search);

    function filterMovies(filter) {
        if (filter === "A-TO-Z") {
            setMovies(movies.slice().sort((a, b) => a.Title.localeCompare(b.Title)));
        } else if (filter === "Z-TO-A") {
            setMovies(movies.slice().sort((a, b) => b.Title.localeCompare(a.Title)));
        } else if (filter === "NEWEST-TO-OLDEST") {
            setMovies(movies.slice().sort((a, b) => b.Year.slice(-4) - a.Year.slice(-4)));
        } else if (filter === "OLDEST-TO-NEWEST") {
            setMovies(movies.slice().sort((a, b) => a.Year.slice(-4) - b.Year.slice(-4)));
        }
    }

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
                    <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterMovies(event.target.value)} className="movies__filter">
                        <option value="A-TO-Z">A to Z</option>
                        <option value="Z-TO-A">Z to A</option>
                        <option value="NEWEST-TO-OLDEST">Newest to Oldest</option>
                        <option value="OLDEST-TO-NEWEST">Oldest to Newest</option>
                    </select>
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