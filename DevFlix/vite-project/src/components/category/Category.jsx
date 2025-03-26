
import styles from "./Category.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const Category = (props) => {
  
  const poster = `https://image.tmdb.org/t/p/w400/${props.Poster}`
  const poster2 = `https://image.tmdb.org/t/p/w400/${props.Poster2}`
  const poster3 = `https://image.tmdb.org/t/p/w400/${props.Poster3}`

  return (
    <div className="text-center">
      <h5 className="mt-2">o conteúdo que você ama</h5>
      <h1 className="text-vibrant-red-700">EM UM SÓ LUGAR</h1>

      <div className="bg-vibrant-red-800">
        <div className="movie d-flex flex-column flex-md-row justify-content-center my-5 text-light">
          <div className="m-1">
            <img src={poster}></img>
            <div className={styles.categoryTitle}>⭐ {props.Categoria}</div>
            
            <div className="fw-bold container container-fluid w-100"><h5>{props.Title}</h5></div>
            
          </div>

          <div className="m-1">
            <img src={poster2}></img>
            <div className="fs-5 fw-semibold"><h6>⭐ {props.Categoria2}</h6></div>
            <div className=" fw-bold"><h5>{props.Title2}</h5></div>
          </div>

          <div className="m-1">
            <img src={poster3}></img>
            <div className="fs-5 fw-semibold"><h6>⭐ {props.Categoria3}</h6></div>
            <div className=" fw-bold"><h5>{props.Title3}</h5></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
