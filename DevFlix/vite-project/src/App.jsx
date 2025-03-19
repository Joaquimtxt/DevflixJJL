

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import './App.css'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Recommended from "./components/recommended/Recommended"
import MovieSelect from "./components/movieSelect/MovieSelect"

function App() {
 

  return (
    <>
      <Header />
      <Recommended />
      <MovieSelect />
    <Footer />
    </>
  )
}

export default App
