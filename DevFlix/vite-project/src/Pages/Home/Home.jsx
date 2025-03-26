import Recommended from "../../components/recommended/Recommended";
import MovieSelect from "../../components/movieSelect/MovieSelect";
import Category from "../../components/category/Category";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useState } from "react";

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
  const [realityMovies, setRealityMovies] = useState([]);
  const [kidsMovies, setKidsMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [ScifiMovies, setScifiMovies] = useState([]);
  
  const [pesquisar, setPesquisar] = useState("");
  


  fetch(`${apiUrl}authentication`, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));


const getKidsMovie = async () =>{
  const response = await fetch(`${apiUrl}discover/tv?language=pt-br&with_genres=10762&vote_average.gte=8`, options)
  const data = await response.json()

  setKidsMovies(data.results[2])

  

}
const getAnimationMovie = async () => {
  const response = await fetch(`${apiUrl}discover/tv?language=pt-br&with_genres=16&vote_average.gte=8`, options)
  const data = await response.json()

  setAnimationMovies(data.results[2])
}

const getRealityMovie = async () => {
  const response = await fetch(`${apiUrl}discover/tv?language=pt-br&with_genres=10764`, options)
  const data = await response.json()

  setAnimationMovies(data.results)
}


  const searchTitle = async (titulo) => {
    const response = await fetch(
      `${apiUrl}search/movie?query=${titulo}&language=pt-br&page=1&with_genre=28`,
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
  }




  useEffect(() => {
    getAnimationMovie()
    getKidsMovie()
    getRealityMovie()
    searchTitle("Spider-Man");
    getRecommended(setRecommended);
    getPopular(setPopular);

  }, []);











  return (
    <div>

      <Recommended
        Title={recommendedMovie.title}
        Desc={recommendedMovie.overview}
        Poster={recommendedMovie.backdrop_path}
        />

{movies.length == 0 ? (
      <h5 className="text-center bg-danger-subtle p-2"> Sua pesquisa aparecerá aqui. </h5>
    ) : (
      <div>
        <MovieSelect Titulo="Pesquisa" movies={movies} />
      </div>
    )}

    <div>
      <MovieSelect Titulo="Lançamentos Devflix"
      movies={popularMovies}
      />
    </div>





<Category
  Title={animationMovies.name}
  Poster={animationMovies.poster_path}
  Categoria={animationMovies.vote_average}
/>





  </div>
   
  );
}

export default Home;
