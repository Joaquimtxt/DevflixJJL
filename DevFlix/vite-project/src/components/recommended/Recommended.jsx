import styles from "./Recommended.module.css";

const Recommended = () => {
  return (
    <div className={styles.containerRecommended}>
      <div className={styles.infoContainer}>
        <img src="https://placehold.co/1920x400" alt="" />
        <div className={styles.infoText}>
          <span>Recomendado</span>
          <h1>Movie Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            dolorem nobis, <br /> illo voluptatibus tenetur asperiores
            perferendis quidem eaque alias officia. <br />
            Error eaque velit vitae in dolorum officia a exercitationem ea.
          </p>
          <a href="#" className={styles.btnRecommended}>
            Assistir
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
