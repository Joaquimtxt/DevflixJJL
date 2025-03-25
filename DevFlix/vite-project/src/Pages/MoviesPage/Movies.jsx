import React, { useEffect, useState } from 'react';
import MovieSelect from "../../components/movieSelect/MovieSelect";

const Movies = ({ apiUrl, options }) => {
  const [movies, setMovies] = useState([]);

  const searchTitle = async (titulo) => {
    const response = await fetch(`${apiUrl}search/movie?query=${titulo}&language=pt-br&page=1&with_genre=28`, options);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    searchTitle("Ação");
  }, [apiUrl, options]);

  return (
    <div>
      <h1 className='text-light'>Filmes</h1>
      <MovieSelect Titulo="Ação" movies={movies} />
    </div>
  );
};

export default Movies;