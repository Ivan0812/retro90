import React, { useState } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=dbaada33e8ba4e65502726a109e350b6&query=${query}`
      );
      const data = await response.json();
      setHasSearched(true);
      setMovies(data.results || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const filteredMovies = movies.filter((movie) => {
    const year = movie.release_date ? parseInt(movie.release_date.slice(0, 4)) : null;
    return year && year >= 1980 && year <= 1999;
  });

  const handleDetails = (movie) => setSelectedMovie(movie);
  const closeModal = () => setSelectedMovie(null);

  return (
    <div className="space-y-8 pb-5">
      <Hero />
      <SearchBar onSearch={handleSearch} />

      {hasSearched && filteredMovies.length === 0 && (
        <p className="text-center text-gray-500">No movies from the 80s or 90s found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onDetails={() => handleDetails(movie)} />
        ))}
      </div>

      {selectedMovie && <MovieModal movie={selectedMovie} onClose={closeModal} />}
    </div>
  );
};

export default Home;