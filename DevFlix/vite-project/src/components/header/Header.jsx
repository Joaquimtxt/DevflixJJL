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
    </header>
  );
};

export default Header;
