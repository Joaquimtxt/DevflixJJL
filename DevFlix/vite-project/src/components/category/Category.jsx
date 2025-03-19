import styles from "./Category.module.css";

const Category = () => {
  return (
    <div className={styles.categoryContainer}>
      <h5>o conteúdo que você ama</h5>
      <h1>EM UM SÓ LUGAR</h1>

      <div className={styles.categoryList}>
        <div className="movie d-flex flex-column flex-md-row justify-content-center my-5 text-light">
          <div className="m-1">
            <img src="https://placehold.co/300x400"></img>
            <div className="position-absolute">Movie Title</div>
          </div>

          <div className="m-1">
            <img src="https://placehold.co/300x400"></img>
            <div className="position-absolute">Movie Title</div>
          </div>

          <div className="m-1">
            <img src="https://placehold.co/300x400"></img>
            <div className="position-absolute">Movie Title</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
