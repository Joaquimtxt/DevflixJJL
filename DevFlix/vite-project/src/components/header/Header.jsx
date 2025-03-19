import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className="main-navigation">
        <a href="#" className="logo">DEVFLIX</a>
        <li><a href="#">Início</a></li>
        <li><a href="#">Filmes</a></li>
        <li><a href="#">Séries</a></li>
      </nav>
    </header>
  );
};

export default Header;
