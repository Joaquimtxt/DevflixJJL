

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import './App.css'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Recommended from "./components/recommended/Recommended"

function App() {
 

  return (
    <>
      <Header />
      <Recommended />
    <Footer />
    </>
  )
}

export default App
