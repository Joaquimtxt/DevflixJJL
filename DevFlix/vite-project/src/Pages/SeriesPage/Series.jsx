import React, { useEffect, useState } from 'react';
import MovieSelect from "../../components/movieSelect/MovieSelect";

const Series = ({ apiUrl, options }) => {
  const [movies, setMovies] = useState([]);

  const searchTitle = async (titulo) => {
    const response = await fetch(`${apiUrl}search/tv?query=${titulo}&language=pt-br&page=1&with_genre=28`, options);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    searchTitle("Séries");
  }, [apiUrl, options]);

  return (
    <div>
      <h1 className='text-light'>Séries</h1>
      <MovieSelect Titulo="Séries" movies={movies} />
    </div>
  );
};

export default Series;