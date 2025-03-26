import styles from "./MovieSelect.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const MovieCard = (props) => {
  const poster = `https://image.tmdb.org/t/p/w300/${props.Poster}`
  return (
    <div className={`m-1 card-body ${styles.card}`}  onClick={props.onClick}>
      <div>
        <p>{props.Year}</p>
      </div>
      <div>
        <img src={poster} alt=""></img>
      </div>
      <div className={`card-title text-light`}>
        <h3>{props.Title}</h3>
        <span>{props.Type}</span>
      </div>
    </div>
  );
};

export default MovieCard;
