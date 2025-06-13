import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=dbaada33e8ba4e65502726a109e350b6&query=${query}`
        );
        const data = await res.json();
        const filtered = (data.results || [])
          .filter((movie) => {
            const year = movie.release_date ? parseInt(movie.release_date.slice(0, 4)) : null;
            return year && year >= 1980 && year <= 1999;
          })
          .slice(0, 5);
        setSuggestions(filtered);
        setHighlightedIndex(-1); // reset highlight
      } catch (error) {
        console.error('Greška kod dohvaćanja prijedloga:', error);
      }
    };

    const timeout = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSubmit = () => {
    if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
      handleSuggestionClick(suggestions[highlightedIndex].title);
    } else if (query.trim()) {
      onSearch(query);
      setSuggestions([]);
      setQuery('');
      setHighlightedIndex(-1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSuggestionClick = (title) => {
    setQuery('');
    setSuggestions([]);
    setHighlightedIndex(-1);
    onSearch(title);
  };

  return (
    <div className="max-w-xl mx-auto relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for a retro movie..."
        className="w-full p-3 border border-gray-300 rounded-t-md focus:outline-none"
      />

      {suggestions.length > 0 && (
        <ul className="bg-white border border-t-0 border-gray-300 rounded-b-md shadow-md absolute w-full z-10">
          {suggestions.map((movie, index) => (
            <li
              key={movie.id}
              className={`px-4 py-2 cursor-pointer ${
                index === highlightedIndex ? 'bg-yellow-200' : 'hover:bg-gray-100'
              }`}
              onClick={() => handleSuggestionClick(movie.title)}
            >
              {movie.title} {movie.release_date ? `(${movie.release_date.slice(0, 4)})` : ''}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={handleSubmit}
        className="mt-3 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition animate-pulse-border"
        >
        Search
      </button>
    </div>
  );
};

export default SearchBar;