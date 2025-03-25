import { useState, useEffect } from "react";
import styles from "./Recommended.module.css";






const Recommended = (props) => {

  const poster = `https://image.tmdb.org/t/p/original/${props.Poster}`

  console.log("Props recebidas:", props);


  return (
    
      <div className="container-fluid p-3 mt-3">
    <div className={styles.containerRecommended}>
      <div className={styles.infoContainer}>
        <img src={poster} alt="" className="img-fluid object-fit-cover" />
        <div className={styles.infoText}>
          <span>Recomendado</span>
          <h1>{props.Title}</h1>
          <p>
           {props.Desc}
          </p>
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
