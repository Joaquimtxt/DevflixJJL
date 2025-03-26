
import styles from "./Category.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const Category = (props) => {
  
  const poster = `https://image.tmdb.org/t/p/w300/${props.Poster}`
  return (
    <div className="text-center">
      <h5 className="mt-2">o conteúdo que você ama</h5>
      <h1 className="text-vibrant-red-700">EM UM SÓ LUGAR</h1>

      <div className="bg-vibrant-red-800">
        <div className="movie d-flex flex-column flex-md-row justify-content-center my-5 text-light">
          <div className="m-1">
            <img src={poster}></img>
            <div className={styles.categoryTitle}>⭐ {props.Categoria}</div>

            <div className="fw-bold fs-5 container w-50">{props.Title}</div>
          </div>

          <div className="m-1">
            <img src="https://placehold.co/300x400"></img>
            <div className="fs-5 fw-semibold"><h6>Category Title</h6></div>
            <div className="fs-5 fw-bold"><h5>Movie Title</h5></div>
          </div>

          <div className="m-1">
            <img src="https://placehold.co/300x400"></img>
            <div className="fs-5 fw-semibold"><h6>Category Title</h6></div>
            <div className="fs-5 fw-bold"><h5>Movie Title</h5></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
