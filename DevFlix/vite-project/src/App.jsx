

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import './App.css'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Recommended from "./components/recommended/Recommended"
import MovieSelect from "./components/movieSelect/MovieSelect"

function App() {
  const apiKey = "a59305243a429bc1b05bb414edddda32";
  const apiUrl = `https://developer.themoviedb.org/?apikey=${apiKey}`;
  return (
    <>
      <Header />
      <Recommended />
      <MovieSelect Titulo="Ação"/>
    <Footer />
    </>
  )
}

export default App
