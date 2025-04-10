import styles from './MovieSelect.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useRef, useState } from 'react';
import MovieCard from './MovieCard';
import Description from './Description';

const MovieSelect = ({ Titulo, movies = [], series = [] }) => {
  const scrollRef = useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleScroll1 = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handleScroll2 = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };
  

  const items = Array.isArray(series) && series.length > 0 ? series : Array.isArray(movies) ? movies : [];
  return (
    <div className="container-fluid rounded-2 p-2">
      <h1 className='ms-xl-5 ms-2 text-light'>{Titulo}</h1>
      <div className={`position-relative ${styles.movieScroll}`} >
        <div
          className={`d-flex flex-nowrap justify-content-start mt-2 mb-xl-5 mb-2 p-2 ${styles.movieScroll}`}
          ref={scrollRef}
        >
          {items.map((item) => (
            <div key={item.id}>
              <MovieCard
                Poster={item.poster_path}
                Title={item.title || item.name}
                Type={(series.length > 0 ? 'series' : 'movie')}//Se a lista de series for maior que 0, indica que há séries, e que o Type é series
                //Agora se for === 0, significa que é um Filme
                onClick={() => handleMovieClick(item)}
                data-bs-toggle="modal"
                data-bs-target="#movieModal"
              />
            </div>
          ))}
        </div>
        <ion-icon
          name="chevron-back-outline"
          size="large"
          className={`d-none d-md-block ${styles.scrollIcon2}`}
          onClick={handleScroll2}
        ></ion-icon>
        <ion-icon
          name="chevron-forward-outline"
          size="large"
          className={`d-none d-md-block ${styles.scrollIcon1}`}
          onClick={handleScroll1}
        ></ion-icon>
      </div>
      {selectedMovie && <Description movieDesc={selectedMovie} />}
    </div>
  );
};

export default MovieSelect;