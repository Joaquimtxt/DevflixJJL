import React from 'react';
import MovieSelect from "../../components/movieSelect/MovieSelect";

const Movies = () => {
  return (
    <div>
      <h1 className='text-light'>Filmes</h1>
      <MovieSelect Titulo="Ação" />
    </div>
  );
};

export default Movies;