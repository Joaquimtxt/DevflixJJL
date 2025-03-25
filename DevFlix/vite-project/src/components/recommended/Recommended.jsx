import styles from "./Recommended.module.css";

const Recommended = (props) => {
  const poster = `https://image.tmdb.org/t/p/original/${props.Poster}`;

  console.log("Props recebidas:", props);

  return (
    <div className={styles.containerRecommended}>
      <div className="container-fluid mt-3 mb-3">
        <div className={styles.infoContainer}>
          <img src={poster} alt="" className="img-fluid object-fit-cover" />
          <div className={styles.infoText}>
            <span className="text-dark">Recomendado</span>
            <div className={styles.titleContainer}>
              <h1 className="text-dark">{props.Title}</h1>
            </div>
            <div className={styles.descContainer}>
              <p className="text-dark">{props.Desc}</p>
            </div>
            <a href="#" className={styles.btnRecommended}>
              Assistir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
