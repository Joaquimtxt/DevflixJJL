
import styles from "./Header.module.css";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className={`navbar navbar-expand-md navbar-dark bg-dark ${styles.header}`}>
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <a href="#" className={styles.logo} id="logo">
          DEVFLIX
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item me-lg-3">
            <a href="#" className={`nav-link ${styles.link}`}>
              Início
            </a>
          </li>
          <li className="nav-item me-lg-3">
            <a href="#" className={`nav-link ${styles.link}`}>
              Filmes
            </a>
          </li>
          <li className="nav-item me-lg-3">
            <a href="#" className={`nav-link ${styles.link}`}>
              Séries
            </a>
          </li>
        </ul>
      </div>
      <div className={`d-flex align-items-center ${styles.back}`}>
        <span className="text-light">
          <FiSearch />
        </span>
        <input
          className={`${styles.searchInput} ms-2 text-light rounded bg-dark border-0 form-control`}
          placeholder="Buscar"
          type="text"
        />
      </div>
    </div>
  </header>
  );
};

export default Header;

// 

