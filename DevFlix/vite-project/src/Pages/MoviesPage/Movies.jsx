import React, { useEffect, useState } from "react";
import MovieSelect from "../../components/movieSelect/MovieSelect";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const Movies = ({ apiUrl, options }) => {
  const [actionMovies, setActionMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);

  const searchByGenre = async (genreId, setMovies, minVoteAverage = "7.5") => {
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
      <h1 className="text-center">Filmes</h1>
      <div>
        <h2 className="ms-3">Ação</h2>
        <MovieSelect movies={actionMovies} />
      </div>
      <div>
        <h2 className="ms-3">Drama</h2>
        <MovieSelect movies={dramaMovies} />
      </div>
      <div>
        <h2 className="ms-3">Terror</h2>
        <MovieSelect movies={horrorMovies} />
      </div>
      <div>
      <h2 className="ms-3">Animação</h2>
        <MovieSelect movies={animationMovies} />
      </div>
      <h2 className="ms-3">Comédia</h2>
      <MovieSelect movies={comedyMovies} />
    </div>
  );
};

export default Movies;
