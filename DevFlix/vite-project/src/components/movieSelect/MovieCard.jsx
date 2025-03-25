import styles from "./MovieSelect.module.css";

const MovieCard = (props) => {
  return (
    <div className={`m-1 card-body ${styles.card}`}>
      <div>
        <p>{props.Year}</p>
      </div>
      <div>
        <img src={props.Poster} alt=""></img>
      </div>
      <div className={`card-title text-light`}>
        <h3>{props.Title}</h3>
        <span>{props.Type}</span>
      </div>
    </div>
  );
};

export default MovieCard;
