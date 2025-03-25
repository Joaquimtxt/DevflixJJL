

import Recommended from "../../components/recommended/Recommended"
import MovieSelect from "../../components/movieSelect/MovieSelect"
import Category from "../../components/category/Category"
import { useEffect, useState } from "react"

function Home() {
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
 
 
  const [pesquisar, setPesquisar] = useState("")
  const [movies, setMovies] = useState([])
 
  const searchTitle = async (titulo) => {
    const response = await fetch(`${apiUrl}search/movie?query=${titulo}&language=pt-br&page=1&with_genre=28`, options);
    const data = await response.json()


    setMovies(data.results);
  };

useEffect(() =>{
  searchTitle("Jogos Mortais")
}, [])

const [recommendedMovies, setRecommended] = useState([]);

  const searchRecommended = async () => {
 
      const response = await fetch(`${apiUrl}movie/popular?language=pt-br&page=1`, options);
      const data = await response.json();
      setRecommended(data.results[0]);
  };

  useEffect(() => {
    searchRecommended();
  },[]);
  return (
    <>
       <Recommended 
        Title={recommendedMovies.title}
        Desc={recommendedMovies.overview}
        Poster={recommendedMovies.backdrop_path}
        />
    
      <MovieSelect Titulo="Lançamentos DevFlix" movies={movies} />
      <Category />
    </>
  )
}

export default Home
