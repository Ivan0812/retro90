import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';
import { motion } from 'framer-motion';

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=dbaada33e8ba4e65502726a109e350b6&language=en-US&page=1`
        );
        const data = await response.json();
        setPopularMovies(data.results.slice(0, 5));
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  const handleDetails = (movie) => setSelectedMovie(movie);
  const closeModal = () => setSelectedMovie(null);

  return (
    <div className="my-10 px-4">
      <motion.h2
        className="text-2xl font-bold text-yellow-400 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Most Popular Movies right now!
      </motion.h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {popularMovies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onDetails={() => handleDetails(movie)} 
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
};

export default Popular;