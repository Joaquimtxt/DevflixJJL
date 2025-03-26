import React, { useEffect, useState } from 'react';
import MovieSelect from "../../components/movieSelect/MovieSelect";

const Movies = ({ apiUrl, options }) => {
  const [actionMovies, setActionMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);

  const searchByGenre = async (genreId, setMovies, minVoteAverage = '7.5') => {
    const url = `${apiUrl}discover/movie?with_genres=${genreId}&language=pt-br&page=1&vote_average.gte=${minVoteAverage}`;
    const response = await fetch(url, options);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    searchByGenre(28, setActionMovies); 
    searchByGenre(18, setDramaMovies); 
    searchByGenre(27, setHorrorMovies); 
    searchByGenre(16, setAnimationMovies); 
    searchByGenre(35, setComedyMovies); 
  }, [apiUrl, options]);

  return (
    <div>
      <h1 className='text-light'>Filmes</h1>
      <MovieSelect Titulo="Ação" movies={actionMovies} />
      <MovieSelect Titulo="Drama" movies={dramaMovies} />
      <MovieSelect Titulo="Terror" movies={horrorMovies} />
      <MovieSelect Titulo="Animação" movies={animationMovies} />
      <MovieSelect Titulo="Comédia" movies={comedyMovies} />
    </div>
  );
};

export default Movies;