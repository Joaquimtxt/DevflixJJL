import { useState } from "react";
import styles from "./Header.module.css";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <nav className="main-navigation">
        <a href="#" className={styles.logo} id="logo">
          DEVFLIX
        </a>
        <li>
          <a href="#" className={styles.link}>
            Início
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Filmes
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Séries
          </a>
        </li>
      </nav>
      <div className={`d-flex align-items-center ${styles.back}`}>
        <span className="text-light">
          <FiSearch />
        </span>
        <input
          className={`${styles.searchInput} ms-2 text-light rounded bg-dark border-0 form`}
          placeholder="Buscar"
          type="text"
        />
      </div>
    </header>
  );
};

export default Header;
