import React from 'react';

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    : 'https://via.placeholder.com/780x439?text=No+Image';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-xl w-full p-6 relative text-black">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl font-bold"
        >
          &times;
        </button>
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="text-sm text-gray-700 mb-2">
          Release Date: {movie.release_date || 'N/A'}
        </p>
        <p className="text-sm text-gray-700 mb-4">
          Rating: ⭐ {movie.vote_average}
        </p>
        <p className="text-sm text-gray-800">{movie.overview || 'No overview available.'}</p>
      </div>
    </div>
  );
};

export default MovieModal;