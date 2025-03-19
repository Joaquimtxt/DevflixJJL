
import styles from './MovieSelect.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useRef } from 'react';

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
        <h1 className='ms-xl-5'>{props.Titulo}</h1>
        <div className={`d-flex flex-column flex-md-row justify-content-start mt-2 mb-xl-5 mb-2 overflow-x-scroll ${styles.movieScroll}`} ref={scrollRef}>
       
          <div className={`m-1 card-body ${styles.card}`}>
            <img src='https://placehold.co/300x400'></img>
            <div className={`card-title text-light`}>
              <h5>Movie Title</h5>
            </div>
          </div>
          <div className={`m-1 card-body ${styles.card}`}>
            <img src='https://placehold.co/300x400'></img>
            <div className={`card-title text-light`}>
              <h5>Movie Title</h5>
            </div>
          </div>
          <div className={`m-1 card-body ${styles.card}`}>
            <img src='https://placehold.co/300x400'></img>
            <div className={`card-title text-light`}>
              <h5>Movie Title</h5>
            </div>
          </div>
          <div className={`m-1 card-body ${styles.card}`}>
            <img src='https://placehold.co/300x400'></img>
            <div className={`card-title text-light`}>
              <h5>Movie Title</h5>
            </div>
          </div>
          <div className={`m-1 card-body ${styles.card}`}>
            <img src='https://placehold.co/300x400'></img>
            <div className={`card-title text-light`}>
              <h5>Movie Title</h5>
            </div>
          </div>
          <div className={`m-1 card-body ${styles.card}`}>
            <img src='https://placehold.co/300x400'></img>
            <div className={`card-title text-light`}>
              <h5>Movie Title</h5>
            </div>
          </div>
          <div className={`m-1 card-body ${styles.card}`}>
            <img src='https://placehold.co/300x400'></img>
            <div className={`card-title text-light`}>
              <h5>Movie Title</h5>
            </div>
          </div>
          <h1><ion-icon name="arrow-back-outline" size="large" className={styles.scrollIcon2} onClick={handleScroll2}></ion-icon></h1>
        <h1><ion-icon name="arrow-forward-outline" size="large" className={styles.scrollIcon1} onClick={handleScroll1}></ion-icon></h1>
        </div>
      </div>
    );
  }

export default MovieSelect