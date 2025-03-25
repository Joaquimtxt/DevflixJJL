import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import './App.css'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Recommended from "./components/recommended/Recommended"
import MovieSelect from "./components/movieSelect/MovieSelect"
import Category from "./components/category/Category"
import { useEffect, useState } from "react"
function App() {
  
  const apiUrl = 'https://api.themoviedb.org/3/'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTkzMDUyNDNhNDI5YmMxYjA1YmI0MTRlZGRkZGEzMiIsIm5iZiI6MTc0MjM4MDc5MS4xMDMwMDAyLCJzdWIiOiI2N2RhOWVmNzU5NGNhYzFlZTc2Y2JiOTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u7rZuT1Bi3QRnJ2FUAKaNgjCIqEZ9pqS5uD5e6ZnYTE'
    }
  };
 
  fetch(`${apiUrl}authentication`, options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
 
 


  
  return (
    <>
      <Header />
      <Recommended />
      <Category />
    <Footer />
    </>
  )
}

export default App
