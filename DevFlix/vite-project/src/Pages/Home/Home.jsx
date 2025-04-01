import Recommended from "../../components/recommended/Recommended";
import MovieSelect from "../../components/movieSelect/MovieSelect";
import Category from "../../components/category/Category";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";


function Home() {
  const apiUrl = "https://api.themoviedb.org/3/";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTkzMDUyNDNhNDI5YmMxYjA1YmI0MTRlZGRkZGEzMiIsIm5iZiI6MTc0MjM4MDc5MS4xMDMwMDAyLCJzdWIiOiI2N2RhOWVmNzU5NGNhYzFlZTc2Y2JiOTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u7rZuT1Bi3QRnJ2FUAKaNgjCIqEZ9pqS5uD5e6ZnYTE",
    },
  };

  const [movies, setMovies] = useState([]);
  const [recommendedMovie, setRecommended] = useState([]);
  const [popularMovies, setPopular] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [realityMovies, setRealityMovies] = useState([]);
  const [kidsMovies, setKidsMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [ScifiMovies, setScifiMovies] = useState([]);
  
  const [pesquisar, setPesquisar] = useState("");
  

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    searchTitle(searchTerm);
  };

  fetch(`${apiUrl}authentication`, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));


const getKidsMovie = async () =>{
  const response = await fetch(`${apiUrl}discover/tv?language=pt-br&with_genres=10762&vote_average.gte=8&with_original_language=en`, options)
  const data = await response.json()

  setKidsMovies(data.results[0])

  

}
const getAnimationMovie = async () => {
  const response = await fetch(`${apiUrl}discover/tv?language=pt-br&with_genres=16&vote_average.gte=8&with_original_language=en`, options)
  const data = await response.json()

  setAnimationMovies(data.results[0])
}

const getRealityMovie = async () => {
  const response = await fetch(`${apiUrl}discover/tv?language=pt-br&with_genres=10764&vote_average.gte=8&with_original_language=en`, options)
  const data = await response.json()

  setRealityMovies(data.results[0])
}


  const searchTitle = async (titulo) => {
    const response = await fetch(
      `${apiUrl}search/movie?query=${titulo}&language=pt-br&page=1`,
      options
    );
    const data = await response.json();

    setMovies(data.results);
  };

  const getRecommended = async () => {
    const response = await fetch(
      `${apiUrl}movie/popular?language=pt-br&page=1`,
      options
    );
    const data = await response.json();

    setRecommended(data.results[2]);
  };


  const getPopular = async () => {
     const response = await fetch(`${apiUrl}movie/popular?language=pt-br&page=1`,
       options
      );
     const data = await response.json();
    setPopular(data.results);
  };


const getPopularSeries = async () =>{

  const response = await fetch(`${apiUrl}trending/tv/week?language=pt-br`. options)
  const data = await response.json();

  setPopularSeries(data.results);
}
  useEffect(() => {
    getAnimationMovie()
    getKidsMovie()
    getRealityMovie()
    searchTitle("");
    getRecommended(setRecommended);
    getPopular(setPopular);
    getPopularSeries(setPopularSeries)

  }, []);








  


  return (
    <div>
      <div className="container mt-4 mb-3 overflow-hidden">
        <div className="search-bar-container">
          <form onSubmit={handleSearch} className="d-flex align-items-center w-100 ">
            <div className="input-group mb-3">
              <input
                className=" text-light border border-4 border-danger-subtle form-control fs-4 bg-black"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="btn btn-danger btn-lg ">
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>


      <Recommended
        Title={recommendedMovie.title}
        Desc={recommendedMovie.overview}
        Poster={recommendedMovie.backdrop_path}
      />

      {movies.length == 0 ? (
        <h5 className="text-center bg-danger-subtle p-2">
          {" "}
          Sua pesquisa aparecerá aqui.{" "}
        </h5>
      ) : (
        <div>
          <h1 className="m-4">Pesquisa</h1>

          
          <MovieSelect movies={movies} />
        </div>
      )}

      

<div>


        <h1>Novidades Devflix</h1>
        <MovieSelect movies={popularMovies} />

        <h1>Séries em Alta</h1>
        <MovieSelect movies={popularSeries}
        
        />
      </div>





<Category
  Title={kidsMovies.name}
  Poster={kidsMovies.poster_path}
  Categoria={kidsMovies.vote_average}

  Title2={animationMovies.name}
  Poster2={animationMovies.poster_path}
  Categoria2={animationMovies.vote_average}

  Title3={realityMovies.name}
  Poster3={realityMovies.poster_path}
  Categoria3={realityMovies.vote_average}
/>


  </div>

  )
  }



export default Home;
