import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-gray-700 bg-gradient d-flex z-3 justify-content-between align-items-center py-1 px-2">
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
          <Link to="/" className="fs-2 fw-bolder" id="logo">
            DEVFLIX
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-lg-3 list-st">
              <Link to="/" className={`nav-link ${styles.link}`}>
                Início
              </Link>
            </li>
            <li className="nav-item me-lg-3">
              <Link to="/movies" className={`nav-link ${styles.link}`}>
                Filmes
              </Link>
            </li>
            <li className="nav-item me-lg-3">
              <Link to="/series" className={`nav-link ${styles.link}`}>
                Séries
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

//
