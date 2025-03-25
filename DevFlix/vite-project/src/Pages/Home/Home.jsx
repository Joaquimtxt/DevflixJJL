

import Recommended from "../../components/recommended/Recommended"
import MovieSelect from "../../components/movieSelect/MovieSelect"
import Category from "../../components/category/Category"
import { useEffect, useState } from "react"

function Home( { apiUrl, options }) { 
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
