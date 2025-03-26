import React from 'react';
import styles from './MovieDescription.module.css';

const Description = ({ movieDesc }) => {
  return (
    <div className={`modal fade ${styles.modalBackdrop}`} id="movieModal" tabIndex="-1" aria-hidden="true">
      <div className={`modal-dialog ${styles.movieModal}`}>
        <div className="modal-content">
          <div className="modal-header bg-dark">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <img
              src={movieDesc.Poster}
              alt={`Imagem da capa do filme ${movieDesc.Title}`}
              className={`rounded-top ${styles.movieInfo}`}
            />
          </div>
          <div className="modal-body">
            <div className={`position-absolute bottom-0 w-100 ${styles.movieType}`}>
              <div className='position-absolute text-uppercase text-light' style={{ top: '2em', left: '2em' }}>
                {movieDesc.Type}
                <h1>{movieDesc.Title}</h1>
                <a
                  href={`https://google.com/search?q=${encodeURIComponent(
                    movieDesc.Title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='bg-light text-decoration-none fw-bolder'
                >
                  ▶️ Assistir
                </a>
              </div>
            </div>
          </div>
          <div className={`d-flex fs-4 ${styles.containerMisc}`}>
            <div className='flex-grow-1'>
              Avaliação: {movieDesc.imdbRating} | Duração: {movieDesc.Runtime} |{" "}
              {movieDesc.Released}
            </div>
            <div className='flex-grow-1'>
              <p>Elenco: {movieDesc.Actors}</p>
              <p>Gênero: {movieDesc.Genre}</p>
            </div>
          </div>
          <div className={`p-sm-1 ${styles.desc}`}>
            <p>Sinopse: {movieDesc.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;