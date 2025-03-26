import styles from "./Category.module.css";


const Category = (props) => {
  
  const poster = `https://image.tmdb.org/t/p${props.Poster}`
  return (
    <div className={styles.categoryContainer}>
      <h5>o conteúdo que você ama</h5>
      <h1>EM UM SÓ LUGAR.</h1>

      <div className={styles.categoryList}>
        <div className="movie d-flex flex-column flex-md-row justify-content-center my-5 text-light">
          <div className="m-1">
            <img src={poster}></img>
            <div className={styles.categoryTitle}>{props.Categoria}</div>
            <div className={styles.movieTitle}>{props.Titulo}</div>
          </div>

      
 
        </div>
      </div>
    </div>
  );
};

export default Category;
