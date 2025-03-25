
import styles from './MovieSelect.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieSelect = (props) => {
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
  
    return (
      <div className={`container-fluid bg-body-secondary ${styles.movie}`}>
        <h1 className='ms-xl-5 ms-2'>{props.Titulo}</h1>
        <div className={`d-flex flex-column flex-md-row justify-content-start mt-2 mb-xl-5 mb-2 overflow-x-scroll ${styles.movieScroll}`} ref={scrollRef}>
       <MovieCard
       Year ={2024}
       Poster={"https://placehold.co/300x400"}
       Title={"Titulo"}
       Type={"Filme"}
       />
        <MovieCard
       Year ={2024}
       Poster={"https://placehold.co/300x400"}
       Title={"Titulo"}
       Type={"Filme"}
       />
        <MovieCard
       Year ={2024}
       Poster={"https://placehold.co/300x400"}
       Title={"Titulo"}
       Type={"Filme"}
       />
        <MovieCard
       Year ={2024}
       Poster={"https://placehold.co/300x400"}
       Title={"Titulo"}
       Type={"Filme"}
       />
        <MovieCard
       Year ={2024}
       Poster={"https://placehold.co/300x400"}
       Title={"Titulo"}
       Type={"Filme"}
       />
        <MovieCard
       Year ={2024}
       Poster={"https://placehold.co/300x400"}
       Title={"Titulo"}
       Type={"Filme"}
       />
        <MovieCard
       Year ={2024}
       Poster={"https://placehold.co/300x400"}
       Title={"Titulo"}
       Type={"Filme"}
       />
        <MovieCard
       Year ={2024}
       Poster={"https://placehold.co/300x400"}
       Title={"Titulo"}
       Type={"Filme"}
       />
        
          <h1><ion-icon name="chevron-back-outline" size="large" className={styles.scrollIcon2} onClick={handleScroll2}></ion-icon></h1>
        <h1><ion-icon name="chevron-forward-outline" size="large" className={styles.scrollIcon1} onClick={handleScroll1}></ion-icon></h1>
        </div>
      </div>
    );
  }

export default MovieSelect