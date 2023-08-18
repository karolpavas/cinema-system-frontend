import React, { useState, useEffect } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Aquí puedes hacer una llamada a una API externa para obtener la lista de películas
    // Por ejemplo, usando la API de The Movie Database (TMDb)
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=20b023f5a430ff21729528b7b6bf167f')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleMovieClick = movie => {
    setSelectedMovie(movie);
  };

  return (
<div>
      <h2>CARTELERA</h2>
      <div className="MovieList">
        {movies.map(movie => (
          <div key={movie.id} className="MovieCard" onClick={() => handleMovieClick(movie)}>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="MovieDetail">
          <h3>{selectedMovie.title}</h3>
          <p>{selectedMovie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieList;
