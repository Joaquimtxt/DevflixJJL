import styles from './MovieSelect.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieSelect = ({ Titulo, movies = [], series = [] }) => {
  const scrollRef = useRef(null);

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
  const items = series.length > 0 ? series : movies;
  return (
    <div className={`container-fluid ${styles.movie} p-2`}>
      <h1 className='ms-xl-5 ms-2 text-light'>{Titulo}</h1>
      <div className={`position-relative ${styles.movieScroll}`} >
        <div
          className={`d-flex flex-nowrap justify-content-start mt-2 mb-xl-5 mb-2 p-2 ${styles.movieScroll}`}
          ref={scrollRef}
        >
          {/* O movies está sendo mapeado no App.jsx na const = movies */}

          {items.map((item) => (
            <MovieCard
              key={item.id}
              Poster={item.poster_path}
              Title={item.title || item.name}
              Type={item.media_type || 'Movie'}
            />
          ))}
        </div>
        <ion-icon
          name="chevron-back-outline"
          size="large"
          className={`d-none d-xl-block ${styles.scrollIcon2}`}
          onClick={handleScroll2}
        ></ion-icon>
        <ion-icon
          name="chevron-forward-outline"
          size="large"
          className={`d-none d-xl-block ${styles.scrollIcon1}`}
          onClick={handleScroll1}
        ></ion-icon>
      </div>
    </div>
  );
};

export default MovieSelect;