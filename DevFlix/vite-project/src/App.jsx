import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from './Pages/Home/Home';
import Movies from './Pages/MoviesPage/Movies';
import Series from './Pages/SeriesPage/Series';

const App = () => {
  const mudaTema = () => {
    const tema = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

      document.documentElement.setAttribute("data-bs-theme", tema)
  };

  mudaTema()

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", mudaTema)


  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>
      <Footer/>
    </Router>
  );
};


export default App;
