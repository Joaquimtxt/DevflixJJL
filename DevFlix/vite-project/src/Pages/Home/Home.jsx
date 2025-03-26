import Recommended from "../../components/recommended/Recommended";
import MovieSelect from "../../components/movieSelect/MovieSelect";
import Category from "../../components/category/Category";
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
  const [pesquisar, setPesquisar] = useState("");
  


  fetch(`${apiUrl}authentication`, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));



  const searchTitle = async (titulo) => {
    const response = await fetch(
      `${apiUrl}search/movie?query=${titulo}&language=pt-br&page=1&with_genre=28`,
      options
    );
    const data = await response.json();

    setMovies(data.results);
  };

  const searchRecommended = async () => {
    const response = await fetch(
      `${apiUrl}movie/popular?language=pt-br&page=1`,
      options
    );
    const data = await response.json();

    setRecommended(data.results[2]);
  };

  const searchPopular = async () => {
     const response = await fetch(`${apiUrl}movie/popular?language=pt-br&page=1`,
       options
      );
     const data = await response.json();

    setPopular(data.results);
  }




  useEffect(() => {
    searchTitle("");
    searchRecommended(setRecommended);
    searchPopular(setPopular);
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

      <Category movies={movies} />
      </div>
   
  );
}

export default Home;
