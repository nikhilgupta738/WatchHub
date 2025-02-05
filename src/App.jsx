import React, { useEffect, useState } from 'react'
import Search from './components/search'

const API_BASE_URL = 'http://www.omdbapi.com/';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const [movies, setMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage('');

        try {
            const response = await fetch(`${API_BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch Movies');
            }
            const data = await response.json();
            console.log(data);
            
            if (data.Response === 'False') {
                setErrorMessage(data.Error || 'Failed to fetch Movies');
                setMovies([]);
                return;
            }

            setMovies(data.Search || []);
        } catch (error) {
            console.error(`Error fetching Movies: ${error}`);
            setErrorMessage('Error fetching Movies. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        if (searchTerm.trim() !== "") {
            fetchMovies();
        }
    }, [searchTerm]);
    
    return (
        <main>
            <div className='pattern'>
                <div className='wrapper'>
                    <header>
                        <img src="./hero-img.png" alt="" />
                        <h1>BingeWatch <span className='text-gradient'>Movies</span> and Enjoy your Day!!</h1>
                        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    </header>
                    <section>
                        <h2>All Movies</h2>
                        {isLoading ? (
                            <p className='text-white'>Loading...</p>
                        ) : errorMessage ? (
                            <p className='text-red-500'>{errorMessage}</p>
                        ) : (
                            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {movies.map((movie) => (
                                    <div key={movie.imdbID} className="bg-gray-800 p-3 rounded-lg">
                                        <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover rounded-md" />
                                        <h2 className="text-lg mt-2">{movie.Title} ({movie.Year})</h2>
                                    </div>
                                ))}
                            </ul>
                        )}
                    </section>
                </div>
            </div>
        </main>
    )
}

export default App