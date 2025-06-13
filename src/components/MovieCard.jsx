import React from 'react';

const MovieCard = ({ movie, onDetails }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={imageUrl}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
        <p className="text-sm text-gray-400 mb-2">
          {movie.release_date ? movie.release_date.slice(0, 4) : 'Unknown Year'}
        </p>
        <p className="text-yellow-400 font-semibold mb-2">⭐ {movie.vote_average}</p>
        <button
          onClick={onDetails}
          className="mt-auto bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600 transition text-sm"
        >
          More Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;