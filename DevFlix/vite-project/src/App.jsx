import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/MoviesPage/Movies";
import Series from "./Pages/SeriesPage/Series";

const App = () => {

  const apiUrl = "https://api.themoviedb.org/3/";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTkzMDUyNDNhNDI5YmMxYjA1YmI0MTRlZGRkZGEzMiIsIm5iZiI6MTc0MjM4MDc5MS4xMDMwMDAyLCJzdWIiOiI2N2RhOWVmNzU5NGNhYzFlZTc2Y2JiOTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u7rZuT1Bi3QRnJ2FUAKaNgjCIqEZ9pqS5uD5e6ZnYTE",
    },
  };

  const mudaTema = () => {
    const tema = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    document.documentElement.setAttribute("data-bs-theme", tema);
  };

  mudaTema();

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", mudaTema);

  fetch(`${apiUrl}authentication`, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home apiUrl={apiUrl} options={options} />} />
        <Route
          path="/movies"
          element={<Movies apiUrl={apiUrl} options={options} />}
        />
        <Route
          path="/series"
          element={<Series apiUrl={apiUrl} options={options} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;
